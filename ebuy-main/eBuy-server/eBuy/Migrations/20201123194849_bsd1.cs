using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace eBuy.Migrations
{
    public partial class bsd1 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Alerts",
                columns: table => new
                {
                    AlertId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    AlertName = table.Column<string>(nullable: true),
                    title = table.Column<string>(nullable: true),
                    token = table.Column<string>(nullable: true),
                    price = table.Column<string>(nullable: true),
                    isAlerted = table.Column<int>(nullable: false),
                    mail = table.Column<string>(nullable: true),
                    galleryPic = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Alerts", x => x.AlertId);
                });

            migrationBuilder.CreateTable(
                name: "Customers",
                columns: table => new
                {
                    CustId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CustNicName = table.Column<string>(nullable: true),
                    CustName = table.Column<string>(nullable: true),
                    CustImg = table.Column<string>(nullable: true),
                    CustMail = table.Column<string>(nullable: true),
                    Update_At = table.Column<DateTime>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Customers", x => x.CustId);
                });

            migrationBuilder.CreateTable(
                name: "Products",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    itemId = table.Column<string>(nullable: true),
                    title = table.Column<string>(nullable: true),
                    gallery = table.Column<string>(nullable: true),
                    viewItem = table.Column<string>(nullable: true),
                    currentPrice = table.Column<string>(nullable: true),
                    condition = table.Column<string>(nullable: true),
                    CustFK = table.Column<string>(nullable: true),
                    haveAlertName = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Products", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "PushAlerts",
                columns: table => new
                {
                    PushId = table.Column<int>(nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Token = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_PushAlerts", x => x.PushId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Alerts");

            migrationBuilder.DropTable(
                name: "Customers");

            migrationBuilder.DropTable(
                name: "Products");

            migrationBuilder.DropTable(
                name: "PushAlerts");
        }
    }
}
