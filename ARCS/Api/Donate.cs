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

namespace ARCS.Api
{
    public class DonateController : ApiController
    {
        [HttpGet]
        [ActionName("progress")]
        public async Task<Campaign> GetDonationProgress(string target)
        {
            return await DonationProgress.LastValue(target);
        }

        public class Campaign
        {
            public int Max { get; set; }
            public int Current { get; set; }
            public double Percent { get; set; }
        }

        public class DonationProgress
        {
            static HttpClient client = new HttpClient();

            static async Task<Campaign> GetCampaignGoalAsync(string path)
            {
                ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls12;
                Campaign campaign = null;
                HttpResponseMessage response = await client.GetAsync(path);
                if (response.IsSuccessStatusCode)
                {
                    campaign = await response.Content.ReadAsAsync<Campaign>();
                }
                return campaign;
            }

            public static async Task<Campaign> LastValue(string targetPrefix)
            {
                var goal = await GetCampaignGoalAsync("https://arcsproject.secure.force.com/services/apexrest/Goal");

                goal.Percent= (goal.Current*100) / goal.Max;
                
                return goal;

            }

        }
    }
}
