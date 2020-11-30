using eBuy.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace DAL.Models
{
   public class PushAlert
    {
        [Key]
        public int PushId { get; set; }
        public string Token { get; set; }

        [NotMapped]
        public Alert alert { get; set; }
        [NotMapped]
        public Product product { get; set; }
    }
}
