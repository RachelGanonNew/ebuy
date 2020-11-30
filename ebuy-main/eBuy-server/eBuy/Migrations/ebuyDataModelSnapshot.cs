﻿// <auto-generated />
using System;
using DAL;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace eBuy.Migrations
{
    [DbContext(typeof(ebuyData))]
    partial class ebuyDataModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "3.1.5")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("DAL.Customer", b =>
                {
                    b.Property<int>("CustId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CustImg")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustMail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("CustNicName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime>("Update_At")
                        .HasColumnType("datetime2");

                    b.HasKey("CustId");

                    b.ToTable("Customers");
                });

            modelBuilder.Entity("DAL.Models.PushAlert", b =>
                {
                    b.Property<int>("PushId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Token")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("PushId");

                    b.ToTable("PushAlerts");
                });

            modelBuilder.Entity("eBuy.Models.Alert", b =>
                {
                    b.Property<int>("AlertId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("AlertName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("galleryPic")
                        .HasColumnType("nvarchar(max)");

                    b.Property<int>("isAlerted")
                        .HasColumnType("int");

                    b.Property<string>("mail")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("price")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("token")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("AlertId");

                    b.ToTable("Alerts");
                });

            modelBuilder.Entity("eBuy.Models.Product", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("CustFK")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("condition")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("currentPrice")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("gallery")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("haveAlertName")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("itemId")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("title")
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("viewItem")
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("Id");

                    b.ToTable("Products");
                });
#pragma warning restore 612, 618
        }
    }
}
