using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace ARCS.StructuredData
{
    public class Organization
    {
        public static readonly Organization Arcs = new Organization() {
            Name = "American Romanian Cultural Society",
            Url = WebsiteData.Constants.WebSiteBaseUrl.AbsoluteUri,
            Logo = new Uri(WebsiteData.Constants.ImagesBaseUrl, "logo_white_bkg.png").AbsoluteUri,
            SameAs = new List<string>() {
            "https://www.facebook.com/ARCSPROJECT",
            "https://www.instagram.com/romanianfilmfest_seattle",
            "https://www.youtube.com/channel/UCoyYfKKilUiy6zW5Bgr8NUA",
            "https://vimeo.com/user88071761",
            "https://www.linkedin.com/company/americanromanianculturalsociety"
            }
        };

        [JsonProperty("@context")]
        public static string Context => "http://schema.org";

        [JsonProperty("@type")]
        public static string Type => "Organization";

        public string Name { get; set; }

        public string Url { get; set; }

        public string Logo { get; set; }

        public List<string> SameAs { get; set; }
    }
}