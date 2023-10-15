﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using api.Context;

#nullable disable

namespace api.Migrations
{
    [DbContext(typeof(AppDbContext))]
    [Migration("20231015222106_pago")]
    partial class pago
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.12");

            modelBuilder.Entity("api.Model.Caixa", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Aberto")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DataAbertura")
                        .HasColumnType("TEXT");

                    b.Property<DateTime?>("DataEncerramento")
                        .HasColumnType("TEXT");

                    b.Property<decimal?>("TotalCaixa")
                        .HasColumnType("TEXT");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("ValorAbertura")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("ValorTotalEncerramento")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("UserId");

                    b.ToTable("Caixas");
                });

            modelBuilder.Entity("api.Model.Categoria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Deletado")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("DeletadoEm")
                        .HasColumnType("TEXT");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Categorias");
                });

            modelBuilder.Entity("api.Model.Cliente", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Bairro")
                        .HasColumnType("TEXT");

                    b.Property<string>("Cep")
                        .HasColumnType("TEXT");

                    b.Property<string>("Cidade")
                        .HasColumnType("TEXT");

                    b.Property<string>("Cnpj")
                        .HasColumnType("TEXT");

                    b.Property<string>("Complemento")
                        .HasColumnType("TEXT");

                    b.Property<string>("Cpf")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Deletado")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DeletadoEm")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<string>("Endereco")
                        .HasColumnType("TEXT");

                    b.Property<int>("IEIsento")
                        .HasColumnType("INTEGER");

                    b.Property<string>("InscricaoES")
                        .HasColumnType("TEXT");

                    b.Property<string>("InscricaoSU")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Pessoa")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Telefone")
                        .HasColumnType("TEXT");

                    b.Property<int>("Tipo")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("Uf")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("Clientes");
                });

            modelBuilder.Entity("api.Model.ContaBancaria", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Agencia")
                        .HasMaxLength(10)
                        .HasColumnType("TEXT");

                    b.Property<int>("Banco")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Conta")
                        .HasMaxLength(20)
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Deletado")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("DeletadoEm")
                        .HasColumnType("TEXT");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<bool?>("Permanente")
                        .HasColumnType("INTEGER");

                    b.HasKey("Id");

                    b.ToTable("ContasBancarias");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            Banco = 0,
                            CriadoEm = new DateTime(2023, 10, 15, 19, 21, 5, 919, DateTimeKind.Local).AddTicks(3895),
                            Deletado = false,
                            Descricao = "Caixa Interno",
                            Permanente = true
                        });
                });

            modelBuilder.Entity("api.Model.FormaPagamento", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("AceitarTroco")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Bandeira")
                        .HasColumnType("INTEGER");

                    b.Property<int>("CategoriaPagamento")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("CodigoAutorizacao")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ContaBancariaId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Credenciadora")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Deletado")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("DeletadoEm")
                        .HasColumnType("TEXT");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("TEXT");

                    b.Property<int>("DiasFaturamento")
                        .HasColumnType("INTEGER");

                    b.Property<bool?>("Permantente")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("Taxa")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("ContaBancariaId");

                    b.ToTable("FormasPagamento");

                    b.HasData(
                        new
                        {
                            Id = 1,
                            AceitarTroco = true,
                            Bandeira = 99,
                            CategoriaPagamento = 1,
                            CodigoAutorizacao = false,
                            ContaBancariaId = 1,
                            CriadoEm = new DateTime(2023, 10, 15, 19, 21, 5, 919, DateTimeKind.Local).AddTicks(4133),
                            Deletado = false,
                            Descricao = "Dinheiro",
                            DiasFaturamento = 0,
                            Permantente = true,
                            Taxa = 0m
                        });
                });

            modelBuilder.Entity("api.Model.Produto", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Agrupavel")
                        .HasColumnType("INTEGER");

                    b.Property<decimal?>("AliquotaCOFINS")
                        .HasColumnType("TEXT");

                    b.Property<decimal?>("AliquotaICMS")
                        .HasColumnType("TEXT");

                    b.Property<decimal?>("AliquotaPis")
                        .HasColumnType("TEXT");

                    b.Property<decimal?>("AliquotaTranspacencia")
                        .HasColumnType("TEXT");

                    b.Property<int?>("CategoriaId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Cest")
                        .HasColumnType("TEXT");

                    b.Property<string>("Cfop")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("CodBalanca")
                        .HasColumnType("TEXT");

                    b.Property<int?>("CodBeneficio")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Codigo")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("CriadoEm")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Deletado")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("DeletadoEm")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("EstoqueAtual")
                        .HasColumnType("TEXT");

                    b.Property<byte[]>("Imagem")
                        .HasColumnType("BLOB");

                    b.Property<string>("Insumos")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal>("MinEstoque")
                        .HasColumnType("TEXT");

                    b.Property<string>("Ncm")
                        .HasColumnType("TEXT");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("NotificarImpressao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("NotificarLive")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Origin")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<decimal?>("PrecoCusto")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Recomendado")
                        .HasColumnType("INTEGER");

                    b.Property<string>("SituacaoTributaria")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("SituacaoTributariaCOFINS")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("SituacaoTributariaPIS")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("TipoEstoque")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("TipoProduto")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("ValorUnidade")
                        .HasColumnType("TEXT");

                    b.Property<decimal?>("reducIcms")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CategoriaId");

                    b.ToTable("Produtos");
                });

            modelBuilder.Entity("api.Model.Transacao", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CaixaId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ClienteId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DataVenda")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("Desconto")
                        .HasColumnType("TEXT");

                    b.Property<bool>("NotaEmitida")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("SubTotal")
                        .HasColumnType("TEXT");

                    b.Property<int>("Tipo")
                        .HasColumnType("INTEGER");

                    b.Property<int>("UserId")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("ValorTotal")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CaixaId");

                    b.HasIndex("ClienteId");

                    b.HasIndex("UserId");

                    b.ToTable("Transacoes");
                });

            modelBuilder.Entity("api.Model.TransacaoItem", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DataInsercao")
                        .HasColumnType("TEXT");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("ProdutoId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("Quantidade")
                        .HasColumnType("INTEGER");

                    b.Property<int>("TransacaoId")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("ValorTotal")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("ValorUn")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("ProdutoId");

                    b.HasIndex("TransacaoId");

                    b.ToTable("TransacaoItens");
                });

            modelBuilder.Entity("api.Model.TransacaoPagamento", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<int>("CaixaId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("CategoriaPagamento")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ClienteId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("DataPagamentoEfetuado")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataVencimento")
                        .HasColumnType("TEXT");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("FormaPagamentoId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nsu")
                        .HasColumnType("TEXT");

                    b.Property<bool>("Pago")
                        .HasColumnType("INTEGER");

                    b.Property<decimal?>("PorcentagemPagamento")
                        .HasColumnType("TEXT");

                    b.Property<int?>("TransacaoId")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("Valor")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("ValorCalculado")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CaixaId");

                    b.HasIndex("ClienteId");

                    b.HasIndex("FormaPagamentoId");

                    b.HasIndex("TransacaoId");

                    b.ToTable("TransacaoPagamentos");
                });

            modelBuilder.Entity("api.Model.User", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Password")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("api.Model.Caixa", b =>
                {
                    b.HasOne("api.Model.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("User");
                });

            modelBuilder.Entity("api.Model.FormaPagamento", b =>
                {
                    b.HasOne("api.Model.ContaBancaria", "ContaBancaria")
                        .WithMany()
                        .HasForeignKey("ContaBancariaId");

                    b.Navigation("ContaBancaria");
                });

            modelBuilder.Entity("api.Model.Produto", b =>
                {
                    b.HasOne("api.Model.Categoria", "Categoria")
                        .WithMany()
                        .HasForeignKey("CategoriaId");

                    b.Navigation("Categoria");
                });

            modelBuilder.Entity("api.Model.Transacao", b =>
                {
                    b.HasOne("api.Model.Caixa", "Caixa")
                        .WithMany()
                        .HasForeignKey("CaixaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("api.Model.Cliente", "Cliente")
                        .WithMany()
                        .HasForeignKey("ClienteId");

                    b.HasOne("api.Model.User", "User")
                        .WithMany()
                        .HasForeignKey("UserId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Caixa");

                    b.Navigation("Cliente");

                    b.Navigation("User");
                });

            modelBuilder.Entity("api.Model.TransacaoItem", b =>
                {
                    b.HasOne("api.Model.Produto", "Produto")
                        .WithMany()
                        .HasForeignKey("ProdutoId");

                    b.HasOne("api.Model.Transacao", "Transacao")
                        .WithMany("TransacaoItems")
                        .HasForeignKey("TransacaoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("Produto");

                    b.Navigation("Transacao");
                });

            modelBuilder.Entity("api.Model.TransacaoPagamento", b =>
                {
                    b.HasOne("api.Model.Caixa", "Caixa")
                        .WithMany()
                        .HasForeignKey("CaixaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("api.Model.Cliente", "Cliente")
                        .WithMany()
                        .HasForeignKey("ClienteId");

                    b.HasOne("api.Model.FormaPagamento", "FinMetodoPagamento")
                        .WithMany()
                        .HasForeignKey("FormaPagamentoId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("api.Model.Transacao", "Transacao")
                        .WithMany("TransacaoPagamentos")
                        .HasForeignKey("TransacaoId");

                    b.Navigation("Caixa");

                    b.Navigation("Cliente");

                    b.Navigation("FinMetodoPagamento");

                    b.Navigation("Transacao");
                });

            modelBuilder.Entity("api.Model.Transacao", b =>
                {
                    b.Navigation("TransacaoItems");

                    b.Navigation("TransacaoPagamentos");
                });
#pragma warning restore 612, 618
        }
    }
}
