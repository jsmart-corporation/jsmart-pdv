using JSmartPDV.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JSmartPDV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FinMetodoPagamentoController : ControllerBase
    {
        private readonly FinMetodoPagamentoService _service;

        public FinMetodoPagamentoController(FinMetodoPagamentoService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult> GetMetodosPagamentos()
        {
            return Ok(await _service.GetMetodosPagamentos());
        }
    }
}
