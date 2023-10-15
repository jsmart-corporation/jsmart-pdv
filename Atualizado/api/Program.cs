using api.MIddleware;
using api.Programs;
using BackEnd_Clinica.MIddleware;
using Microsoft.AspNetCore.SpaServices.ReactDevelopmentServer;

var builder = WebApplication.CreateBuilder(args);


builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddInjections();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(
    builder => builder.AllowAnyOrigin()
        .AllowAnyMethod()
        .AllowAnyHeader());
});
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.DbConnectionSetup(builder.Configuration);
builder.Services.AddSpaStaticFiles(configuration =>
{
    configuration.RootPath = "React";
});
var app = builder.Build();
app.UseSpaStaticFiles();
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseRouting();

app.UseMiddleware(typeof(ErrorHandleMiddleware));
app.UseMiddleware(typeof(AuthenticatorMiddleware));
app.UseAuthorization();
app.UseCors();
app.MapControllers();



app.Run();
