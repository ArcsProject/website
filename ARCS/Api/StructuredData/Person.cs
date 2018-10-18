using Newtonsoft.Json;

namespace ARCS.StructuredData
{
    public struct Person
    {
        [JsonProperty("@type")]
        public static string Type => "Person";

        public string Name { get; set; }

        public string Image { get; set; }

        public string Description { get; set; }

        public string Url { get; set; }
    }
}