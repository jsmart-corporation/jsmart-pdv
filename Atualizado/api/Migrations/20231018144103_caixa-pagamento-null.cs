using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class caixapagamentonull : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TransacaoPagamentos_Caixas_CaixaId",
                table: "TransacaoPagamentos");

            migrationBuilder.AlterColumn<int>(
                name: "CaixaId",
                table: "TransacaoPagamentos",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.UpdateData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 18, 11, 41, 3, 818, DateTimeKind.Local).AddTicks(3681));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 18, 11, 41, 3, 818, DateTimeKind.Local).AddTicks(3901));

            migrationBuilder.AddForeignKey(
                name: "FK_TransacaoPagamentos_Caixas_CaixaId",
                table: "TransacaoPagamentos",
                column: "CaixaId",
                principalTable: "Caixas",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TransacaoPagamentos_Caixas_CaixaId",
                table: "TransacaoPagamentos");

            migrationBuilder.AlterColumn<int>(
                name: "CaixaId",
                table: "TransacaoPagamentos",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.UpdateData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 18, 11, 29, 47, 900, DateTimeKind.Local).AddTicks(446));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 18, 11, 29, 47, 900, DateTimeKind.Local).AddTicks(659));

            migrationBuilder.AddForeignKey(
                name: "FK_TransacaoPagamentos_Caixas_CaixaId",
                table: "TransacaoPagamentos",
                column: "CaixaId",
                principalTable: "Caixas",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
