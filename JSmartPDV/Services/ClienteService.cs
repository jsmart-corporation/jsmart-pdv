using JSmartPDV.DB;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JSmartPDV.Services
{
    public class ClienteService
    {
        private readonly DatabaseContext _dbContext;

        public ClienteService(DatabaseContext dbContext)
        {
            _dbContext = dbContext;
        }

        public async Task<dynamic?> GetClienteCPF(string cpf)
        {
            var verificando = await _dbContext.Clientes.Where(x => x.Cpf == cpf).Select(x => new
            {
                x.Id,
                x.Nome,
                x.Cpf
            }).FirstOrDefaultAsync();
            if (verificando != null)
            {
                return verificando;
            }
            return null; // Todo Cliente nao encontrado Exeption
        }
    }
}
