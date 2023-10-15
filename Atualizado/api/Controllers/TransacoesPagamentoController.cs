using api.Controllers.Base;
using api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransacoesPagamentoController : PdvBase
    {
        private readonly TransacaoPagamentoService _service;

        public TransacoesPagamentoController(TransacaoPagamentoService service)
        {
            _service = service;
        }

        [HttpGet("all")]
        public async Task<ActionResult> GetFinTransacoesPagamento() => Ok(await _service.GetFinTransacoesPagamento());
    }
}
