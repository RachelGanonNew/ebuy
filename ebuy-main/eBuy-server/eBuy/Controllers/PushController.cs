using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using DAL;
using DAL.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eBuy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PushController : ControllerBase
    {
        ebuyData e;
        public PushController(ebuyData ebuy)
        {
            e = ebuy;
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody] PushAlert push)
        {
            if (!ModelState.IsValid && push == null)
            {
                return new HttpResponseMessage(System.Net.HttpStatusCode.BadRequest);
            }
            e.PushAlerts.Add(push);
            e.SaveChanges();

            return new HttpResponseMessage(System.Net.HttpStatusCode.OK);
        }


    }
}