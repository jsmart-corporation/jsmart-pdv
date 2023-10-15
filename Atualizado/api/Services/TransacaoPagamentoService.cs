using api.Context;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
    public class TransacaoPagamentoService
    {
        private readonly AppDbContext _context;

        public TransacaoPagamentoService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<dynamic> GetFinTransacoesPagamento() 
            => await _context.TransacaoPagamentos.Include(x => x.Cliente).Include(x => x.FinMetodoPagamento).ThenInclude(x => x.ContaBancaria).ToListAsync();
    }
}
