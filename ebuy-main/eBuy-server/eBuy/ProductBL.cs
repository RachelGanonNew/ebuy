using BLL;
using DAL;
using eBuy.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace eBuy
{
    public class ProductBL
    {

        ebuyData e;
        CustomerBL customerBL;
        public ProductBL(ebuyData ebuy)
        {
            e = ebuy;
            customerBL = new CustomerBL(e);
        }
        public List<Product> removeItem(string id)
        {
            Product product = new Product();
            //if (e.Products.Count() > 0)
            //{
            product = e.Products.Where(i => i.itemId.Equals(id)).FirstOrDefault();
            Alert pro = e.Alerts.Where(pr => pr.galleryPic.Equals(product.gallery) && pr.AlertName.Equals(product.haveAlertName)).FirstOrDefault();

            //}

            //if (product.itemId > 0)
            //{
            e.Products.Remove(product);
            if (pro != null)
            {
                e.Alerts.Remove(pro);

            }
            e.SaveChanges();
            return customerBL.GetUserProducts(product.CustFK);
            //}
            //return null;
        }
    }
}
