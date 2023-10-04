using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JSmartPDV.Migrations
{
    /// <inheritdoc />
    public partial class caixafinally : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<decimal>(
                name: "TotalCaixa",
                table: "Caixas",
                type: "TEXT",
                nullable: true);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TotalCaixa",
                table: "Caixas");
        }
    }
}
