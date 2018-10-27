using Newtonsoft.Json;

namespace ARCS.StructuredData
{
    public struct Location
    {
        public static readonly Location SiffUptown = new Location() { Name = "SIFF Cinema Uptown", Address = new AddressType() { StreetAddress = "511 Queen Anne Avenue N", AddressLocality = "Seattle", PostalCode = "98109", AddressRegion = "WA", AddressCountry = "US" } };

        public static readonly Location SiffFilmCenter = new Location() { Name = "SIFF Film Center", Address = new AddressType() { StreetAddress = "305 Harrison St", AddressLocality = "Seattle", PostalCode = "98109", AddressRegion = "WA", AddressCountry = "US" } };

        public static readonly Location AntGallery = new Location() { Name = "A/NT Gallery", Address = new AddressType() { StreetAddress = "305 Harrison Street", AddressLocality = "Seattle", PostalCode = "98109", AddressRegion = "WA", AddressCountry = "US" } };

        public static readonly Location RomanianCenter = new Location() { Name = "The Romanian Center at The Three Holy Hierarchs Church", Address = new AddressType() { StreetAddress = "6402 226th Street SW", AddressLocality = "Mountlake Terrace", PostalCode = "98043", AddressRegion = "WA", AddressCountry = "US" } };

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
}