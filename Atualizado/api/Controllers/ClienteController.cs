using api.Atribute;
using api.Controllers.Base;
using api.Model;
using api.Services;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClienteController : PdvBase
    {
        private readonly ClienteService _service;

        public ClienteController(ClienteService service)
        {
            _service = service;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult> PostClienteAsync(Cliente cliente)
            => Ok(await _service.PostClienteAsync(cliente));

        [HttpGet("all")]
        [Authorize]
        public async Task<ActionResult> GetAllClientes()
            => Ok(await _service.GetAllClientes());

        [HttpPatch]
        [Authorize]
        public async Task<ActionResult> PatchClienteAsync(Cliente cliente)
            => Ok(await _service.PatchClienteAsync(cliente));

        [HttpPatch("delete")]
        [Authorize]
        public async Task<ActionResult> DeleteClienteAsync(int codCliente)
            => Ok(await _service.DeleteClienteAsync(codCliente));

        [HttpGet("documento")]
        [Authorize]
        public async Task<ActionResult> GetClienteCPFCNPJAsync(string doc)
            => Ok(await _service.GetClienteCPFCNPJAsync(doc));
    }
}
