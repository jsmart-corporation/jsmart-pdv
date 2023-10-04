using JSmartPDV.DB;
using Microsoft.EntityFrameworkCore;
using System;

namespace JSmartPDV.Programs
{
    public static class DBSetup
    {
        public static void DbConnectionSetup(this IServiceCollection services, IConfiguration configuration)
        {
            string? connectionString = configuration.GetConnectionString("ApiConnectorString");
            if (connectionString != null)
                services.AddDbContext<DatabaseContext>(options => options.UseSqlite(connectionString));
        }
        public async static Task UpdateComandaData(WebApplication app)
        {
            using (var scope = app.Services.CreateScope())
            {
                var services = scope.ServiceProvider;
                var dbContext = services.GetRequiredService<DatabaseContext>();

                // Realize a atualização aqui
                //var comandaToUpdate = await dbContext.Comandas.ToListAsync(); // Exemplo de busca por uma comanda
                //foreach(var comanda in comandaToUpdate)
                //{
                //    comanda.Aberto = false;
                //}
                //dbContext.Comandas.UpdateRange(comandaToUpdate);yuhhhhhh~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                //await dbContext.SaveChangesAsync();

                //ToDo Realizar Liberação de comandas caso o sistema seja fechado inesperadamente
            }
        }
    }
}
