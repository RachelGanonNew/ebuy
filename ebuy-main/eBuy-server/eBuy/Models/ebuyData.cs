using DAL.Models;
using eBuy.Models;
using Microsoft.EntityFrameworkCore;
using System;

namespace DAL
{
    public class ebuyData:DbContext
    {
       

        public ebuyData(DbContextOptions<ebuyData> options) : base(options)
        {
            
        }
        public DbSet<Customer> Customers { get; set; }
        public DbSet<Product> Products { get; set; }
        public DbSet<PushAlert> PushAlerts { get; set; }
        public DbSet<Alert> Alerts { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }
    }
}
