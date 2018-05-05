using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace ARCS.Api
{
    public class SendController : ApiController
    {
        [HttpGet]
        [ActionName("contact")]
        public Response SendContactForm()
        {
            Response response = new Response
            {
                Success = false
            };

            return response;
        }
        public class Response
        {
            public bool Success { get; set; }
        }
    }
}
