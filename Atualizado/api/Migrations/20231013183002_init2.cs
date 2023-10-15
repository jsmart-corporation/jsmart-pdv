using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class init2 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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
                    Insumos = table.Column<string>(type: "TEXT", nullable: false),
                    NotificarImpressao = table.Column<string>(type: "TEXT", nullable: false),
                    NotificarLive = table.Column<string>(type: "TEXT", nullable: false),
                    Imagem = table.Column<byte[]>(type: "BLOB", nullable: true),
                    CategoriaId = table.Column<int>(type: "INTEGER", nullable: true),
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

            migrationBuilder.CreateIndex(
                name: "IX_Produtos_CategoriaId",
                table: "Produtos",
                column: "CategoriaId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Produtos");
        }
    }
}
