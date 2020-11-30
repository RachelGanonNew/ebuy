using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using DAL;
using Microsoft.AspNetCore.Mvc;

namespace eBuy.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        ebuyData e;
        UserDal user_dal;
        public UserController(ebuyData ebuy)
        {
            e = ebuy;
            user_dal = new UserDal(e);
        }

        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return e.Customers.ToList();
        }

        [HttpPost]
        public HttpResponseMessage Post([FromBody] Customer newUser)
        {
            newUser.Update_At = DateTime.Now;
            if (user_dal.login(newUser) == null)
            { 
                e.Customers.Add(newUser);
            }
            e.SaveChanges();
            return new HttpResponseMessage(System.Net.HttpStatusCode.OK);
        }


    }
}
