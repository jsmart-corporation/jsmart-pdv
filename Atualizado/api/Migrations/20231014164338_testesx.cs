using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class testesx : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
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

            migrationBuilder.CreateIndex(
                name: "IX_Caixas_UserId",
                table: "Caixas",
                column: "UserId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Caixas");

            migrationBuilder.UpdateData(
                table: "ContasBancarias",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 14, 12, 9, 38, 22, DateTimeKind.Local).AddTicks(5888));

            migrationBuilder.UpdateData(
                table: "FormasPagamento",
                keyColumn: "Id",
                keyValue: 1,
                column: "CriadoEm",
                value: new DateTime(2023, 10, 14, 12, 9, 38, 22, DateTimeKind.Local).AddTicks(6041));
        }
    }
}
