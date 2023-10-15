using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class more : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "ContasBancarias",
                columns: new[] { "Id", "Agencia", "Banco", "Conta", "CriadoEm", "Deletado", "DeletadoEm", "Descricao", "Permanente" },
                values: new object[] { 1, null, 0, null, new DateTime(2023, 10, 14, 12, 9, 38, 22, DateTimeKind.Local).AddTicks(5888), false, null, "Caixa Interno", true });

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "ContaBancariaId", "CriadoEm" },
                values: new object[] { 1, new DateTime(2023, 10, 14, 12, 9, 38, 22, DateTimeKind.Local).AddTicks(6041) });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1);

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "ContaBancariaId", "CriadoEm" },
                values: new object[] { null, new DateTime(2023, 10, 14, 12, 8, 3, 940, DateTimeKind.Local).AddTicks(4052) });
        }
    }
}
