using JSmartPDV.DB;
using JSmartPDV.DB.Enums;
using JSmartPDV.DB.Models;
using Microsoft.EntityFrameworkCore;

namespace JSmartPDV.Services
{
    public class ControleCaixaService
    {
        private readonly DatabaseContext _dbContext;

        public ControleCaixaService(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<dynamic> PostAporteCaixaAsync(ControleCaixa aporte)
        {
            await _dbContext.ControleCaixas.AddAsync(aporte);
            await _dbContext.SaveChangesAsync();    
            return aporte;
        }
        public async Task<dynamic> PostRetiradaCaixaAsync(ControleCaixa retirada)
        {
            var caixa = await _dbContext.FinTransacaoPagamentos.Where(x => x.CaixaId == retirada.CaixaId && x.FormaPagamento == FormaPagamento.Dinheiro).ToListAsync();
            var Valor = caixa.Sum(x => x.Valor);
            if(retirada.Valor > Valor)
            {
                throw new Exception();
            }
            await _dbContext.ControleCaixas.AddAsync(retirada);
            await _dbContext.SaveChangesAsync();
            return retirada;
        }
    }
}
