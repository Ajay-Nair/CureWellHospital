using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorAppBackend.Models
{
    public class Specialization
    {
        [Key]
        [Column(TypeName = "char(3)")]
        public string SpecializationCode { get; set; }

        [Required]
        public string SpecializationName { get; set; }
    }
}
