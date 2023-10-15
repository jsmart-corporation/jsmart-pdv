using api.Context;
using api.Exeption;
using api.Model;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace api.Services
{
    public class FormasPagamentoService
    {
        private readonly AppDbContext _appDbContext;

        public FormasPagamentoService(AppDbContext appDbContext)
        {
            _appDbContext = appDbContext;
        }

        public async Task<dynamic> GetAllFormasPagamento() => await _appDbContext.FormasPagamento.Where(x => x.Deletado == false).Include(x => x.ContaBancaria).ToListAsync();
        public async Task<dynamic> PostFormaPagamentoAsync(FormaPagamento forma)
        {
            var find = await _appDbContext.FormasPagamento.Where(x => x.Descricao == forma.Descricao && !x.Deletado).FirstOrDefaultAsync();
            if(find != null)
            {
                throw new AplicationRequestExeption("Forma de pagamento com essa descrição Já cadastrada", HttpStatusCode.BadRequest);
            }
             await _appDbContext.AddAsync(forma);
            if(forma.ContaBancariaId != null)
            {
                await _appDbContext.Entry(forma).Reference(f => f.ContaBancaria).LoadAsync();
            }   
            await _appDbContext.SaveChangesAsync();
            return forma;
        }
        public async Task<dynamic> PatchFormaPagamentoAsync(FormaPagamento forma)
        {
            var find = await _appDbContext.FormasPagamento.Where(x => x.Descricao == forma.Descricao && x.Id != forma.Id && !x.Deletado).FirstOrDefaultAsync();
            if (find != null)
            {
                throw new AplicationRequestExeption("Forma de pagamento com essa descrição Já cadastrada", HttpStatusCode.BadRequest);
            }
            _appDbContext.Update(forma);
            await _appDbContext.Entry(forma).Reference(f => f.ContaBancaria).LoadAsync();
            await _appDbContext.SaveChangesAsync();
            return forma;
        }
        public async Task<dynamic> DeleteFormaPagamentoAsync(int codFormaPagamento)
        {
            var find = await _appDbContext.FormasPagamento.Where(x => x.Id == codFormaPagamento).FirstOrDefaultAsync();
            if (find == null) { throw new AplicationRequestExeption("Forma de pagamento não encontrada", System.Net.HttpStatusCode.BadRequest); }
            find.Deletado = true;
            find.DeletadoEm = DateTime.Now;
            _appDbContext.Update(find);
            await _appDbContext.SaveChangesAsync();
            return find;
        }
        public async Task<dynamic> GetMetodosPagamentos()
        {
            return await _appDbContext.FormasPagamento.Where(x => !x.Deletado).Select(x => new
            {
                x.Id,
                x.CategoriaPagamento,
                x.CodigoAutorizacao,
                x.Descricao,
                x.Taxa,
                x.DiasFaturamento
            }).ToListAsync();
        }
    }
}
