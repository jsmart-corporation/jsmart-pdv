using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace api.Controllers.Base
{
    public class PdvBase : ControllerBase
    {
        protected int GetCodUsuario()
        {
            return int.Parse(HttpContext.Items["Id"]!.ToString()!);
        }
    }
}
