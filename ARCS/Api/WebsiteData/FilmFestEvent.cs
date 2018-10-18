using ARCS.StructuredData;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text.RegularExpressions;
using System.Web;

namespace ARCS.WebsiteData.FilmFest
{
    public class FilmFestEvent: CommonContentProperties
    {
        public List<string> DescriptionHtml { private get; set; }

        public string ShortDescription => Utils.ConcatListInSingleString(DescriptionHtml);

        public string StructuredStartDate { get; set; }

        public string StructuredEndDate { get; set; }

        public string StructuredLocation { private get; set; }

        public List<string> structuredPerformers { get; set; }

        public Location GetLocation()
        {
            if (StructuredLocation == "ANT")
            {
                return Location.AntGallery;
            }
            if (StructuredLocation == "RomanianCenter")
            {
                return Location.RomanianCenter;
            }
            return default(Location);
        }

        protected override Uri GetImageBaseUrl()
        {
            return Constants.ImagesBaseUrl;
        }

        protected override Uri GetWebPageBaseUrl()
        {
            return Constants.FilmFestBaseUrl;
        }
    }
}