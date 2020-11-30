using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Net.Http.Headers;
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
    public class ItemController : ControllerBase
    {
        ebuyData e;
        CustomerBL customerBL;
        ProductBL productBL;
        public ItemController(ebuyData ebuy)
        {
            e = ebuy;
            customerBL = new CustomerBL(e);
            productBL = new ProductBL(e);

        }

        [Route("{mail}")]
        
        public List<Product> GetItemList(string mail)
        {
            return customerBL.GetUserProducts(mail);
        }


        [HttpPost("RemoveItem")]
        public List<Product> RemoveItem(ItemId currentItemId)
        {
            return productBL.removeItem(currentItemId.itemId);
        }
    }
}
