using api.Context;
using api.Exeption;
using api.Model;
using Microsoft.EntityFrameworkCore;

namespace api.Services
{
    public class ContaBancariaService
    {
        private readonly AppDbContext _context;

        public ContaBancariaService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<dynamic> PostContaBancariaAsync(ContaBancaria contaBancaria)
        {
            var verify = await _context.ContasBancarias.Where(x => x.Descricao == contaBancaria.Descricao).FirstOrDefaultAsync();
            if (verify != null)
            {
                throw new AplicationRequestExeption("Conta bancaria com esse nome já cadastrado", System.Net.HttpStatusCode.BadRequest);
            }
            await _context.AddAsync(contaBancaria);
            await _context.SaveChangesAsync();
            return contaBancaria;
        }
        public async Task<dynamic> GetAllContasBancarias() => await _context.ContasBancarias.Where(x => !x.Deletado).ToListAsync();
        public async Task<dynamic> PatchContaBancariaAsync(ContaBancaria contaBancaria)
        {
            var verify = await _context.ContasBancarias.Where(x => x.Descricao == contaBancaria.Descricao && x.Id != contaBancaria.Id).FirstOrDefaultAsync();
            if (verify != null)
            {
                throw new AplicationRequestExeption("Conta bancaria com esse nome já cadastrado", System.Net.HttpStatusCode.BadRequest);
            }
            _context.Update(contaBancaria);
            await _context.SaveChangesAsync();
            return contaBancaria;
        }
        public async Task<dynamic> DeleteContaBancariaAsync(int codContaBancaria)
        {
            var find = await _context.ContasBancarias.Where(x => x.Id == codContaBancaria).FirstOrDefaultAsync();
            if(find == null) { throw new AplicationRequestExeption("Conta bancaria não encontrada", System.Net.HttpStatusCode.BadRequest); }
            find.Deletado = true;
            find.DeletadoEm = DateTime.Now;
            _context.Update(find);
            await _context.SaveChangesAsync();
            return find;
        }
    }
}
