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
            modelBuilder.Entity<Categoria>().HasData(
                new Categoria { Id = 1, Descricao = "Viagem", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 2, Descricao = "Eletrônicos", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 3, Descricao = "Higiene", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 4, Descricao = "Escritório", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 5, Descricao = "Regionais", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 6, Descricao = "Suplementos", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 7, Descricao = "Entretenimento", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 8, Descricao = "Jardinagem", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 10, Descricao = "Exercício", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 11, Descricao = "Segurança", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 12, Descricao = "Musical", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 13, Descricao = "Arte", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 15, Descricao = "Cozinha", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 17, Descricao = "Fotografia", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 18, Descricao = "Reciclagem", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 20, Descricao = "Moda", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 21, Descricao = "Beleza", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 22, Descricao = "Alimentos", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 23, Descricao = "Casa", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 24, Descricao = "Esportes", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 25, Descricao = "Brinquedos", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 26, Descricao = "Livros", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 27, Descricao = "Ferramentas", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 28, Descricao = "Saúde", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 29, Descricao = "Joias", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 30, Descricao = "Animais", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 31, Descricao = "Limpeza", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 32, Descricao = "Decoração", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 33, Descricao = "Automotivo", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 34, Descricao = "Móveis", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 35, Descricao = "Farmácia", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 36, Descricao = "Festas", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 37, Descricao = "Tecnologia", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null },
                new Categoria { Id = 38, Descricao = "Orgânicos", CriadoEm = DateTime.Now, Deletado = false, DeletadoEm = null }
            );
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
