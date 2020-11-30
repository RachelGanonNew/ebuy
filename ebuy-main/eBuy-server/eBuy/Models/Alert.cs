using DAL;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace eBuy.Models
{
    public class Alert
    {
      [Key]
        public int AlertId { get; set; }
        public string AlertName { get; set; }
        public string title { get; set; }
        public string token { get; set; }
        public string price { get; set; }
        public int isAlerted { get; set; }
        public string mail { get; set; }
        public string galleryPic { get; set; }

    }
}
