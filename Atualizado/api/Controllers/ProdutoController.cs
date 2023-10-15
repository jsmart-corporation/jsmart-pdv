using api.Atribute;
using api.Controllers.Base;
using api.Model;
using api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : PdvBase
    {
        private readonly ProdutoService _service;

        public ProdutoController(ProdutoService service)
        {
            _service = service;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult> PostClienteAsync(Produto produto)
            => Ok(await _service.PostProdutoAsync(produto));

        [HttpGet("all")]
        [Authorize]
        public async Task<ActionResult> GetAllClientes()
            => Ok(await _service.GetAllProdutos());

        [HttpGet("recomendados")]
        [Authorize]
        public async Task<ActionResult> GetRecomendadosAsync()
            => Ok(await _service.GetRecomendadosAsync());

        [HttpPatch]
        [Authorize]
        public async Task<ActionResult> PatchClienteAsync(Produto produto)
            => Ok(await _service.PatchProdutoAsync(produto));

        [HttpPatch("delete")]
        [Authorize]
        public async Task<ActionResult> DeleteClienteAsync(int codProduto)
            => Ok(await _service.DeleteProdutoAsync(codProduto));
        
        [HttpGet("codBarra")]
        [Authorize]
        public async Task<ActionResult> DeleteClienteAsync(string codBarra)
            => Ok(await _service.GetProdutoCodigoBarra(codBarra));
    }
}
