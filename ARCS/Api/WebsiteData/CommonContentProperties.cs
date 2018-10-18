using System;

namespace ARCS.WebsiteData
{
    public abstract class CommonContentProperties
    {
        public string Name { get; set; }

        public string Id { get; set; }

        public string ImagePath { get { return _imgUrl.AbsoluteUri; } set { _imgUrl = new Uri(GetImageBaseUrl(), value); } }

        public string Url { get { return $"{GetWebPageBaseUrl().AbsoluteUri}#{Id}"; } }

        private Uri _imgUrl;

        protected abstract Uri GetImageBaseUrl();

        protected abstract Uri GetWebPageBaseUrl();
    }
}