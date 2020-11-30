using DAL;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace eBuy.Models
{
    public class Product
    {
        [Key]
        public int Id { get; set; }
        public string itemId { get; set; }
        public string title { get; set; }
        public string gallery { get; set; }
        public string viewItem { get; set; }
        public string currentPrice { get; set; }
        public string condition { get; set; }
        public string CustFK { get; set; }
        public string haveAlertName { get; set; }


    }
}
