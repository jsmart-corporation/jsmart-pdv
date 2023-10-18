using api.Context;
using api.Model;
using JSmartPDV.DB.DTO.Transacao;
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
            => await _context.TransacaoPagamentos.Include(x => x.Cliente).Include(x => x.FinMetodoPagamento).Include(x => x.ContaBancaria).ToListAsync();
        public async Task<dynamic> PostTransacaoPagamentosAsync(TransacaoPagamento pagamento)
        {
            await _context.TransacaoPagamentos.AddAsync(pagamento);

            await _context.SaveChangesAsync();
            return pagamento;
        }
    }
}
