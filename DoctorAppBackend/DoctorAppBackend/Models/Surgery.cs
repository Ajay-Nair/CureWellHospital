﻿using Microsoft.EntityFrameworkCore.Metadata.Internal;
using System.ComponentModel.DataAnnotations.Schema;

namespace DoctorAppBackend.Models
{
    public class Surgery
    {

        [ForeignKey("DoctorId")]

        public int DoctorId { get; set; }
        public Doctor Doctor { get; set; }
     

        [Column(TypeName = "decimal(4,2)")] //specifies that the EndTime should be mapped to a database column with the data type Decimal(4,2).
        public decimal EndTime { get; set; }

        [Column(TypeName = "decimal(4,2)")]
        public decimal StartTime { get; set; }

        [Column(TypeName = "char(3)")]      //specifies that the SurgeryCategory should be mapped to a database column with the data type Decimal(4,2).
        [ForeignKey("SpecializationCode")]
        public string SurgeryCategory { get; set; }

        public Specialization Specialization;
        public DateTime SurgeryDate { get; set; }

        public int SurgeryId { get; set; }
    }
}
