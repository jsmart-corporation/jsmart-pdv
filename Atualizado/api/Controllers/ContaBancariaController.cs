using api.Atribute;
using api.Controllers.Base;
using api.Model;
using api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContaBancariaController : PdvBase
    {
        private readonly ContaBancariaService _contaBancariaService;

        public ContaBancariaController(ContaBancariaService contaBancariaService)
        {
            _contaBancariaService = contaBancariaService;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult> PostContaBancariaAsync(ContaBancaria contaBancaria)
            => Ok(await _contaBancariaService.PostContaBancariaAsync(contaBancaria));

        [HttpGet("all")]
        [Authorize]
        public async Task<ActionResult> GetAllContasBancarias()
            => Ok(await _contaBancariaService.GetAllContasBancarias());

        [HttpPatch]
        [Authorize]
        public async Task<ActionResult> PatchContaBancariaAsync(ContaBancaria contaBancaria)
            => Ok(await _contaBancariaService.PatchContaBancariaAsync(contaBancaria));

        [HttpPatch("delete")]
        [Authorize]
        public async Task<ActionResult> DeleteContaBancariaAsync(int codContaBancaria)
            => Ok(await _contaBancariaService.DeleteContaBancariaAsync(codContaBancaria));

    }
}
