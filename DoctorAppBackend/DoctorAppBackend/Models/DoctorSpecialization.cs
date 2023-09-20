using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorAppBackend.Models
{
    public class DoctorSpecialization
    {
       
        public int DoctorId { get; set; }
        [ForeignKey("DoctorId")]
        public Doctor Doctor { get; set; }
    
        public string SpecializationCode { get; set; }
        [ForeignKey("SpecializationCode")]
        public Specialization Specialization { get; set; }

        [Required]
        public DateTime SpecializationDate { get; set; }
    }
}
