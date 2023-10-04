using JSmartPDV.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JSmartPDV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EstacaoController : ControllerBase
    {
        private readonly EstacaoService _service;

        public EstacaoController(EstacaoService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult> GetEstacoes()
        {
            return Ok(await _service.GetEstacoes());
        }
    }
}
