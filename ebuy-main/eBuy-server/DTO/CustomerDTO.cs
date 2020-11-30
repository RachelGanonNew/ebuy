using System;

namespace DTO
{
    public class CustomerDTO
    {

        public int CustId { get; set; }
        public string CustNicName { get; set; }
        public string CustName { get; set; }
        public string CustImg { get; set; }

        public string CustMail { get; set; }
        public DateTime Update_At { get; set; }

    }
}
