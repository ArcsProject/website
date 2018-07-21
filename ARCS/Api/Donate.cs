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
        public async Task<object> GetDonationProgress(string target)
        {
            if (target != _targetFilmFest2018)
            {
                return await NotFound().ExecuteAsync(new CancellationToken());
            }
            return await Task.FromResult<DonationProgress>(new DonationProgress(target));
        }

        public class DonationProgress
        {
            public DonationProgress(string targetPrefix)
            {
                Max = Convert.ToDouble(ConfigurationManager.AppSettings.Get(targetPrefix + "_max_goal"));
                Current = Convert.ToDouble(ConfigurationManager.AppSettings.Get(targetPrefix + "_current_goal"));
                if (Max <= 0)
                {
                    Max = 15000;
                }
                if (Current < 0)
                {
                    Current = 0;
                }
                if (Current > Max)
                {
                    Current = Max;
                }
                Percent = Math.Round((Current / Max) * 100,2);
            }

            public double Max { get => _max; private set => _max = NormalizeValue(value); }

            public double Current { get => _current; private set => _current = NormalizeValue(value); }

            public double Percent { get => _percent; private set => _percent = NormalizeValue(value); }

            private double NormalizeValue(double value) => Math.Round(value, 2);
            private double _max;
            private double _current;
            private double _percent;
        }

        private static readonly string _targetFilmFest2018 = "film2018";
    }
}
