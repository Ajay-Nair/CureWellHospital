using DoctorAppBackend.Models;
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

        [HttpGet("doctors")]
        public IActionResult GetDoctors()
        {
            var data = cureWellRepository.GetAllDoctors();
            return Ok(data);
        }

        [HttpGet]
        [Route("specializations")]
        public IActionResult Get()
        {
            var data = cureWellRepository.GetAllSpecialization();
            return Ok(data);
        }

        [HttpGet("surgeries")]
        public IActionResult GetAllSurgeryTypeForToday()
        {
            var data = cureWellRepository.GetAllSurgeries();
            return Ok(data);
        }

        [HttpGet("specialization/{specializationCode}/doctors")]
        public IActionResult GetDoctorsBySpecializationCode(string specializationCode)
        {
            var data = cureWellRepository.GetDoctorsBySpecializationCode(specializationCode);
            return Ok(data);
        }

        [HttpPost("doctors")]
        public IActionResult AddDoctor(Doctor doctor)
        {
            bool success = cureWellRepository.AddDoctor(doctor);
            if (success)
                return Created(HttpContext.Request.Scheme + "://" + HttpContext.Request.Host +
                 HttpContext.Request.Path + "/", doctor);
            else
            {
                return BadRequest("Doctor details could not be added");
            }
        }

        [HttpPut("doctor")]
        public IActionResult UpdateDoctorDetails(Doctor dObj)
        {
            var success = cureWellRepository.UpdateDoctorDetails(dObj);
            if (success)
                return Ok();
            else
                return BadRequest();

        }

        [HttpPut("surgeries")]
        public IActionResult UpdateSurgery(Surgery SObj)
        {
            var success = cureWellRepository.UpdateSurgery(SObj);
            if (success)
                return Ok();
            else
                return BadRequest();

        }

        [HttpDelete("doctors")]
        public IActionResult DeleteDoctor(Doctor dObj)
        {
            var success = cureWellRepository.DeleteDoctor(dObj);
            if (success)
                return Ok();
            else
                return BadRequest();
        }

    }
}
