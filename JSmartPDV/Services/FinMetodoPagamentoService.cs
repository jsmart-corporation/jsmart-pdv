using JSmartPDV.DB;
using Microsoft.EntityFrameworkCore;

namespace JSmartPDV.Services
{
    public class FinMetodoPagamentoService
    {
        private readonly DatabaseContext _dbContext;

        public FinMetodoPagamentoService(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }


        public async Task<dynamic> GetMetodosPagamentos()
        {
            return await _dbContext.FinMetodoPagamento.Select(x => new
            {
                x.Id,
                x.FormaPagamento,
                x.UsarNsu,
                x.Descricao,
                x.Porcentagem,
                x.DiasPrevisao
            }).ToListAsync();
        }
    }
}
