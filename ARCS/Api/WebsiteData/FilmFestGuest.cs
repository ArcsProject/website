using System;

namespace ARCS.WebsiteData.FilmFest
{
    public class FilmFestGuest: CommonContentProperties
    {
        public string Details { get; set; }

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