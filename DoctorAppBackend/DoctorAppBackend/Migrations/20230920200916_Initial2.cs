using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace DoctorAppBackend.Migrations
{
    public partial class Initial2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_surgeries_SurgeryCategory",
                table: "surgeries",
                column: "SurgeryCategory");

            migrationBuilder.AddForeignKey(
                name: "FK_surgeries_specializations_SurgeryCategory",
                table: "surgeries",
                column: "SurgeryCategory",
                principalTable: "specializations",
                principalColumn: "SpecializationCode",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_surgeries_specializations_SurgeryCategory",
                table: "surgeries");

            migrationBuilder.DropIndex(
                name: "IX_surgeries_SurgeryCategory",
                table: "surgeries");
        }
    }
}
