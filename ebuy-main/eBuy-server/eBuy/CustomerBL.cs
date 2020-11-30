using DAL;
using eBuy.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace BLL
{
    public class CustomerBL
    {
        ebuyData e;
        public CustomerBL(ebuyData ebuy)
        {
            e = ebuy;
        }

        public  Customer GetCustomer(string mail)
        {
            Customer q = new Customer();
            q = e.Customers.Where(x => x.CustMail == mail).FirstOrDefault();
            return q;
        }
        public  List<Product> GetUserProducts(string mail)
        {
            List<Product> q = new List<Product>();
            q = e.Products.Where(x => x.CustFK == mail).ToList();
            return q;
        }

        public List<Alert> getAlertList(string m)
        {
            List<Alert> list = new List<Alert>();
            list = e.Alerts.Where(i => i.mail == m).ToList();
            return list;
        }

    }
}
