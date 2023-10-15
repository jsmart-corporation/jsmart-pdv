using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class pago : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "Pago",
                table: "TransacaoPagamentos",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.UpdateData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 15, 19, 21, 5, 919, DateTimeKind.Local).AddTicks(3895));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 15, 19, 21, 5, 919, DateTimeKind.Local).AddTicks(4133));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pago",
                table: "TransacaoPagamentos");

            migrationBuilder.UpdateData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 15, 17, 1, 23, 755, DateTimeKind.Local).AddTicks(5816));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 15, 17, 1, 23, 755, DateTimeKind.Local).AddTicks(6002));
        }
    }
}
