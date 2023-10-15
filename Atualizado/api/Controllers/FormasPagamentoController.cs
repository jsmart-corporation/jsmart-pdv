using api.Atribute;
using api.Model;
using api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FormasPagamentoController : ControllerBase
    {
        private readonly FormasPagamentoService _service;

        public FormasPagamentoController(FormasPagamentoService service)
        {
            _service = service;
        }

        [HttpGet("all")]
        [Authorize]
        public async Task<dynamic> GetAllFormasPagamento() 
            => Ok(await _service.GetAllFormasPagamento());

        [HttpGet("venda")]
        [Authorize]
        public async Task<dynamic> GetAllFormasPagamentoVenda()
            => Ok(await _service.GetMetodosPagamentos());

        [HttpPost]
        [Authorize]
        public async Task<dynamic> PostFormaPagamentoAsync(FormaPagamento forma) 
            => Ok(await _service.PostFormaPagamentoAsync(forma));

        [HttpPatch]
        [Authorize]
        public async Task<ActionResult> PatchFormaPagamentoAsync(FormaPagamento forma)
            => Ok(await _service.PatchFormaPagamentoAsync(forma));

        [HttpPatch("delete")]
        [Authorize]
        public async Task<ActionResult> DeleteFormaPagamentoAsync(int codFormaPagamento)
           => Ok(await _service.DeleteFormaPagamentoAsync(codFormaPagamento));

    }
}
