using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DoctorAppBackend.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "doctors",
                columns: table => new
                {
                    DoctorId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1001, 1"),
                    DoctorName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_doctors", x => x.DoctorId);
                });

            migrationBuilder.CreateTable(
                name: "specializations",
                columns: table => new
                {
                    SpecializationCode = table.Column<string>(type: "char(3)", nullable: false),
                    SpecializationName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_specializations", x => x.SpecializationCode);
                });

            migrationBuilder.CreateTable(
                name: "surgeries",
                columns: table => new
                {
                    SurgeryId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "5000, 1"),
                    DoctorId = table.Column<int>(type: "int", nullable: false),
                    EndTime = table.Column<decimal>(type: "decimal(4,2)", nullable: false),
                    StartTime = table.Column<decimal>(type: "decimal(4,2)", nullable: false),
                    SurgeryCategory = table.Column<string>(type: "char(3)", nullable: false),
                    SurgeryDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_surgeries", x => x.SurgeryId);
                    table.ForeignKey(
                        name: "FK_surgeries_doctors_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "doctors",
                        principalColumn: "DoctorId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DrSpecializations",
                columns: table => new
                {
                    DoctorId = table.Column<int>(type: "int", nullable: false),
                    SpecializationCode = table.Column<string>(type: "char(3)", nullable: false),
                    SpecializationDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DrSpecializations", x => new { x.DoctorId, x.SpecializationCode });
                    table.ForeignKey(
                        name: "FK_DrSpecializations_doctors_DoctorId",
                        column: x => x.DoctorId,
                        principalTable: "doctors",
                        principalColumn: "DoctorId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DrSpecializations_specializations_SpecializationCode",
                        column: x => x.SpecializationCode,
                        principalTable: "specializations",
                        principalColumn: "SpecializationCode",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DrSpecializations_SpecializationCode",
                table: "DrSpecializations",
                column: "SpecializationCode");

            migrationBuilder.CreateIndex(
                name: "IX_surgeries_DoctorId",
                table: "surgeries",
                column: "DoctorId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DrSpecializations");

            migrationBuilder.DropTable(
                name: "surgeries");

            migrationBuilder.DropTable(
                name: "specializations");

            migrationBuilder.DropTable(
                name: "doctors");
        }
    }
}
