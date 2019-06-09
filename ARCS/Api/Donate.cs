using System.Configuration;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;


namespace ARCS.Api
{
    public class DonateController : ApiController
    {
        [HttpGet]
        [ActionName("donors")]
        public async Task<object> GetDonoros(string target)
        {
            if (StaticContent.JsonContent.TryGetValue("donors_" + target, out var content))
            {
                return await Task.FromResult<string>(content);
            }
            //if (target == "filmfest2019")
            //{
            //    var campaign = ConfigurationManager.ConnectionStrings[target].ConnectionString;
            //    return await DependenciesCache.Cache.Get<string>("https://arcsproject.secure.force.com/services/apexrest/Donors?campaignId=" + campaign);
            //}
            return await NotFound().ExecuteAsync(new CancellationToken());
        }

        [HttpGet]
        [ActionName("progress")]
        public async Task<object> GetDonationProgress(string target)
        {
            Campaign goal = new Campaign();

            switch (target)
            {
                case _targetFilmFest2018:
                    {
                        goal.Max = 20000;
                        goal.Current = 18951;
                        break;
                    }
                case _targetFilmFest2019:
                    {
                        goal.Max = 20000;
                        goal.Current = 0;
                        //var campaign = ConfigurationManager.ConnectionStrings[target].ConnectionString;
                        //goal = await DependenciesCache.Cache.Get<Campaign>("https://arcsproject.secure.force.com/services/apexrest/Goal?campaignId=" + campaign);
                        break;
                    }
                default:
                    {
                        return await NotFound().ExecuteAsync(new CancellationToken());
                    }
            }
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

        private const string _targetFilmFest2018 = "film2018";
        private const string _targetFilmFest2019 = "film2019";
    }
}
