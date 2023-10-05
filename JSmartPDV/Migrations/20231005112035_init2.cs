using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace JSmartPDV.Migrations
{
    /// <inheritdoc />
    public partial class init2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FinTransacaoPagamentos_Transacoes_TransacaoId",
                table: "FinTransacaoPagamentos");

            migrationBuilder.AlterColumn<int>(
                name: "TransacaoId",
                table: "FinTransacaoPagamentos",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_FinTransacaoPagamentos_Transacoes_TransacaoId",
                table: "FinTransacaoPagamentos",
                column: "TransacaoId",
                principalTable: "Transacoes",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_FinTransacaoPagamentos_Transacoes_TransacaoId",
                table: "FinTransacaoPagamentos");

            migrationBuilder.AlterColumn<int>(
                name: "TransacaoId",
                table: "FinTransacaoPagamentos",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_FinTransacaoPagamentos_Transacoes_TransacaoId",
                table: "FinTransacaoPagamentos",
                column: "TransacaoId",
                principalTable: "Transacoes",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
