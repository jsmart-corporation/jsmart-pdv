using api.Controllers.Base;
using api.DTO.Caixa;
using api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CaixaController : PdvBase
    {
        private readonly CaixaService _service;

        public CaixaController(CaixaService service)
        {
            _service = service;
        }

        [HttpPost]
        public async Task<ActionResult> PostCaixaAsync (CaixaAberturaDTO caixa)
        {
            var userId = GetCodUsuario();
            return Ok(await _service.PostAbrirCaixaAsync(caixa, userId));
        }
        [HttpGet("status")]
        public async Task<ActionResult> GetStatusCaixa()
        {
            var userId = GetCodUsuario();
            return Ok(await _service.GetStatusCaixa(userId));
        }
    }
}
