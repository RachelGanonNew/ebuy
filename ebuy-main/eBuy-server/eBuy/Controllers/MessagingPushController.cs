using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Threading.Tasks;
using BLL;
using DAL;
using DAL.Models;
using eBuy.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace eBuy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessagingPushController : ControllerBase
    {
        ebuyData e;
        ProductController productController;
        public MessagingPushController(ebuyData ebuy)
        {
            e = ebuy;
            productController = new ProductController(e);
        }
        [HttpPost("SendItemToAlert")]
        public async Task<ActionResult<FCMResponse>> SendItemToAlert([FromBody] Pushrequest request)
        {
            string[] tokens = request.deviceToken.Split(',');
            if (request.categoryIdentifier == null || request.categoryIdentifier == "")
                request.categoryIdentifier = "Chat";
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://fcm.googleapis.com/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));
                client.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Bearer", "AAAA-uswhXo:APA91bE0fOLog-yLH5fS-ztQC6lgzyRKca2eYW9gTwUFE0YRyjTqDkfFwWMPwK5jAgKUUuKMogElIsZS9ePo0gfnTld8meMlRMFhuttPkTliu-lA0UvrsOgvN81KsnB211r3shu9c0n8OAh4y25xogyOdmjP7mYR6g");
                client.DefaultRequestHeaders.Add("Sender", "id=1077687649658");
                string objNotification = string.Empty;

                //android
                if (string.IsNullOrEmpty(request.title) && string.IsNullOrEmpty(request.data))
                {
                    objNotification = Newtonsoft.Json.JsonConvert.SerializeObject(new
                    {
                        registration_ids = tokens,
                        content_available = true,
                        categoryIdentifier = request.categoryIdentifier,
                        priority = "high",
                        click_action = request.data,
                    });
                }
                //ios
                else
                {
                    objNotification = Newtonsoft.Json.JsonConvert.SerializeObject(new
                    {
                        registration_ids = tokens,
                        priority = "high",
                        notification = new
                        {
                            title = request.title,
                            body = request.data,

                            sound = "default",
                            categoryIdentifier = request.categoryIdentifier,

                            click_action = request.data,
                            icon = request.image,
                        },

                    });
                }
                HttpResponseMessage response = await client.PostAsync("fcm/send", new StringContent(objNotification, Encoding.UTF8, "application/json"));
                if (response.IsSuccessStatusCode)
                {
                    return await response.Content.ReadAsAsync<FCMResponse>();
                }
                return null;
            }


        }

        public async void CheckNotification(List<Alert> list)
        {
            dynamic response;

            for (int i = 0; i < list.Count(); i++)
            {
                response = await productController.Get(list[i].title);
                dynamic data = JObject.Parse(response.Value);
                data = data.findItemsByKeywordsResponse;
                data = data[0].searchResult;
                data = data[0].item[0];
                checkCases(data, list[i].AlertName, list[i].token, list[i].price);
            }
        }








            public async void checkCases(dynamic item, string type, string token, string price)
        {
            var avilable = 0;
            Double currentPrice = 0;
            Double typeNum = 0;
            string discount;
            switch (type)
            {
                case "avilable":
                    try
                    {
                        avilable = item.listingInfo[0].watchCount[0];

                    }
                    catch (Exception e)
                    {
                        Console.WriteLine("{0} Exception caught.", e);
                    }
                    if (avilable > 1 && Convert.ToInt32(avilable) > 10)
                    {
                        dynamic productToAlert = fillAlert(item, token);
                        await SendItemToAlert(productToAlert);
                    }
                    break;
                case "discount":
                    currentPrice = item.sellingStatus[0].currentPrice[0].__value__;
                    if (currentPrice < Convert.ToDouble(price))
                    {
                        dynamic productToAlert = fillAlert(item, token);
                        await SendItemToAlert(productToAlert);
                    }
                    break;
                default://get specific per
                    discount = item.sellingStatus[0].currentPrice[0].__value__;
                    currentPrice = Double.Parse(price);
                    if (Convert.ToDouble(discount) >= currentPrice)
                    {
                        discount = (Convert.ToDouble(discount) / currentPrice * 100).ToString();
                        typeNum = Double.Parse(type) * 10;
                        if (Convert.ToDouble(discount) >= typeNum && Convert.ToDouble(discount) != 100)
                        {
                            dynamic productToAlert = fillAlert(item, token);
                            await SendItemToAlert(productToAlert);
                        }
                    }
                    break;
            }
        }

        public dynamic fillAlert(dynamic item, string token)
        {
            Pushrequest productToAlert = new Pushrequest();
            productToAlert.title = item.title[0];
            productToAlert.deviceToken = token;
            productToAlert.data = item.viewItemURL[0]; ;
            productToAlert.image = item.galleryURL[0];
            productToAlert.categoryIdentifier = "jgj";

            return productToAlert;
        }

    }



}
