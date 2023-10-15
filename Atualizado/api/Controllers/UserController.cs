using api.Atribute;
using api.Controllers.Base;
using api.DTO.User;
using api.Model;
using api.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : PdvBase
    {
        private readonly UserService _service;
        
        public UserController(UserService service)
        {
            _service = service;
        }

        [HttpPost("auth")]
        public async Task<ActionResult<string>> Auth(AuthDTO auth)
            =>  await _service.Auth(auth);

        [HttpPost]
        public async Task<ActionResult<string>> Register(UserDTO user)
            => await _service.Register(user);

        [HttpGet("data")]
        [Authorize]
        public async Task<ActionResult<dynamic>> GetUserData()
        {
            var codUsuario = GetCodUsuario();
            return Ok(await _service.GetUserData(codUsuario));
        }

    }
}
