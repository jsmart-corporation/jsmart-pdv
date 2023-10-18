using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class updateparcelas : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "BaixaAutomatica",
                table: "FormasPagamento",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<string>(
                name: "Parcelas",
                table: "FormasPagamento",
                type: "TEXT",
                nullable: false,
                defaultValue: "");

            migrationBuilder.UpdateData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 18, 10, 12, 30, 325, DateTimeKind.Local).AddTicks(9270));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                columns: new[] { "BaixaAutomatica", "CriadoEm", "Parcelas" },
                values: new object[] { false, new DateTime(2023, 10, 18, 10, 12, 30, 325, DateTimeKind.Local).AddTicks(9485), "" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "BaixaAutomatica",
                table: "FormasPagamento");

            migrationBuilder.DropColumn(
                name: "Parcelas",
                table: "FormasPagamento");

            migrationBuilder.UpdateData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 18, 7, 38, 24, 132, DateTimeKind.Local).AddTicks(5914));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 18, 7, 38, 24, 132, DateTimeKind.Local).AddTicks(6085));
        }
    }
}
