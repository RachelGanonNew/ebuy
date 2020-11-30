using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using BLL;
using DAL;
using eBuy.Models;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace eBuy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlertController : ControllerBase
    {

        ebuyData e;
        MessagingPushController messagingPush;
        CustomerBL customerBL;
        public AlertController(ebuyData ebuy)
        {
            e = ebuy;
            messagingPush = new MessagingPushController(e);
            customerBL = new CustomerBL(e);


        }

        [HttpPost("AddAlert")]
        public HttpResponseMessage AddAlert([FromBody] Alert alert)
        {
            if (!ModelState.IsValid && alert == null)
            {
                return new HttpResponseMessage(System.Net.HttpStatusCode.BadRequest);
            }
            e.Alerts.Add(alert);
            e.SaveChanges();
            messagingPush.CheckNotification(e.Alerts.ToList());
            return new HttpResponseMessage(System.Net.HttpStatusCode.OK);
        }



        [HttpPut("PutAddAlert")]
        public HttpResponseMessage PutAddAlert([FromBody] Alert p)
        {
            Alert pro = e.Alerts.Where(pr => pr.galleryPic.Equals(p.galleryPic)).FirstOrDefault();

            if (pro == null)
            {
                return new HttpResponseMessage(HttpStatusCode.NotFound);

            }

            e.Alerts.Remove(pro);
            AddAlert(p);

            return new HttpResponseMessage(HttpStatusCode.OK);
        }


        [Route("{mail}")]
        // [HttpGet("getAlertList")]
        public List<Alert> getAlertList(string mail)
        {
            return customerBL.getAlertList(mail);
        }



    }



}

