using Newtonsoft.Json;
using System.Collections.Generic;

namespace ARCS.StructuredData
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

        public Location Location { get; set; }

        public string StartDate { get; set; }

        public string EndDate { get; set; }

        public string Image { get; set; }

        public List<Offer> Offers { get; set; }

        public List<Person> Performer { get; set; }
    }
}