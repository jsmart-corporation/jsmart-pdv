using JSmartPDV.DB.Models;
using JSmartPDV.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JSmartPDV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ControleCaixaController : ControllerBase
    {
        private readonly ControleCaixaService _services;

        public ControleCaixaController(ControleCaixaService services)
        {
            _services = services;
        }

        [HttpPost("aporte")]
        public async Task<ActionResult<dynamic>> PostAporteCaixaAsync(ControleCaixa aporte)
        {
            return Ok(await _services.PostAporteCaixaAsync(aporte));
        }
        [HttpPost("retirada")]
        public async Task<ActionResult<dynamic>> PostRetiradaCaixaAsync(ControleCaixa retirada)
        {
            return Ok(await _services.PostRetiradaCaixaAsync(retirada));
        }
    }
}
