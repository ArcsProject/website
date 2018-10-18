using Newtonsoft.Json;
using Newtonsoft.Json.Converters;

namespace ARCS.StructuredData
{
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
}