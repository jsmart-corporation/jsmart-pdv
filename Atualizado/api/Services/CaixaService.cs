using api.Context;
using api.DTO.Caixa;
using api.Model;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
    public class CaixaService
    {
        private readonly AppDbContext _context;

        public CaixaService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<dynamic> PostAbrirCaixaAsync(CaixaAberturaDTO abertura,int userId)
        {
            var aberturaCaixa = new Caixa
            {
                Aberto = true,
                DataAbertura = DateTime.Now,
                ValorAbertura = abertura.ValorAbertura,
                UserId = userId 
            };

            await _context.Caixas.AddAsync(aberturaCaixa);
            await _context.SaveChangesAsync();

            return aberturaCaixa;
        }
        public async Task<dynamic?> GetStatusCaixa(int userId)
        {
            return await _context.Caixas.Where(x => x.Aberto && x.UserId == userId).FirstOrDefaultAsync();
        }
    }
}
