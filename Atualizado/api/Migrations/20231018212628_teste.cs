using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class teste : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Categorias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Descricao = table.Column<string>(type: "TEXT", maxLength: 50, nullable: false),
                    CriadoEm = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Deletado = table.Column<bool>(type: "INTEGER", nullable: false),
                    DeletadoEm = table.Column<DateTime>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Categorias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Clientes",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    Tipo = table.Column<int>(type: "INTEGER", nullable: false),
                    Pessoa = table.Column<int>(type: "INTEGER", nullable: false),
                    Telefone = table.Column<string>(type: "TEXT", nullable: true),
                    Email = table.Column<string>(type: "TEXT", nullable: true),
                    IEIsento = table.Column<int>(type: "INTEGER", nullable: false),
                    Cpf = table.Column<string>(type: "TEXT", nullable: true),
                    Cnpj = table.Column<string>(type: "TEXT", nullable: true),
                    InscricaoES = table.Column<string>(type: "TEXT", nullable: true),
                    InscricaoSU = table.Column<string>(type: "TEXT", nullable: true),
                    Cep = table.Column<string>(type: "TEXT", nullable: true),
                    Endereco = table.Column<string>(type: "TEXT", nullable: true),
                    Complemento = table.Column<string>(type: "TEXT", nullable: true),
                    Uf = table.Column<int>(type: "INTEGER", nullable: true),
                    Cidade = table.Column<string>(type: "TEXT", nullable: true),
                    Bairro = table.Column<string>(type: "TEXT", nullable: true),
                    CriadoEm = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Deletado = table.Column<bool>(type: "INTEGER", nullable: false),
                    DeletadoEm = table.Column<DateTime>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Clientes", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ContasBancarias",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Descricao = table.Column<string>(type: "TEXT", maxLength: 100, nullable: false),
                    Agencia = table.Column<string>(type: "TEXT", maxLength: 10, nullable: true),
                    Conta = table.Column<string>(type: "TEXT", maxLength: 20, nullable: true),
                    Banco = table.Column<int>(type: "INTEGER", nullable: false),
                    Permanente = table.Column<bool>(type: "INTEGER", nullable: true),
                    CriadoEm = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Deletado = table.Column<bool>(type: "INTEGER", nullable: false),
                    DeletadoEm = table.Column<DateTime>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ContasBancarias", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Users",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(type: "TEXT", nullable: false),
                    Email = table.Column<string>(type: "TEXT", nullable: false),
                    Password = table.Column<string>(type: "TEXT", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Users", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Produtos",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Codigo = table.Column<string>(type: "TEXT", nullable: true),
                    CodBalanca = table.Column<string>(type: "TEXT", nullable: true),
                    Nome = table.Column<string>(type: "TEXT", nullable: false),
                    TipoProduto = table.Column<int>(type: "INTEGER", nullable: false),
                    ValorUnidade = table.Column<decimal>(type: "TEXT", nullable: false),
                    PrecoCusto = table.Column<decimal>(type: "TEXT", nullable: true),
                    TipoEstoque = table.Column<string>(type: "TEXT", nullable: false),
                    EstoqueAtual = table.Column<decimal>(type: "TEXT", nullable: false),
                    MinEstoque = table.Column<decimal>(type: "TEXT", nullable: false),
                    Agrupavel = table.Column<bool>(type: "INTEGER", nullable: false),
                    Recomendado = table.Column<bool>(type: "INTEGER", nullable: false),
                    Insumos = table.Column<string>(type: "TEXT", nullable: false),
                    NotificarImpressao = table.Column<string>(type: "TEXT", nullable: false),
                    NotificarLive = table.Column<string>(type: "TEXT", nullable: false),
                    Imagem = table.Column<byte[]>(type: "BLOB", nullable: true),
                    CategoriaId = table.Column<int>(type: "INTEGER", nullable: true),
                    Deletado = table.Column<bool>(type: "INTEGER", nullable: false),
                    CriadoEm = table.Column<DateTime>(type: "TEXT", nullable: false),
                    DeletadoEm = table.Column<DateTime>(type: "TEXT", nullable: true),
                    AliquotaTranspacencia = table.Column<decimal>(type: "TEXT", nullable: true),
                    CodBeneficio = table.Column<int>(type: "INTEGER", nullable: true),
                    Ncm = table.Column<string>(type: "TEXT", nullable: true),
                    Cest = table.Column<string>(type: "TEXT", nullable: true),
                    Origin = table.Column<string>(type: "TEXT", nullable: false),
                    Cfop = table.Column<string>(type: "TEXT", nullable: false),
                    SituacaoTributaria = table.Column<string>(type: "TEXT", nullable: false),
                    reducIcms = table.Column<decimal>(type: "TEXT", nullable: true),
                    SituacaoTributariaPIS = table.Column<string>(type: "TEXT", nullable: false),
                    SituacaoTributariaCOFINS = table.Column<string>(type: "TEXT", nullable: false),
                    AliquotaPis = table.Column<decimal>(type: "TEXT", nullable: true),
                    AliquotaICMS = table.Column<decimal>(type: "TEXT", nullable: true),
                    AliquotaCOFINS = table.Column<decimal>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Produtos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Produtos_Categorias_CategoriaId",
                        column: x => x.CategoriaId,
                        principalTable: "Categorias",
                        principalColumn: "Id");
                });

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
                    BaixaAutomatica = table.Column<bool>(type: "INTEGER", nullable: false),
                    AceitarTroco = table.Column<bool>(type: "INTEGER", nullable: false),
                    Parcelas = table.Column<string>(type: "TEXT", nullable: true),
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

            migrationBuilder.CreateTable(
                name: "Caixas",
                columns: table => new
                {
                    Id = table.Column<int>(type: "INTEGER", nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    DataAbertura = table.Column<DateTime>(type: "TEXT", nullable: false),
                    DataEncerramento = table.Column<DateTime>(type: "TEXT", nullable: true),
                    ValorAbertura = table.Column<decimal>(type: "TEXT", nullable: false),
                    ValorTotalEncerramento = table.Column<decimal>(type: "TEXT", nullable: false),
                    UserId = table.Column<int>(type: "INTEGER", nullable: false),
                    Aberto = table.Column<bool>(type: "INTEGER", nullable: false),
                    TotalCaixa = table.Column<decimal>(type: "TEXT", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Caixas", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Caixas_Users_UserId",
                        column: x => x.UserId,
                        principalTable: "Users",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

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
                    TipoTransacao = table.Column<int>(type: "INTEGER", nullable: false),
                    ValorCalculado = table.Column<decimal>(type: "TEXT", nullable: false),
                    Nsu = table.Column<string>(type: "TEXT", nullable: true),
                    PorcentagemPagamento = table.Column<decimal>(type: "TEXT", nullable: true),
                    NumeroParcelas = table.Column<int>(type: "INTEGER", nullable: true),
                    FormaPagamentoId = table.Column<int>(type: "INTEGER", nullable: true),
                    ContaBancariaId = table.Column<int>(type: "INTEGER", nullable: true),
                    ClienteId = table.Column<int>(type: "INTEGER", nullable: true),
                    TransacaoId = table.Column<int>(type: "INTEGER", nullable: true),
                    CaixaId = table.Column<int>(type: "INTEGER", nullable: true),
                    DataPagamentoEfetuado = table.Column<DateTime>(type: "TEXT", nullable: true),
                    DataVencimento = table.Column<DateTime>(type: "TEXT", nullable: false),
                    Pago = table.Column<bool>(type: "INTEGER", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_TransacaoPagamentos", x => x.Id);
                    table.ForeignKey(
                        name: "FK_TransacaoPagamentos_Caixas_CaixaId",
                        column: x => x.CaixaId,
                        principalTable: "Caixas",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TransacaoPagamentos_Clientes_ClienteId",
                        column: x => x.ClienteId,
                        principalTable: "Clientes",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TransacaoPagamentos_ContasBancarias_ContaBancariaId",
                        column: x => x.ContaBancariaId,
                        principalTable: "ContasBancarias",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TransacaoPagamentos_FormasPagamento_FormaPagamentoId",
                        column: x => x.FormaPagamentoId,
                        principalTable: "FormasPagamento",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_TransacaoPagamentos_Transacoes_TransacaoId",
                        column: x => x.TransacaoId,
                        principalTable: "Transacoes",
                        principalColumn: "Id");
                });

            migrationBuilder.InsertData(
                table: "Categorias",
                columns: new[] { "Id", "CriadoEm", "Deletado", "DeletadoEm", "Descricao" },
                values: new object[,]
                {
                    { 1, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4854), false, null, "Viagem" },
                    { 2, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4856), false, null, "Eletrônicos" },
                    { 3, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4858), false, null, "Higiene" },
                    { 4, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4859), false, null, "Escritório" },
                    { 5, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4860), false, null, "Regionais" },
                    { 6, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4862), false, null, "Suplementos" },
                    { 7, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4863), false, null, "Entretenimento" },
                    { 8, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4864), false, null, "Jardinagem" },
                    { 10, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4865), false, null, "Exercício" },
                    { 11, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4867), false, null, "Segurança" },
                    { 12, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4868), false, null, "Musical" },
                    { 13, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4869), false, null, "Arte" },
                    { 15, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4870), false, null, "Cozinha" },
                    { 17, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4872), false, null, "Fotografia" },
                    { 18, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4873), false, null, "Reciclagem" },
                    { 20, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4874), false, null, "Moda" },
                    { 21, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4875), false, null, "Beleza" },
                    { 22, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4876), false, null, "Alimentos" },
                    { 23, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4877), false, null, "Casa" },
                    { 24, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4879), false, null, "Esportes" },
                    { 25, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4880), false, null, "Brinquedos" },
                    { 26, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4881), false, null, "Livros" },
                    { 27, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4883), false, null, "Ferramentas" },
                    { 28, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4884), false, null, "Saúde" },
                    { 29, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4885), false, null, "Joias" },
                    { 30, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4886), false, null, "Animais" },
                    { 31, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4888), false, null, "Limpeza" },
                    { 32, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4889), false, null, "Decoração" },
                    { 33, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4890), false, null, "Automotivo" },
                    { 34, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4892), false, null, "Móveis" },
                    { 35, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4893), false, null, "Farmácia" },
                    { 36, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4894), false, null, "Festas" },
                    { 37, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4895), false, null, "Tecnologia" },
                    { 38, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4896), false, null, "Orgânicos" }
                });

            migrationBuilder.InsertData(
                table: "ContasBancarias",
                columns: new[] { "Id", "Agencia", "Banco", "Conta", "CriadoEm", "Deletado", "DeletadoEm", "Descricao", "Permanente" },
                values: new object[] { 1, null, 0, null, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4642), false, null, "Caixa Interno", true });

            migrationBuilder.InsertData(
                table: "FormasPagamento",
                columns: new[] { "Id", "AceitarTroco", "BaixaAutomatica", "Bandeira", "CategoriaPagamento", "CodigoAutorizacao", "ContaBancariaId", "Credenciadora", "CriadoEm", "Deletado", "DeletadoEm", "Descricao", "DiasFaturamento", "Parcelas", "Permantente", "Taxa" },
                values: new object[] { 1, true, false, 99, 1, false, 1, null, new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4934), false, null, "Dinheiro", 0, "", true, 0m });

            migrationBuilder.CreateIndex(
                name: "IX_Caixas_UserId",
                table: "Caixas",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_FormasPagamento_ContaBancariaId",
                table: "FormasPagamento",
                column: "ContaBancariaId");

            migrationBuilder.CreateIndex(
                name: "IX_Produtos_CategoriaId",
                table: "Produtos",
                column: "CategoriaId");

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
                name: "IX_TransacaoPagamentos_ContaBancariaId",
                table: "TransacaoPagamentos",
                column: "ContaBancariaId");

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
                name: "Produtos");

            migrationBuilder.DropTable(
                name: "FormasPagamento");

            migrationBuilder.DropTable(
                name: "Transacoes");

            migrationBuilder.DropTable(
                name: "Categorias");

            migrationBuilder.DropTable(
                name: "ContasBancarias");

            migrationBuilder.DropTable(
                name: "Caixas");

            migrationBuilder.DropTable(
                name: "Clientes");

            migrationBuilder.DropTable(
                name: "Users");
        }
    }
}
