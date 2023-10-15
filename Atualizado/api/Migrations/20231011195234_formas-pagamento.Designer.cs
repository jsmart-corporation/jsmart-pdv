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
    [Migration("20231011195234_formas-pagamento")]
    partial class formaspagamento
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "7.0.12");

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

            modelBuilder.Entity("api.Model.FormaPagamento", b =>
                {
                    b.HasOne("api.Model.ContaBancaria", "ContaBancaria")
                        .WithMany()
                        .HasForeignKey("ContaBancariaId");

                    b.Navigation("ContaBancaria");
                });
#pragma warning restore 612, 618
        }
    }
}
