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
    [Migration("20231018212628_teste")]
    partial class teste
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

                    b.HasData(
                        new
                        {
                            Id = 1,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4854),
                            Deletado = false,
                            Descricao = "Viagem"
                        },
                        new
                        {
                            Id = 2,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4856),
                            Deletado = false,
                            Descricao = "Eletrônicos"
                        },
                        new
                        {
                            Id = 3,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4858),
                            Deletado = false,
                            Descricao = "Higiene"
                        },
                        new
                        {
                            Id = 4,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4859),
                            Deletado = false,
                            Descricao = "Escritório"
                        },
                        new
                        {
                            Id = 5,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4860),
                            Deletado = false,
                            Descricao = "Regionais"
                        },
                        new
                        {
                            Id = 6,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4862),
                            Deletado = false,
                            Descricao = "Suplementos"
                        },
                        new
                        {
                            Id = 7,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4863),
                            Deletado = false,
                            Descricao = "Entretenimento"
                        },
                        new
                        {
                            Id = 8,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4864),
                            Deletado = false,
                            Descricao = "Jardinagem"
                        },
                        new
                        {
                            Id = 10,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4865),
                            Deletado = false,
                            Descricao = "Exercício"
                        },
                        new
                        {
                            Id = 11,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4867),
                            Deletado = false,
                            Descricao = "Segurança"
                        },
                        new
                        {
                            Id = 12,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4868),
                            Deletado = false,
                            Descricao = "Musical"
                        },
                        new
                        {
                            Id = 13,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4869),
                            Deletado = false,
                            Descricao = "Arte"
                        },
                        new
                        {
                            Id = 15,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4870),
                            Deletado = false,
                            Descricao = "Cozinha"
                        },
                        new
                        {
                            Id = 17,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4872),
                            Deletado = false,
                            Descricao = "Fotografia"
                        },
                        new
                        {
                            Id = 18,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4873),
                            Deletado = false,
                            Descricao = "Reciclagem"
                        },
                        new
                        {
                            Id = 20,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4874),
                            Deletado = false,
                            Descricao = "Moda"
                        },
                        new
                        {
                            Id = 21,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4875),
                            Deletado = false,
                            Descricao = "Beleza"
                        },
                        new
                        {
                            Id = 22,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4876),
                            Deletado = false,
                            Descricao = "Alimentos"
                        },
                        new
                        {
                            Id = 23,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4877),
                            Deletado = false,
                            Descricao = "Casa"
                        },
                        new
                        {
                            Id = 24,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4879),
                            Deletado = false,
                            Descricao = "Esportes"
                        },
                        new
                        {
                            Id = 25,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4880),
                            Deletado = false,
                            Descricao = "Brinquedos"
                        },
                        new
                        {
                            Id = 26,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4881),
                            Deletado = false,
                            Descricao = "Livros"
                        },
                        new
                        {
                            Id = 27,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4883),
                            Deletado = false,
                            Descricao = "Ferramentas"
                        },
                        new
                        {
                            Id = 28,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4884),
                            Deletado = false,
                            Descricao = "Saúde"
                        },
                        new
                        {
                            Id = 29,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4885),
                            Deletado = false,
                            Descricao = "Joias"
                        },
                        new
                        {
                            Id = 30,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4886),
                            Deletado = false,
                            Descricao = "Animais"
                        },
                        new
                        {
                            Id = 31,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4888),
                            Deletado = false,
                            Descricao = "Limpeza"
                        },
                        new
                        {
                            Id = 32,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4889),
                            Deletado = false,
                            Descricao = "Decoração"
                        },
                        new
                        {
                            Id = 33,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4890),
                            Deletado = false,
                            Descricao = "Automotivo"
                        },
                        new
                        {
                            Id = 34,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4892),
                            Deletado = false,
                            Descricao = "Móveis"
                        },
                        new
                        {
                            Id = 35,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4893),
                            Deletado = false,
                            Descricao = "Farmácia"
                        },
                        new
                        {
                            Id = 36,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4894),
                            Deletado = false,
                            Descricao = "Festas"
                        },
                        new
                        {
                            Id = 37,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4895),
                            Deletado = false,
                            Descricao = "Tecnologia"
                        },
                        new
                        {
                            Id = 38,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4896),
                            Deletado = false,
                            Descricao = "Orgânicos"
                        });
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
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4642),
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

                    b.Property<bool>("BaixaAutomatica")
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

                    b.Property<string>("Parcelas")
                        .HasColumnType("TEXT");

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
                            BaixaAutomatica = false,
                            Bandeira = 99,
                            CategoriaPagamento = 1,
                            CodigoAutorizacao = false,
                            ContaBancariaId = 1,
                            CriadoEm = new DateTime(2023, 10, 18, 18, 26, 28, 709, DateTimeKind.Local).AddTicks(4934),
                            Deletado = false,
                            Descricao = "Dinheiro",
                            DiasFaturamento = 0,
                            Parcelas = "",
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

                    b.Property<int?>("CaixaId")
                        .HasColumnType("INTEGER");

                    b.Property<int>("CategoriaPagamento")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ClienteId")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("ContaBancariaId")
                        .HasColumnType("INTEGER");

                    b.Property<DateTime?>("DataPagamentoEfetuado")
                        .HasColumnType("TEXT");

                    b.Property<DateTime>("DataVencimento")
                        .HasColumnType("TEXT");

                    b.Property<string>("Descricao")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("FormaPagamentoId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Nsu")
                        .HasColumnType("TEXT");

                    b.Property<int?>("NumeroParcelas")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("Pago")
                        .HasColumnType("INTEGER");

                    b.Property<decimal?>("PorcentagemPagamento")
                        .HasColumnType("TEXT");

                    b.Property<int>("TipoTransacao")
                        .HasColumnType("INTEGER");

                    b.Property<int?>("TransacaoId")
                        .HasColumnType("INTEGER");

                    b.Property<decimal>("Valor")
                        .HasColumnType("TEXT");

                    b.Property<decimal>("ValorCalculado")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.HasIndex("CaixaId");

                    b.HasIndex("ClienteId");

                    b.HasIndex("ContaBancariaId");

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
                        .HasForeignKey("CaixaId");

                    b.HasOne("api.Model.Cliente", "Cliente")
                        .WithMany()
                        .HasForeignKey("ClienteId");

                    b.HasOne("api.Model.ContaBancaria", "ContaBancaria")
                        .WithMany()
                        .HasForeignKey("ContaBancariaId");

                    b.HasOne("api.Model.FormaPagamento", "FinMetodoPagamento")
                        .WithMany()
                        .HasForeignKey("FormaPagamentoId");

                    b.HasOne("api.Model.Transacao", "Transacao")
                        .WithMany("TransacaoPagamentos")
                        .HasForeignKey("TransacaoId");

                    b.Navigation("Caixa");

                    b.Navigation("Cliente");

                    b.Navigation("ContaBancaria");

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
