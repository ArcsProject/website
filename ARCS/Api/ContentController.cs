using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;

namespace ARCS.Api
{
    public class ContentController : ApiController
    {
        [Route("api/content/{target}")]
        public async Task<object> GetContent(string target)
        {
            if (StaticContent.JsonContent.TryGetValue("content_" + target, out var content))
            {
                return content;
            }
            return await NotFound().ExecuteAsync(new CancellationToken());
        }
    }
}