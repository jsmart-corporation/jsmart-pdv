using api.Atribute;
using api.Controllers.Base;
using api.Services;
using JSmartPDV.DB.DTO.Transacao;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TransacoesController : PdvBase
    {
        private readonly TransacaoService _service;

        public TransacoesController(TransacaoService service)
        {
            _service = service;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult> PostTransacaoAsync(TransacaoDTO transacao)
        {
            var user = GetCodUsuario();
            return Ok(await _service.PostTransacaoAsync(transacao, user));
        }
        [HttpGet("all")]
        [Authorize]
        public async Task<ActionResult> GetAllTransacoes()
        {
            var user = GetCodUsuario();
            return Ok(await _service.GetAllTransacoes());
        }
    }
}
