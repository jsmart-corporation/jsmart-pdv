using JSmartPDV.DB;
using JSmartPDV.DB.DTO.Caixa;
using JSmartPDV.DB.Enums;
using JSmartPDV.DB.Models;
using Microsoft.EntityFrameworkCore;

namespace JSmartPDV.Services
{
    public class CaixaServices
    {
        private readonly DatabaseContext _dbContext;
        private readonly TransacaoService _transacaoService;

        public CaixaServices(DatabaseContext dbContext, TransacaoService transacaoService)
        {
            _dbContext = dbContext;
            _transacaoService = transacaoService;
        }

        public async Task<dynamic> PostAbrirCaixaAsync(CaixaAberturaDTO abertura)
        {
            var aberturaCaixa = new Caixa
            {
                Aberto = true,
                DataAbertura = DateTime.Now,
                ValorAbertura = abertura.ValorAbertura
            };

            await _dbContext.Caixas.AddAsync(aberturaCaixa);
            await _dbContext.SaveChangesAsync();

            return aberturaCaixa;
        }
        public async Task<dynamic?> GetStatusCaixa()
        {
            return await _dbContext.Caixas.Where(x => x.Aberto).FirstOrDefaultAsync();
        }
        public async Task<dynamic> GetSessaoCaixa(int caixaId)
        {

            var totais = _dbContext.FinTransacaoPagamentos.Where(x => x.CaixaId == caixaId)
                 .GroupBy(p => p.FormaPagamento)
                 .ToDictionary(
                     group => group.Key,
                     group => group.Sum(p => p.Valor)
                 );
            var controles = _dbContext.ControleCaixas.Where(x => x.CaixaId == caixaId)
                 .GroupBy(p => p.Tipo)
                 .ToDictionary(
                     group => group.Key,
                     group => group.Sum(p => p.Valor)
                 );

            var resultado = new CaixaSessao
            {
                Dinheiro = totais.GetValueOrDefault(FormaPagamento.Dinheiro, 0),
                Debito = totais.GetValueOrDefault(FormaPagamento.CartaoDebito, 0),
                Credito = totais.GetValueOrDefault(FormaPagamento.CartaoCredito, 0),
                Outros = totais.GetValueOrDefault(FormaPagamento.Outros, 0),
                Aporte = controles.GetValueOrDefault(TipoControleCaixa.Aporte, 0),
                Retirada = controles.GetValueOrDefault(TipoControleCaixa.Retirada, 0),
                Transacoes = await _transacaoService.GetTransacoesResumoAsync(caixaId),
            };

            return resultado;
        }

        public async Task<CaixaSessao> PostFecharCaixaAsync(int caixaId)
        {
            var getCaixa = await _dbContext.Caixas.Where(x => x.Id == caixaId).FirstAsync();
            var totais = _dbContext.FinTransacaoPagamentos.Where(x => x.CaixaId == caixaId)
                .GroupBy(p => p.FormaPagamento)
                .ToDictionary(
                    group => group.Key,
                    group => group.Sum(p => p.Valor)
                );
            var controles = _dbContext.ControleCaixas.Where(x => x.CaixaId == caixaId)
                 .GroupBy(p => p.Tipo)
                 .ToDictionary(
                     group => group.Key,
                     group => group.Sum(p => p.Valor)
                 );

            var resultado = new CaixaSessao
            {
                Dinheiro = totais.GetValueOrDefault(FormaPagamento.Dinheiro, 0),
                Debito = totais.GetValueOrDefault(FormaPagamento.CartaoDebito, 0),
                Credito = totais.GetValueOrDefault(FormaPagamento.CartaoCredito, 0),
                Outros = totais.GetValueOrDefault(FormaPagamento.Outros, 0),
                Aporte = controles.GetValueOrDefault(TipoControleCaixa.Aporte, 0),
                Retirada = controles.GetValueOrDefault(TipoControleCaixa.Retirada, 0),
            };
            var Total = resultado.Dinheiro + resultado.Debito + resultado.Credito + resultado.Outros + resultado.Aporte - resultado.Retirada;
            getCaixa.TotalCaixa = Total;
            getCaixa.Aberto = false;
            getCaixa.DataEncerramento = DateTime.Now;

            _dbContext.Update(getCaixa);
            await _dbContext.SaveChangesAsync();

            return resultado;
        }
    }
}
