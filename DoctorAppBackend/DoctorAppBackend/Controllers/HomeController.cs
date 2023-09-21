using DoctorAppBackend.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DoctorAppBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HomeController : ControllerBase
    {
        private readonly ICureWellRepository cureWellRepository;

        public HomeController(ICureWellRepository cureWellRepository)
        {
            this.cureWellRepository = cureWellRepository;
        }
        [HttpGet]
        public IActionResult Get()
        {
            var data = cureWellRepository.GetAllDoctors();
            return Ok(data);
        }
    }
}
