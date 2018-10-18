using System;

namespace ARCS.WebsiteData
{
    public static class Constants
    {
        public static Uri WebSiteBaseUrl = new Uri("https://arcsproject.org/");

        public static Uri ImagesBaseUrl = new Uri(WebSiteBaseUrl, "Resources/Images/");

        public static Uri FilmFestImagesBaseUrl = new Uri(ImagesBaseUrl, "film_fest_2018/");

        public static Uri FilmFestBaseUrl = new Uri(WebSiteBaseUrl, "film-festival");
    }
}