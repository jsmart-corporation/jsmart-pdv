using api.Context;
using api.Exeption;
using api.Model;
using Microsoft.EntityFrameworkCore;
using System.Net;

namespace api.Services
{
    public class ClienteService
    {
        private readonly AppDbContext _context;

        public ClienteService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<dynamic> GetAllClientes() => await _context.Clientes.Where(x => !x.Deletado).ToListAsync();
        public async Task<dynamic> PostClienteAsync(Cliente cliente)
        {
            var find = await _context.Clientes.Where(x => (x.Cpf == cliente.Cpf || x.Cnpj == cliente.Cnpj) && !x.Deletado).FirstOrDefaultAsync();
            if (find != null)
            {
                if (find.Cpf == cliente.Cpf)
                    throw new AplicationRequestExeption("Cliente com com esse cpf cadastrado", HttpStatusCode.BadRequest);
                if (find.Cnpj == cliente.Cnpj)
                    throw new AplicationRequestExeption("Cliente com com esse cnpj cadastrado", HttpStatusCode.BadRequest);
            }
            await _context.AddAsync(cliente);
            await _context.SaveChangesAsync();
            return cliente;
        }
        public async Task<dynamic> PatchClienteAsync(Cliente cliente)
        {
            var find = await _context.Clientes.Where(x => (x.Cpf == cliente.Cpf || x.Cnpj == cliente.Cnpj) && x.Id != cliente.Id && !x.Deletado).FirstOrDefaultAsync();
            if (find != null)
            {
                if(find.Cpf == cliente.Cpf)
                    throw new AplicationRequestExeption("Cliente com com esse cpf cadastrado", HttpStatusCode.BadRequest);
                if (find.Cnpj == cliente.Cnpj)
                    throw new AplicationRequestExeption("Cliente com com esse cnpj cadastrado", HttpStatusCode.BadRequest);
            }
            _context.Clientes.Update(cliente);
            await _context.SaveChangesAsync();
            return cliente;
        }
        public async Task<dynamic> DeleteClienteAsync(int codCliente)
        {
            var find = await _context.Clientes.Where(x => x.Id == codCliente).FirstOrDefaultAsync();
            if (find == null)
            {
                throw new AplicationRequestExeption("Cliente não encotrado", HttpStatusCode.BadRequest);
            }
            find.Deletado = true;
            find.DeletadoEm = DateTime.Now;
            _context.Clientes.Update(find);
            await _context.SaveChangesAsync();
            return find;
        }
        public async Task<dynamic> GetClienteCPFCNPJAsync(string doc)
        {
            var find = await _context.Clientes.Where(x => x.Cnpj == doc || x.Cpf == doc).FirstOrDefaultAsync();
            if (find == null)
            {
                throw new AplicationRequestExeption("Cliente Não encontrado", HttpStatusCode.BadRequest);
            }
            return find;
        }
        public async Task<dynamic> GetClienteFiltro(string filtro) => await _context.Clientes
       .Where(x => EF.Functions.Like(x.Nome, "%" + filtro + "%") ||
                   EF.Functions.Like(x.Cpf, "%" + filtro + "%") ||
                   EF.Functions.Like(x.Cnpj, "%" + filtro + "%"))
       .ToListAsync();
    }
}
