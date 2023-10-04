using JSmartPDV.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JSmartPDV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly ProdutoServices _services;

        public ProdutoController(ProdutoServices services)
        {
            _services = services;
        }

        [HttpGet("desc")]
        public async Task<dynamic> GetProdutosDesc([FromQuery] string? filtro)
        {
            return Ok(await _services.GetProdutosDesc(filtro));
        }
        [HttpGet("codigobarra")]
        public async Task<dynamic> GetProdutoCodigoDeBarra([FromQuery] string codigoBarra)
        {
            return Ok(await _services.GetProdutoCodigoDeBarras(codigoBarra));
        }
        [HttpGet("recomendados")]
        public async Task<dynamic> GetProdutosRecomendados()
        {
            return Ok(await _services.GetProdutosRecomendados());
        }
    }
}
