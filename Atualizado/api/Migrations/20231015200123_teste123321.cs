using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class teste123321 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Transacoes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Tipo = table.Column<int>(type: "INTEGER", nullable: false),
                    ValorTotal = table.Column<decimal>(type: "TEXT", nullable: false),
                    SubTotal = table.Column<decimal>(type: "TEXT", nullable: false),
                    Desconto = table.Column<decimal>(type: "TEXT", nullable: false),
                    ClienteId = table.Column<int>(type: "INTEGER", nullable: true),
                    CaixaId = table.Column<int>(type: "INTEGER", nullable: false),
                    DataVenda = table.Column<DateTime>(type: "TEXT", nullable: false),
                    NotaEmitida = table.Column<bool>(type: "INTEGER", nullable: false),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Transacoes", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Transacoes_Caixas_CaixaId",
                        column: x => x.CaixaId,
                        principalTable: "Caixas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Transacoes_Clientes_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "Clientes",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_Transacoes_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TransacaoItens",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    TransacaoId = table.Column<int>(type: "INTEGER", nullable: false),
                    ProdutoId = table.Column<int>(type: "INTEGER", nullable: true),
                    Descricao = table.Column<string>(type: "TEXT", nullable: false),
                    ValorTotal = table.Column<decimal>(type: "TEXT", nullable: false),
                    ValorUn = table.Column<decimal>(type: "TEXT", nullable: false),
                    Quantidade = table.Column<int>(type: "INTEGER", nullable: false),
                    DataInsercao = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TransacaoItens", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TransacaoItens_Produtos_ProdutoId",
                        column: x => x.ProdutoId,
                        principalTable: "Produtos",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TransacaoItens_Transacoes_TransacaoId",
                        column: x => x.TransacaoId,
                        principalTable: "Transacoes",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "TransacaoPagamentos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Descricao = table.Column<string>(type: "TEXT", nullable: false),
                    CategoriaPagamento = table.Column<int>(type: "INTEGER", nullable: false),
                    Valor = table.Column<decimal>(type: "TEXT", nullable: false),
                    ValorCalculado = table.Column<decimal>(type: "TEXT", nullable: false),
                    Nsu = table.Column<string>(type: "TEXT", nullable: true),
                    PorcentagemPagamento = table.Column<decimal>(type: "TEXT", nullable: true),
                    FormaPagamentoId = table.Column<int>(type: "INTEGER", nullable: false),
                    ClienteId = table.Column<int>(type: "INTEGER", nullable: true),
                    TransacaoId = table.Column<int>(type: "INTEGER", nullable: true),
                    CaixaId = table.Column<int>(type: "INTEGER", nullable: false),
                    DataPagamentoEfetuado = table.Column<DateTime>(type: "TEXT", nullable: false),
                    DataVencimento = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TransacaoPagamentos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TransacaoPagamentos_Caixas_CaixaId",
                        column: x => x.CaixaId,
                        principalTable: "Caixas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TransacaoPagamentos_Clientes_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "Clientes",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TransacaoPagamentos_FormasPagamento_FormaPagamentoId",
                        column: x => x.FormaPagamentoId,
                        principalTable: "FormasPagamento",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_TransacaoPagamentos_Transacoes_TransacaoId",
                        column: x => x.TransacaoId,
                        principalTable: "Transacoes",
                        principalColumn: "Id");
                });

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

            migrationBuilder.CreateIndex(
                name: "IX_TransacaoItens_ProdutoId",
                table: "TransacaoItens",
                column: "ProdutoId");

            migrationBuilder.CreateIndex(
                name: "IX_TransacaoItens_TransacaoId",
                table: "TransacaoItens",
                column: "TransacaoId");

            migrationBuilder.CreateIndex(
                name: "IX_TransacaoPagamentos_CaixaId",
                table: "TransacaoPagamentos",
                column: "CaixaId");

            migrationBuilder.CreateIndex(
                name: "IX_TransacaoPagamentos_ClienteId",
                table: "TransacaoPagamentos",
                column: "ClienteId");

            migrationBuilder.CreateIndex(
                name: "IX_TransacaoPagamentos_FormaPagamentoId",
                table: "TransacaoPagamentos",
                column: "FormaPagamentoId");

            migrationBuilder.CreateIndex(
                name: "IX_TransacaoPagamentos_TransacaoId",
                table: "TransacaoPagamentos",
                column: "TransacaoId");

            migrationBuilder.CreateIndex(
                name: "IX_Transacoes_CaixaId",
                table: "Transacoes",
                column: "CaixaId");

            migrationBuilder.CreateIndex(
                name: "IX_Transacoes_ClienteId",
                table: "Transacoes",
                column: "ClienteId");

            migrationBuilder.CreateIndex(
                name: "IX_Transacoes_UserId",
                table: "Transacoes",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "TransacaoItens");

            migrationBuilder.DropTable(
                name: "TransacaoPagamentos");

            migrationBuilder.DropTable(
                name: "Transacoes");

            migrationBuilder.UpdateData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 14, 13, 43, 38, 769, DateTimeKind.Local).AddTicks(8263));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 14, 13, 43, 38, 769, DateTimeKind.Local).AddTicks(8421));
        }
    }
}
