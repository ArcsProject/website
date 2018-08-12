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
                    CacheItem newItem = null;
                    if (typeof(T) == typeof(string))
                    {
                        var result = await response.Content.ReadAsStringAsync();
                        InsertInCache(target, result);
                        return (T)(object)result;
                    }
                    else
                    {
                        var result = await response.Content.ReadAsAsync<T>();
                        InsertInCache(target, result);
                        return result;
                    }
                }
                else
                {
                    return default(T);
                }
            }
            return (T)item.Value;
        }

        private void InsertInCache(string key, object value)
        {
            _cache.Add(new CacheItem(key, value), new CacheItemPolicy
            {
                AbsoluteExpiration = DateTime.Now.Add(_expiration)
            });
        }

        static public readonly DependenciesCache Cache = new DependenciesCache(TimeSpan.FromMinutes(10));

        private MemoryCache _cache = new MemoryCache("ARCSDeps");

        private readonly TimeSpan _expiration;
    }
}