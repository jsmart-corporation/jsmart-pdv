namespace api.Programs
{
    public static class CorsSetup
    {
        public static void AddCorsPolicyCustom(this IServiceCollection services)
        {
            services.AddCors(options =>
            {
                options.AddPolicy("Policy",
                builder => builder.WithOrigins("http://localhost:5173")
                    .AllowAnyMethod()
                    .AllowAnyHeader());
            });
        }
    }
}
