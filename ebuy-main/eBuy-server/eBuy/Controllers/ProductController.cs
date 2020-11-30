using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using BLL;
using DAL;
using eBuy.Models;
using Microsoft.AspNetCore.Mvc;

namespace eBuy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductController : ControllerBase
    {

        ebuyData e;
      
        public ProductController(ebuyData ebuy)
        {
            e = ebuy;
           
        }

        [Route("{searchItem}")]
        public async Task<ActionResult<string>> Get(string searchItem)
        {
            using (var client = new HttpClient())
            {
                client.BaseAddress = new Uri("https://svcs.ebay.com/");
                client.DefaultRequestHeaders.Accept.Clear();
                client.DefaultRequestHeaders.Accept.Add(new MediaTypeWithQualityHeaderValue("application/json"));

                // HTTP GET
                var prefix = "services/search/FindingService/v1?";
                var operation = "OPERATION-NAME=findItemsByKeywords&";
                var globalId = "GLOBAL-ID=EBAY-US&";
                var version = "SERVICE-VERSION=1.11.0&";
                var securityAppName = "SECURITY-APPNAME=Zeropaid-de1b-4c29-9421-07900af71527&";
                var format = "RESPONSE-DATA-FORMAT=json&";
                var rest = "REST-PAYLOAD&";
                var keyword = "keywords=" + searchItem;
                HttpResponseMessage response = await client.GetAsync(prefix + operation + globalId + version + securityAppName + format + rest + keyword);
                if (response.IsSuccessStatusCode)
                {
                    //return await response.Content.ReadAsAsync<object>();
                    return await response.Content.ReadAsStringAsync();
                    //Console.WriteLine("{0}\t${1}\t{2}", product.Name, product.Price, product.Category);
                }
                return null;
            }
        }

        [HttpPost("AddItemToCart")]

        public HttpResponseMessage AddItemToCart([FromBody] Product item)
        {
            if (!ModelState.IsValid && item == null)
            {
                return new HttpResponseMessage(System.Net.HttpStatusCode.BadRequest);
            }
            e.Products.Add(item);        
            e.SaveChanges();
            return new HttpResponseMessage(System.Net.HttpStatusCode.OK);
        }




        [HttpPut("PutProduct")]
        public HttpResponseMessage PutProduct(Product p)
        {
            Product pro = e.Products.Where(pr => pr.gallery.Equals(p.gallery)).FirstOrDefault();

            if (pro == null)
            {
                return new HttpResponseMessage(HttpStatusCode.NotFound);

            }
           
            e.Products.Remove(pro);
            AddItemToCart(p);

            return new HttpResponseMessage(HttpStatusCode.OK);
        }


    }

}
