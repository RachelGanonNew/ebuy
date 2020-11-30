
using eBuy.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL
{
   public class Customer
    {
        [Key]
        public int CustId { get; set; }
        public string CustNicName { get; set; }
        public string CustName { get; set; }
        public string CustImg{ get; set; }
        [EmailAddress]
        public string CustMail { get; set; }
        public DateTime Update_At { get; set; }
      
    }
}
