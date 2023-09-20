
using DoctorAppBackend.Models;
using Microsoft.EntityFrameworkCore;
using System.Reflection.Emit;

namespace DoctorAppBackend.Database
{
    public class DoctorDbContext:DbContext
    {
        public DoctorDbContext(DbContextOptions <DoctorDbContext> options):base (options)
        {

        }
        public DbSet<Doctor> doctors { get; set; }
        public DbSet<Specialization> specializations { get; set; }
        public DbSet<Surgery> surgeries { get; set; }
        public DbSet<DoctorSpecialization> DrSpecializations { get; set; }

        protected override void OnModelCreating(ModelBuilder model)
        {
            model.Entity<Doctor>().Property(x => x.DoctorId).UseIdentityColumn(1001); //This will ensure that DoctorId starts with 1001

            model.Entity<DoctorSpecialization>().HasKey(x => new { x.DoctorId, x.SpecializationCode }); //This will make (DoctorId,SpecializationCode) primary key for DoctorSpecialization

            model.Entity<Surgery>().Property(x => x.SurgeryId).UseIdentityColumn(5000); //This will ensure that SurgeryId starts with 5000
            model.Entity<Surgery>().HasOne(s => s.Specialization).WithMany().HasForeignKey(s => s.SurgeryCategory);
        }

    }
}
