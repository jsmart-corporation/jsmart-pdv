using JSmartPDV.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JSmartPDV.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : ControllerBase
    {
        private readonly ClienteService _service;

        public ClienteController(ClienteService service)
        {
            _service = service;
        }

        [HttpGet("cpf")]
        public async Task<ActionResult> GetClienteCPF([FromQuery]string cpf)
        {
            var result = await _service.GetClienteCPF(cpf);
            return Ok(result);
        }
    }
}
