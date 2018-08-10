using System;
using System.Runtime.Caching;
using System.Net.Http;
using System.Threading.Tasks;

namespace ARCS.Api
{
    public class DependenciesCache
    {
        public DependenciesCache(TimeSpan cacheExpiration)
        {
            _expiration = cacheExpiration;
        }

        public async Task<T> Get<T>(string target)
        {
            var item = _cache.GetCacheItem(target);
            if (item == null)
            {
                var client = new HttpClient();
                var response = await client.GetAsync(target);
                if (response.IsSuccessStatusCode)
                {
                    var result = await response.Content.ReadAsAsync<T>();
                    var newItem = new CacheItem(target, result);
                    _cache.Add(newItem, new CacheItemPolicy
                    {
                        AbsoluteExpiration = DateTime.Now.Add(_expiration)
                    });

                    return result;
                }
                else
                {
                    return default(T);
                }
            }
            return (T)item.Value;
        }

        static public readonly DependenciesCache Cache = new DependenciesCache(TimeSpan.FromMinutes(10));

        private MemoryCache _cache = new MemoryCache("ARCSDeps");

        private readonly TimeSpan _expiration;
    }
}