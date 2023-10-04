using JSmartPDV.DB;
using Microsoft.EntityFrameworkCore;

namespace JSmartPDV.Services
{
    public class ProdutoServices
    {
        private readonly DatabaseContext _dbContext;

        public ProdutoServices(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<dynamic> GetProdutosDesc(string? filtro)
        {
            var produtos = await _dbContext.Produtos
                .Where(x => EF.Functions.Like(x.Descricao, "%" + filtro + "%"))
                .Select(x => new
                {
                    x.Id,
                    x.Valor,
                    x.Descricao,
                    x.Tipo,
                    x.CodigoDeBarra,
                    x.Imagem
                })
                .OrderBy(x => x.Descricao)
                .ToListAsync();

            return produtos;
        }

        public async Task<dynamic> GetProdutoCodigoDeBarras(string codigoDeBarras)
        {
            var produto = await _dbContext.Produtos
                .Where(x => x.CodigoDeBarra == codigoDeBarras).Select(x => new
                {
                    x.Id,
                    x.Valor,
                    x.Descricao,
                    x.Tipo,
                    x.CodigoDeBarra,
                    x.Imagem
                })
                .FirstOrDefaultAsync();

            if (produto == null) throw new Exception(); // ToDo fazer Exeption .NET7

            return produto;
        }
        public async Task<dynamic> GetProdutosRecomendados()
        {
            var produtos = await _dbContext.Produtos
                .OrderByDescending(x => x.QtdVendida).Take(10).Select(x => new
                {
                    x.Id,
                    x.Valor,
                    x.Descricao,
                    x.Tipo,
                    x.CodigoDeBarra,
                    x.Imagem
                })
                .ToListAsync();

            if (produtos == null) throw new Exception(); // ToDo fazer Exeption .NET7

            return produtos;
        }
    }
}
