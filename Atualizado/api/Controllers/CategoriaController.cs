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
    public class CategoriaController : PdvBase
    {
        private readonly CategoriaService _service;

        public CategoriaController(CategoriaService service)
        {
            _service = service;
        }

        [HttpPost]
        [Authorize]
        public async Task<ActionResult> PostCategoriaAsync(Categoria categoria)
            => Ok(await _service.PostCategoriaAsync(categoria));

        [HttpGet("all")]
        [Authorize]
        public async Task<ActionResult> GetAllCategorias()
            => Ok(await _service.GetAllCategorias());

        [HttpPatch]
        [Authorize]
        public async Task<ActionResult> PatchCategoriaAsync(Categoria categoria)
            => Ok(await _service.PatchCategoriaAsync(categoria));

        [HttpPatch("delete")]
        [Authorize]
        public async Task<ActionResult> DeleteCategoriaAsync(int codCategoria)
            => Ok(await _service.DeleteCategoriaAsync(codCategoria));
    }
}
