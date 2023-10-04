using JSmartPDV.DB.DTO.Transacao;
using JSmartPDV.DB.Models;
using JSmartPDV.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JSmartPDV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransacaoController : ControllerBase
    {
        private readonly TransacaoService _service;

        public TransacaoController(TransacaoService service)
        {
            _service = service;
        }

        [HttpPost("nova")]
        public async Task<ActionResult> PostTransacaoAsync(TransacaoDTO transacao)
        {
            var result = await _service.PostTransacaoAsync(transacao);
            return Ok(result);

        }
        [HttpGet("resumo")]
        public async Task<ActionResult> GetTransacoesResumoAsync(int caixaId)
        {
            var result = await _service.GetTransacoesResumoAsync(caixaId);
            return Ok(result);
        }
    }
}
