using System;
using System.Collections.Generic;

namespace ARCS.WebsiteData.FilmFest
{
    public class Film: CommonContentProperties
    {
        public List<string> Description { private get; set; }

        public string ShortDescription => Utils.ConcatListInSingleString(Description);

        public string StartDate { get; set; }

        public string EndDate { get; set; }

        public string TicketLink { get; set; }

        public List<string> structuredPerformers { get; set; }

        protected override Uri GetImageBaseUrl()
        {
            return Constants.FilmFestImagesBaseUrl;
        }

        protected override Uri GetWebPageBaseUrl()
        {
            return Constants.FilmFestBaseUrl;
        }
    }
}