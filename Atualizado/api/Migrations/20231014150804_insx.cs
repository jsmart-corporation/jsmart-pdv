using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class insx : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.InsertData(
                table: "FormasPagamento",
                columns: new[] { "Id", "AceitarTroco", "Bandeira", "CategoriaPagamento", "CodigoAutorizacao", "ContaBancariaId", "Credenciadora", "CriadoEm", "Deletado", "DeletadoEm", "Descricao", "DiasFaturamento", "Permantente", "Taxa" },
                values: new object[] { 1, true, 99, 1, false, null, null, new DateTime(2023, 10, 14, 12, 8, 3, 940, DateTimeKind.Local).AddTicks(4052), false, null, "Dinheiro", 0, true, 0m });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1);
        }
    }
}
