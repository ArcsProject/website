using System;
using System.Net.Http;
using System.Web.Http;
using System.Net.Mail;
using System.Configuration;
using System.Threading.Tasks;
using System.Collections.Specialized;
using System.Net;

namespace ARCS.Api
{
    public class SendController : ApiController
    {
        [HttpPost]
        [ActionName("contact")]
        public async Task<Response> SendContactForm()
        {
            Response response = new Response
            {
                Success = false
            };

            try
            {
                var requestParams = new SendContactFormParams(await Request.Content.ReadAsFormDataAsync());
                if (string.IsNullOrEmpty(requestParams.Msg)) //msg is mandatory
                {
                    return response;
                }

                var emailSubject = $"[arcsproject contact form] Message from {requestParams.Name} ({requestParams.Email})";
                var emailBody = $"{requestParams.Msg}";
                if (requestParams.AddToMailingList)
                {
                    emailBody += "\r\nUser requested to be added to the mailing list.";
                }

                var smtpHost = ConfigurationManager.AppSettings.Get("SmtpHost");
                var smtpPort = Convert.ToInt32(ConfigurationManager.AppSettings.Get("SmtpPort"));
                var smtpUser = ConfigurationManager.AppSettings.Get("SmtpUser");
                var smtpPwd = ConfigurationManager.AppSettings.Get("SmtpPwd");
                var contactEmail = ConfigurationManager.AppSettings.Get("ContactEmail");
                if (string.IsNullOrEmpty(smtpHost) || string.IsNullOrEmpty(smtpUser) || string.IsNullOrEmpty(smtpPwd) || string.IsNullOrEmpty(contactEmail))
                {
                    return response;
                }

                var mail = new MailMessage(contactEmail, contactEmail, emailSubject, emailBody);

                SmtpClient client = new SmtpClient(smtpHost, smtpPort)
                {
                    EnableSsl = true,
                    Credentials = new NetworkCredential(smtpUser, smtpPwd)
                };

                await client.SendMailAsync(mail);

                response.Success = true;
                return response;

            }
            catch (Exception e)
            {
                System.Diagnostics.Trace.WriteLine(e);
            }

            response.Success = false;
            return response;
        }

        public class Response
        {
            public bool Success { get; set; }
        }

        private class SendContactFormParams
        {
            public SendContactFormParams(NameValueCollection formData)
            {
                Msg = formData.Get("msg");
                Email = formData.Get("email") ?? "<empty>";
                Name = formData.Get("name") ?? "<empty>";
                AddToMailingList = formData.Get("addToMailingList") == "true";
            }

            public string Name { get; private set; }
            public string Email { get; private set; }
            public string Msg { get; private set; }
            public bool AddToMailingList { get; private set; }
        }
    }
}
