using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;

namespace ARCS
{
    public class StructuredData
    {
        public static Lazy<StructuredData> Data = new Lazy<StructuredData>();

        public static string RemoveHtmlTags(string input)
        {
            return Regex.Replace(input, "<.*?>", String.Empty);
        }

        public StructuredData()
        {
            try
            {
                FilmFest2018 = GetFilmFest();
                HtmlContent = FilmFest2018;
            }
            catch (Exception)
            {

            }
        }

        public string FilmFest2018 { get; private set; }

        public string HtmlContent { get; private set; }

        private string GetFilmFest()
        {
            List<Structured.Event> events = new List<Structured.Event>();
            var filmFest = JObject.Parse(StaticContent.JsonContent["content_filmfest2018"]);

            Dictionary<string, Structured.PersonType> guests = new Dictionary<string, Structured.PersonType>();
            foreach (var guestToken in filmFest["guests"])
            {
                var gst = guestToken.ToObject<GuestItem>();
                guests[gst.Id] = new Structured.PersonType()
                {
                    Name = gst.Name,
                    Description = gst.Details,
                    Image = gst.ImagePath
                };
            }

            foreach (var k in filmFest)
            {
                if (k.Key == "films")
                {
                    var films = k.Value;
                    foreach (var filmToken in films)
                    {
                        var film = filmToken.ToObject<FilmFestEvent>();
                        List<Structured.PersonType> performers = new List<Structured.PersonType>();
                        if (film.structuredPerformers != null)
                        {
                            foreach (var p in film.structuredPerformers)
                            {
                                if (guests.TryGetValue(p, out var gst))
                                {
                                    performers.Add(gst);
                                }
                            }
                        }
                        events.Add(new Structured.Event()
                        {
                            Name = film.Name,
                            Description = film.GetShortDescription(),
                            Url = film.Url,
                            Location = Structured.LocationType.SiffUptown,
                            StartDate = film.StartDate,
                            EndDate = film.EndDate,
                            Image = film.ImagePath,
                            Offers = new List<Structured.Offer>() { new Structured.Offer() { Url = film.TicketLink, Availability = Structured.Offer.AvailabilityType.InStock, Price = "12", PriceCurrency = "USD" } },
                            Performer = performers
                        });
                    }
                }

                if (k.Key == "specialEvents")
                {
                    foreach(var eventToken in k.Value)
                    {
                        var specialEvent = eventToken.ToObject<SpecialEvent>();
                        List<Structured.PersonType> performers = new List<Structured.PersonType>();
                        if (specialEvent.structuredPerformers != null)
                        {
                            foreach (var p in specialEvent.structuredPerformers)
                            {
                                if (guests.TryGetValue(p, out var gst))
                                {
                                    performers.Add(gst);
                                }
                            }
                        }
                        events.Add(new Structured.Event()
                        {
                            Name = specialEvent.Name,
                            Description = specialEvent.GetShortDescription(),
                            Url = specialEvent.Url,
                            Location = specialEvent.GetLocation(),
                            Image = specialEvent.ImagePath,
                            StartDate = specialEvent.StructuredStartDate,
                            EndDate = specialEvent.StructuredEndDate,
                            Performer = performers
                        });
                    }
                }
            }
            return JsonConvert.SerializeObject(events, new JsonSerializerSettings() { ContractResolver = new CamelCasePropertyNamesContractResolver() });
        }

        private struct FilmFestEvent
        {
            public string Name { get { return _name; } set { _name = RemoveHtmlTags(value); } }

            private string _name;

            public List<string> Description { private get; set; }

            public string StartDate { get; set; }

            public string EndDate { get; set; }

            public string ImagePath { get { return _imgUrl; } set { _imgUrl = "https://arcsproject.org/Resources/Images/film_fest_2018/" + value; } }

            public string TicketLink { get; set; }

            private string _imgUrl;

            public string Id { get; set; }

            public string Url { get { return "https://arcsproject.org/film-festival#" + Id; } }

            public List<string> structuredPerformers { get; set; }

            public string GetShortDescription()
            {
                var ret = "";
                foreach (var d in Description)
                {
                    var sanitized = RemoveHtmlTags(d);
                    if (ret == "")
                    {
                        ret += sanitized;
                    }
                    else
                    {
                        ret += " " + sanitized;
                    }
                }
                return ret;
            }
        }

        private struct SpecialEvent
        {
            public string Name { get { return _name; } set { _name = RemoveHtmlTags(value); } }

            private string _name;

            public List<string> DescriptionHtml { private get; set; }

            public string StructuredStartDate { get; set; }

            public string StructuredEndDate { get; set; }

            public string StructuredLocation { private get; set; }

            public string ImagePath { get { return _imgUrl; } set { _imgUrl = "https://arcsproject.org/Resources/Images/" + value; } }

            private string _imgUrl;

            public string Id { get; set; }

            public string Url { get { return "https://arcsproject.org/film-festival#" + Id; } }

            public List<string> structuredPerformers { get; set; }

            public string GetShortDescription()
            {
                var ret = "";
                foreach (var d in DescriptionHtml)
                {
                    var sanitized = Regex.Replace(d, "<.*?>", String.Empty);
                    if (ret == "")
                    {
                        ret += sanitized;
                    }
                    else
                    {
                        ret += " " + sanitized;
                    }
                }
                return ret;
            }

            public Structured.LocationType GetLocation()
            {
                if (StructuredLocation == "ANT")
                {
                    return Structured.LocationType.AntGallery;
                }
                if (StructuredLocation == "RomanianCenter")
                {
                    return Structured.LocationType.RomanianCenter;
                }
                return default(Structured.LocationType);
            }
        }

        private struct GuestItem
        {
            public string Name { get { return _name; } set { _name = RemoveHtmlTags(value); } }

            private string _name;

            public string Id { get; set; }

            public string Details { get; set; }

            public string ImagePath { get { return _imgUrl; } set { _imgUrl = "https://arcsproject.org/Resources/Images/film_fest_2018/" + value; } }

            private string _imgUrl;
        }

        private static class Structured
        {
            public struct Event
            {
                [JsonProperty("@context")]
                public static string Context => "http://schema.org";

                [JsonProperty("@type")]
                public static string Type => "Event";

                public string Name { get; set; }

                public string Description { get; set; }

                public string Url { get; set; }

                public LocationType Location { get; set; }

                public string StartDate { get; set; }

                public string EndDate { get; set; }

                public string Image { get; set; }

                public List<Offer> Offers { get; set; }

                public List<PersonType> Performer { get; set; }
            }

            public struct Offer
            {
                [JsonProperty("@type")]
                public static string Type => "Offer";

                public string Url { get; set; }

                [JsonConverter(typeof(StringEnumConverter), new object[] { false })]
                public AvailabilityType Availability { get; set; }

                public string Price { get; set; }

                public string PriceCurrency { get; set; }

                public enum AvailabilityType
                {
                    InStock,
                    SoldOut,
                    PreOrder
                }
            }

            public struct LocationType
            {
                public static readonly LocationType SiffUptown = new LocationType() { Name = "SIFF Cinema Uptown", Address = new AddressType() { StreetAddress = "511 Queen Anne Avenue N", AddressLocality = "Seattle", PostalCode = "98109", AddressRegion = "WA", AddressCountry = "US" } };

                public static readonly LocationType AntGallery = new LocationType() { Name = "A/NT Gallery", Address = new AddressType() { StreetAddress = "305 Harrison Street", AddressLocality = "Seattle", PostalCode = "98109", AddressRegion = "WA", AddressCountry = "US" } };

                public static readonly LocationType RomanianCenter = new LocationType() { Name = "The Romanian Center at The Three Holy Hierarchs Church", Address = new AddressType() { StreetAddress = "6402 226th Street SW", AddressLocality = "Mountlake Terrace", PostalCode = "98043", AddressRegion = "WA", AddressCountry = "US" } };

                [JsonProperty("@type")]
                public static string Type => "Place";

                public string Name { get; set; }

                public AddressType Address { get; set; }

                public class AddressType
                {
                    [JsonProperty("@type")]
                    public static string Type => "PostalAddress";

                    public string StreetAddress { get; set; }

                    public string AddressLocality { get; set; }

                    public string PostalCode { get; set; }

                    public string AddressRegion { get; set; }

                    public string AddressCountry { get; set; }
                }
            }

            public struct PersonType
            {
                [JsonProperty("@type")]
                public static string Type => "Person";

                public string Name { get; set; }

                public string Image { get; set; }

                public string Description { get; set; }
            }
        }
    }
}