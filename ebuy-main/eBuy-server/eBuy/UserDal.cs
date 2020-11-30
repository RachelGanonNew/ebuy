using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace DAL
{
   public class UserDal
    {
       public  ebuyData e;
        public UserDal(ebuyData ebuy)
        { 
                e = ebuy;
        }
        public Customer login(Customer c)
        {
            return e.Customers.FirstOrDefault(u => u.CustMail == c.CustMail);
        }

    }
}
