using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace BackendAPI.Migrations
{
    public partial class test : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "distribution_Queues");

            migrationBuilder.CreateTable(
                name: "Distributions",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Attachment_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Datetime_approved = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Epic_agencycode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    current_status = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    installeddate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Dmethod = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    cmemail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    toemail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ccemail = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    invoice = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    epic_lookup_code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    client_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    sendcm_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    cmreview_date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    cmapproved = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Distributions", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Distributions");

            migrationBuilder.CreateTable(
                name: "distribution_Queues",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    agency_Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    aprroved = table.Column<DateTime>(type: "datetime2", nullable: true),
                    attachment_Name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    client_name = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    delivery_Method = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    email = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    installment_No = table.Column<int>(type: "int", nullable: false),
                    status = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_distribution_Queues", x => x.Id);
                });
        }
    }
}
