using JSmartPDV.DB.DTO.Caixa;
using JSmartPDV.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JSmartPDV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CaixaController : ControllerBase
    {
        private readonly CaixaServices _services;

        public CaixaController(CaixaServices services)
        {
            _services = services;
        }

        [HttpPost("abertura")]
        public async Task<ActionResult<dynamic>> PostAbrirCaixaAsync(CaixaAberturaDTO abertura)
        {
            return Ok(await _services.PostAbrirCaixaAsync(abertura));
        }
        [HttpGet("status")]
        public async Task<ActionResult<dynamic>> GetCaixaStatus()
        {
            return Ok(await _services.GetStatusCaixa());
        }
        [HttpGet("resumo")]
        public async Task<ActionResult<dynamic>> GetCaixaResumo(int caixaId)
        {
            return Ok(await _services.GetSessaoCaixa(caixaId));
        }
        [HttpPatch("fechar")]
        public async Task<ActionResult<dynamic>> PostFecharCaixa([FromQuery]int caixaId)
        {
            return Ok(await _services.PostFecharCaixaAsync(caixaId));
        }
    }
}
