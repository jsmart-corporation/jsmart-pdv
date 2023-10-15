using api.Services;

namespace api.Programs
{
    public static class InjectorSetup
    {
        public static void AddInjections(this IServiceCollection services)
        {
            services.AddScoped<JWTService>();
            services.AddScoped<UserService>();
            services.AddScoped<ContaBancariaService>();
            services.AddScoped<FormasPagamentoService>();
            services.AddScoped<CategoriaService>();
            services.AddScoped<ClienteService>();
            services.AddScoped<ProdutoService>();
            services.AddScoped<CaixaService>();
            services.AddScoped<TransacaoService>();
            services.AddScoped<TransacaoPagamentoService>();
        }
    }
}
