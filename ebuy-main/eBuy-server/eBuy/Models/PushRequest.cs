using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace eBuy.Models
{
    public class Pushrequest
    {
        public string deviceToken { get; set; }
        public string title { get; set; }
        public string image { get; set; }
        public string data { get; set; }
        public string categoryIdentifier { get; set; }
    }
}


