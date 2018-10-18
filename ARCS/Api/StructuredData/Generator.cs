using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;
using ARCS.WebsiteData.FilmFest;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;
using Newtonsoft.Json.Serialization;

namespace ARCS.StructuredData
{
    public class Generator
    {
        public static Lazy<Generator> Data = new Lazy<Generator>();

        public Generator()
        {
            try
            {
                FilmFest2018 = Utils.RemoveHtmlTags(GetFilmFest());
                GlobalHtmlContent = JsonConvert.SerializeObject(Organization.Arcs, new JsonSerializerSettings() { ContractResolver = new CamelCasePropertyNamesContractResolver() }); ;
            }
            catch (Exception)
            {

            }
        }

        public string FilmFest2018 { get; private set; }

        public string GlobalHtmlContent { get; private set; }

        private string GetFilmFest()
        {
            List<Event> events = new List<Event>();
            var filmFest = JObject.Parse(StaticContent.JsonContent["content_filmfest2018"]);

            Dictionary<string, Person> guests = new Dictionary<string, Person>();
            foreach (var guestToken in filmFest["guests"])
            {
                var gst = guestToken.ToObject<FilmFestGuest>();
                guests[gst.Id] = new Person()
                {
                    Name = gst.Name,
                    Description = gst.Details,
                    Image = gst.ImagePath,
                    Url = gst.Url
                };
            }

            foreach (var k in filmFest)
            {
                if (k.Key == "films")
                {
                    var films = k.Value;
                    foreach (var filmToken in films)
                    {
                        var film = filmToken.ToObject<Film>();
                        List<Person> performers = new List<Person>();
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
                        events.Add(new Event()
                        {
                            Name = film.Name,
                            Description = film.ShortDescription,
                            Url = film.Url,
                            Location = Location.SiffUptown,
                            StartDate = film.StartDate,
                            EndDate = film.EndDate,
                            Image = film.ImagePath,
                            Offers = new List<Offer>() { new Offer() { Url = film.TicketLink, Availability = Offer.AvailabilityType.InStock, Price = "12", PriceCurrency = "USD" } },
                            Performer = performers
                        });
                    }
                }

                if (k.Key == "specialEvents")
                {
                    foreach(var eventToken in k.Value)
                    {
                        var specialEvent = eventToken.ToObject<FilmFestEvent>();
                        List<Person> performers = new List<Person>();
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
                        events.Add(new Event()
                        {
                            Name = specialEvent.Name,
                            Description = specialEvent.ShortDescription,
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
    }
}