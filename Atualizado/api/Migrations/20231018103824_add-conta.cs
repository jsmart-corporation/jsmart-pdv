using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class addconta : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "ContaBancariaId",
                table: "TransacaoPagamentos",
                type: "INTEGER",
                nullable: true);

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

            migrationBuilder.CreateIndex(
                name: "IX_TransacaoPagamentos_ContaBancariaId",
                table: "TransacaoPagamentos",
                column: "ContaBancariaId");

            migrationBuilder.AddForeignKey(
                name: "FK_TransacaoPagamentos_ContasBancarias_ContaBancariaId",
                table: "TransacaoPagamentos",
                column: "ContaBancariaId",
                principalTable: "ContasBancarias",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TransacaoPagamentos_ContasBancarias_ContaBancariaId",
                table: "TransacaoPagamentos");

            migrationBuilder.DropIndex(
                name: "IX_TransacaoPagamentos_ContaBancariaId",
                table: "TransacaoPagamentos");

            migrationBuilder.DropColumn(
                name: "ContaBancariaId",
                table: "TransacaoPagamentos");

            migrationBuilder.UpdateData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 17, 16, 4, 27, 325, DateTimeKind.Local).AddTicks(3186));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 17, 16, 4, 27, 325, DateTimeKind.Local).AddTicks(3361));
        }
    }
}
