using api.Enums;
using api.Model;
using Microsoft.EntityFrameworkCore;

namespace api.Context
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<ContaBancaria> ContasBancarias { get; set; }
        public DbSet<FormaPagamento> FormasPagamento { get; set; }
        public DbSet<Categoria> Categorias { get; set; }
        public DbSet<Cliente> Clientes { get; set; }
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<Caixa> Caixas { get; set; }
        public DbSet<Transacao> Transacoes { get; set; }
        public DbSet<TransacaoItem> TransacaoItens { get; set; }
        public DbSet<TransacaoPagamento> TransacaoPagamentos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ContaBancaria>().HasData(new ContaBancaria
            {
                Id = 1,
                Banco = BancoEnum.Outro,
                Descricao = "Caixa Interno",
                CriadoEm = DateTime.Now,
                Permanente = true,
            });
            modelBuilder.Entity<FormaPagamento>().HasData(new FormaPagamento
            {
                Id = 1,
                Credenciadora = null,
                ContaBancariaId = 1,
                CriadoEm = DateTime.Now,
                AceitarTroco = true,
                Bandeira = 99,
                CategoriaPagamento = 1,
                CodigoAutorizacao = false,
                DiasFaturamento = 0,
                Taxa = 0,
                Permantente = true,
                Descricao = "Dinheiro"
            });
        }
    }
}
