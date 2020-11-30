using DAL;
using DTO;
using System;
using System.Collections.Generic;
using System.Text;

namespace BLL.cast
{
    class ToCustomerDTO
    {
        public static CustomerDTO GetCustomer(Customer customer)
        {
            CustomerDTO newCustomer = new CustomerDTO();
            newCustomer.CustId = customer.CustId;
            newCustomer.CustImg = customer.CustImg;
            newCustomer.CustMail = customer.CustMail; 
            newCustomer.CustName = customer.CustName;
            newCustomer.CustNicName = customer.CustNicName;
            return newCustomer;
        }
        
    }
}
