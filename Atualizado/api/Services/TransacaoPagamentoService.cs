using api.Context;
using api.DTO.TransacaoPagamento;
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

        public async Task<dynamic> GetFinTransacoesPagamento(DateTime inicio,DateTime final)
        {
            IQueryable<TransacaoPagamento> query = _context.TransacaoPagamentos.Include(x => x.Cliente).Include(x => x.FinMetodoPagamento).Include(x => x.ContaBancaria);
            query = query.Where(x => x.DataVencimento.Date >= inicio.Date && x.DataVencimento.Date <= final.Date);
            return await query.ToListAsync();
        }
        public async Task<dynamic> PostTransacaoPagamentosAsync(TransacaoPagamento pagamento)
        {
            await _context.TransacaoPagamentos.AddAsync(pagamento);

            await _context.SaveChangesAsync();
            return pagamento;
        }
        public async Task<dynamic> PostBaixaPagamentosAsync(BaixaDTO baixa)
        {
            var Contas = await _context.TransacaoPagamentos.Where(x => baixa.Contas.Contains(x.Id)).ToListAsync();
            foreach (var conta in Contas)
            {
                var porcentagem = baixa.Porcentagem / 100;
                var calculado = conta.ValorCalculado - conta.ValorCalculado * porcentagem;
                conta.ValorCalculado = calculado;
                conta.Pago = true;
                conta.DataPagamentoEfetuado = baixa.DataPagamento;
                conta.FormaPagamentoId = baixa.FormaPagamentoId;
                conta.ContaBancariaId = baixa.ContaBancariaId;
                conta.Nsu = baixa.Nsu;
                conta.DataVencimento = baixa.DataPagamento.AddDays(baixa.Dias);
                conta.NumeroParcelas = baixa.Parcelas;
            }
            _context.UpdateRange(Contas);
            await _context.SaveChangesAsync();
            return Contas;
        }
    }
}
