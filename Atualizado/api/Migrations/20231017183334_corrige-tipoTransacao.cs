using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class corrigetipoTransacao : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TipoTransacao",
                table: "FormasPagamento");

            migrationBuilder.AddColumn<int>(
                name: "TipoTransacao",
                table: "TransacaoPagamentos",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 17, 15, 33, 34, 308, DateTimeKind.Local).AddTicks(6842));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 17, 15, 33, 34, 308, DateTimeKind.Local).AddTicks(7016));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "TipoTransacao",
                table: "TransacaoPagamentos");

            migrationBuilder.AddColumn<int>(
                name: "TipoTransacao",
                table: "FormasPagamento",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.UpdateData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 17, 15, 29, 21, 401, DateTimeKind.Local).AddTicks(7673));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "CriadoEm", "TipoTransacao" },
                values: new object[] { new DateTime(2023, 10, 17, 15, 29, 21, 401, DateTimeKind.Local).AddTicks(7863), 0 });
        }
    }
}
