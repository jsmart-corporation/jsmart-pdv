using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JSmartPDV.Migrations
{
    /// <inheritdoc />
    public partial class init3 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "Estacoes",
                columns: new[] { "Id", "Nome" },
                values: new object[] { 2, "PC 1" });

            migrationBuilder.InsertData(
                table: "FinMetodoPagamento",
                columns: new[] { "Id", "Bandeira", "Descricao", "DiasPrevisao", "FormaPagamento", "Porcentagem", "UsarNsu" },
                values: new object[] { 13, 3, "PIX", 0, 2, 0m, true });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "Estacoes",
                keyColumn: "Id",
                keyValue: 2);

            migrationBuilder.DeleteData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 13);
        }
    }
}
