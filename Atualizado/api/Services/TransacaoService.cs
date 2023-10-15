using api.Context;
using api.Model;
using JSmartPDV.DB.DTO.Transacao;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
    public class TransacaoService
    {
        private readonly AppDbContext _dbContext;

        public TransacaoService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<dynamic> PostTransacaoAsync(TransacaoDTO transacaoDTO,int userId)
        {
            var transacao = new Transacao()
            {
                Desconto = transacaoDTO.Desconto,
                SubTotal = transacaoDTO.SubTotal,
                ValorTotal = transacaoDTO.ValorTotal,
                Tipo = transacaoDTO.Tipo,
                DataVenda = DateTime.Now,
                ClienteId = transacaoDTO.ClienteId,
                CaixaId = transacaoDTO.CaixaId,
                UserId = userId,
            };

            await _dbContext.Transacoes.AddAsync(transacao);
            await _dbContext.SaveChangesAsync();

            await PostTransacaoItemsAsync(transacaoDTO.TransacaoItems, transacao.Id);
            await PostTransacaoPagamentosAsync(transacaoDTO.TransacaoPagamentos, transacao.Id);

            return null;
        }
        public async Task<dynamic> PostTransacaoItemsAsync(List<TransacaoItemDTO>? transacaoItems, int TransacaoId)
        {
            List<TransacaoItem> Items = new List<TransacaoItem>();
            foreach (var item in transacaoItems)
            {
                TransacaoItem itemDTO = new TransacaoItem()
                {
                    ProdutoId = item.ProdutoId,
                    Descricao = item.Descricao,
                    Quantidade = item.Quantidade,
                    ValorTotal = item.ValorTotal,
                    ValorUn = item.ValorUn,
                    TransacaoId = TransacaoId,
                    DataInsercao = DateTime.Now,

                };
                Items.Add(itemDTO);
            }
            await _dbContext.TransacaoItens.AddRangeAsync(Items);
            await _dbContext.SaveChangesAsync();
            return Items;
        }
        public async Task<dynamic> PostTransacaoPagamentosAsync(List<TransacaoPagamentoDTO> transacaoPagamentos, int transacaoId)
        {
            List<TransacaoPagamento> Items = new List<TransacaoPagamento>();
            foreach (var item in transacaoPagamentos)
            {
                TransacaoPagamento itemDTO = new TransacaoPagamento()
                {
                    CaixaId = item.CaixaId,
                    DataPagamentoEfetuado = DateTime.Now,
                    Descricao = "Venda " + transacaoId,
                    FormaPagamentoId = item.FinMetodoPagamentoId,
                    CategoriaPagamento = item.FormaPagamento,
                    Nsu = item.Nsu,
                    Valor = item.Valor,
                    TransacaoId = transacaoId,
                    PorcentagemPagamento = item.PorcentagemPagamento,
                    ClienteId = item.ClienteId,

                };
                var porcentagem = item.PorcentagemPagamento / 100;
                var calculado = item.Valor - item.Valor * porcentagem;
                var previsao = DateTime.Now.AddDays(item.DiasPrevisao);

                itemDTO.ValorCalculado = calculado;
                itemDTO.DataVencimento = previsao;
                Items.Add(itemDTO);
            }
            await _dbContext.TransacaoPagamentos.AddRangeAsync(Items);


            await _dbContext.SaveChangesAsync();
            return Items;
        }
        public async Task<List<TransacaoResumoDTO>> GetTransacoesResumoAsync(int caixaId)
        {
            return await _dbContext.Transacoes.Where(x => x.CaixaId == caixaId).Include(x => x.Cliente).Include(x => x.TransacaoItems).Include(x => x.TransacaoPagamentos).OrderByDescending(x => x.Id).Take(20).Select(x => new TransacaoResumoDTO
            {
                DataVenda = x.DataVenda,
                Id = x.Id,
                Nome = x.Cliente.Nome,
                Tipo = x.Tipo,
                ValorTotal = x.ValorTotal,
                NotaEmitida = x.NotaEmitida
            }).ToListAsync();
        }

        public async Task<dynamic> GetAllTransacoes()
        {
            return await _dbContext.Transacoes.Include(x => x.User).Include(x => x.Cliente).Take(100).ToListAsync();
        }
    }
}
