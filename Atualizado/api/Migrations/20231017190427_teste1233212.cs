using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class teste1233212 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TransacaoPagamentos_FormasPagamento_FormaPagamentoId",
                table: "TransacaoPagamentos");

            migrationBuilder.AlterColumn<int>(
                name: "FormaPagamentoId",
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
                value: new DateTime(2023, 10, 17, 16, 4, 27, 325, DateTimeKind.Local).AddTicks(3186));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 17, 16, 4, 27, 325, DateTimeKind.Local).AddTicks(3361));

            migrationBuilder.AddForeignKey(
                name: "FK_TransacaoPagamentos_FormasPagamento_FormaPagamentoId",
                table: "TransacaoPagamentos",
                column: "FormaPagamentoId",
                principalTable: "FormasPagamento",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_TransacaoPagamentos_FormasPagamento_FormaPagamentoId",
                table: "TransacaoPagamentos");

            migrationBuilder.AlterColumn<int>(
                name: "FormaPagamentoId",
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
                value: new DateTime(2023, 10, 17, 15, 33, 34, 308, DateTimeKind.Local).AddTicks(6842));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 17, 15, 33, 34, 308, DateTimeKind.Local).AddTicks(7016));

            migrationBuilder.AddForeignKey(
                name: "FK_TransacaoPagamentos_FormasPagamento_FormaPagamentoId",
                table: "TransacaoPagamentos",
                column: "FormaPagamentoId",
                principalTable: "FormasPagamento",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
