using JSmartPDV.DB;
using Microsoft.EntityFrameworkCore;

namespace JSmartPDV.Services
{
    public class EstacaoService
    {
        private readonly DatabaseContext _dbContext;

        public EstacaoService(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<dynamic> GetEstacoes()
        {
            var estacoes = await _dbContext.Estacoes.Select(x => new
            {
                x.Id,
                x.Nome
            }).ToListAsync();
            return estacoes;
        }
    }
}
