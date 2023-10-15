using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class formaspagamento : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "FormasPagamento",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Descricao = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    CategoriaPagamento = table.Column<int>(type: "INTEGER", nullable: false),
                    Bandeira = table.Column<int>(type: "INTEGER", nullable: false),
                    ContaBancariaId = table.Column<int>(type: "INTEGER", nullable: true),
                    Credenciadora = table.Column<string>(type: "TEXT", nullable: true),
                    DiasFaturamento = table.Column<int>(type: "INTEGER", nullable: false),
                    Taxa = table.Column<decimal>(type: "TEXT", nullable: false),
                    CodigoAutorizacao = table.Column<bool>(type: "INTEGER", nullable: false),
                    AceitarTroco = table.Column<bool>(type: "INTEGER", nullable: false),
                    Permantente = table.Column<bool>(type: "INTEGER", nullable: true),
                    CriadoEm = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Deletado = table.Column<bool>(type: "INTEGER", nullable: false),
                    DeletadoEm = table.Column<DateTime>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FormasPagamento", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FormasPagamento_ContasBancarias_ContaBancariaId",
                        column: x => x.ContaBancariaId,
                        principalTable: "ContasBancarias",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_FormasPagamento_ContaBancariaId",
                table: "FormasPagamento",
                column: "ContaBancariaId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FormasPagamento");
        }
    }
}
