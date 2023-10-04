using JSmartPDV.Services;

namespace JSmartPDV.Programs
{
    public static class InjectorSetup
    {
        public static void AddInjections(this IServiceCollection services)
        {
            services.AddScoped<ProdutoServices>();
            services.AddScoped<CaixaServices>();
            services.AddScoped<ControleCaixaService>();
            services.AddScoped<ClienteService>();
            services.AddScoped<FinMetodoPagamentoService>();
            services.AddScoped<TransacaoService>();
            services.AddScoped<EstacaoService>();
        }
    }
}
