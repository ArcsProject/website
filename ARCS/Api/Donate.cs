using System;
using System.Net.Http;
using System.Web.Http;
using System.Net.Mail;
using System.Configuration;
using System.Threading.Tasks;
using System.Collections.Specialized;
using System.Net;
using System.Threading;
using System.Web;
using System.Web.Configuration;


namespace ARCS.Api
{
    public class DonateController : ApiController
    {
        [HttpGet]
        [ActionName("donors")]
        public async Task<object> GetDonoros(string target)
        {
            if (target == "filmfest2018")
            {
                var campaign = ConfigurationManager.ConnectionStrings[target].ConnectionString;
                return await DependenciesCache.Cache.Get<string>("https://arcsproject.secure.force.com/services/apexrest/Donors?Camapain="+ campaign);
            }
            if (StaticContent.JsonContent.TryGetValue("donors_" + target, out var content))
            {
                return await Task.FromResult<string>(content);
            }
            return await NotFound().ExecuteAsync(new CancellationToken());
        }

        [HttpGet]
        [ActionName("progress")]
        public async Task<object> GetDonationProgress(string target)
        {
            if (target != _targetFilmFest2018)
            {

                return await NotFound().ExecuteAsync(new CancellationToken());
            }
         
            var campaign = ConfigurationManager.ConnectionStrings[target].ConnectionString;
            var goal = await DependenciesCache.Cache.Get<Campaign>("https://arcsproject.secure.force.com/services/apexrest/Goal?campaignId="+ campaign);

            if (goal.Current > goal.Max)
            {
                goal.Current = goal.Max;
            }
            goal.Percent = (goal.Current * 100) / goal.Max;

            return goal;
        }

        public class Campaign
        {
            public int Max { get; set; }
            public int Current { get; set; }
            public double Percent { get; set; }
        }

        private static readonly string _targetFilmFest2018 = "film2018";
    }
}
