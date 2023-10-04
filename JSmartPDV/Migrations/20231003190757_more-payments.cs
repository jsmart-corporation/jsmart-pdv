using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace JSmartPDV.Migrations
{
    /// <inheritdoc />
    public partial class morepayments : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Bandeira",
                table: "FinMetodoPagamento",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Bandeira", "Descricao", "FormaPagamento", "Porcentagem" },
                values: new object[] { 99, "Dinheiro", 1, 0m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Bandeira", "Descricao", "Porcentagem" },
                values: new object[] { 1, "Visa", 0m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Bandeira", "Descricao", "FormaPagamento", "Porcentagem", "UsarNsu" },
                values: new object[] { 2, "Mastercard", 3, 0m, true });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Bandeira", "Descricao", "FormaPagamento", "UsarNsu" },
                values: new object[] { 3, "American Express", 3, true });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Bandeira", "Descricao", "Porcentagem" },
                values: new object[] { 5, "Diners Club", 0m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Bandeira", "Descricao", "Porcentagem" },
                values: new object[] { 6, "ELO", 0m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "Bandeira", "Descricao", "Porcentagem" },
                values: new object[] { 7, "HiperCard", 0m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "Bandeira", "Descricao", "Porcentagem" },
                values: new object[] { 8, "Aura", 0m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "Bandeira", "Descricao", "Porcentagem" },
                values: new object[] { 9, "Cabal", 0m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "Bandeira", "Descricao", "FormaPagamento", "Porcentagem" },
                values: new object[] { 1, "Visa Electron", 2, 0m });

            migrationBuilder.InsertData(
                table: "FinMetodoPagamento",
                columns: new[] { "Id", "Bandeira", "Descricao", "DiasPrevisao", "FormaPagamento", "Porcentagem", "UsarNsu" },
                values: new object[,]
                {
                    { 11, 2, "Mastercard Debito", 0, 2, 0m, true },
                    { 12, 3, "American Express", 0, 2, 0m, true }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 11);

            migrationBuilder.DeleteData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 12);

            migrationBuilder.DropColumn(
                name: "Bandeira",
                table: "FinMetodoPagamento");

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "Descricao", "FormaPagamento", "Porcentagem" },
                values: new object[] { "Sicred Debito", 2, 0.1m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 2,
                columns: new[] { "Descricao", "Porcentagem" },
                values: new object[] { "Sicred Credito", 0.5m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 3,
                columns: new[] { "Descricao", "FormaPagamento", "Porcentagem", "UsarNsu" },
                values: new object[] { "Pix", 4, 0.1m, false });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 4,
                columns: new[] { "Descricao", "FormaPagamento", "UsarNsu" },
                values: new object[] { "Dinheiro", 1, false });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 5,
                columns: new[] { "Descricao", "Porcentagem" },
                values: new object[] { "Sicred Credito", 0.5m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 6,
                columns: new[] { "Descricao", "Porcentagem" },
                values: new object[] { "Sicred Credito", 0.5m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 7,
                columns: new[] { "Descricao", "Porcentagem" },
                values: new object[] { "Sicred Credito", 0.5m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 8,
                columns: new[] { "Descricao", "Porcentagem" },
                values: new object[] { "Sicred Credito", 0.5m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 9,
                columns: new[] { "Descricao", "Porcentagem" },
                values: new object[] { "Sicred Credito", 0.5m });

            migrationBuilder.UpdateData(
                table: "FinMetodoPagamento",
                keyColumn: "Id",
                keyValue: 10,
                columns: new[] { "Descricao", "FormaPagamento", "Porcentagem" },
                values: new object[] { "Sicred Credito", 3, 0.5m });
        }
    }
}
