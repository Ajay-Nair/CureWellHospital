using DoctorAppBackend.Database;
using DoctorAppBackend.Models;

namespace DoctorAppBackend.Services
{
    public class CureWellRepository : ICureWellRepository
    {
        private readonly DoctorDbContext dbContext;
        public CureWellRepository(DoctorDbContext dbContext)
        {
            this.dbContext = dbContext;
        }
        public bool AddDoctor(Doctor dObj)
        {
            dbContext.doctors.Add(dObj);
            return true;
        }

        public bool DeleteDoctor(Doctor dObj)
        {
            var doctor = dbContext.doctors.Remove(dObj);
            
            return true;
        }

        public List<Doctor> GetAllDoctors()
        {
            var list = dbContext.doctors.ToList();
            if (list is null)
                return null;
            else
                return list;
        }

        public List<Specialization> GetAllSpecialization()
        {
            return dbContext.specializations.ToList();
        }

        public List<Surgery> GetAllSurgeries()
        {
            return dbContext.surgeries.Where(surgery => surgery.SurgeryDate == DateTime.Today).ToList();
        }

        public List<DoctorSpecialization> GetDoctorsBySpecializationCode(string specializationCode)
        {

            return dbContext
                .DrSpecializations.
                Where(drSpecialization => drSpecialization.SpecializationCode.Equals(specializationCode))
                .ToList();

        }

        public bool UpdateDoctorDetails(Doctor dObj)
        {
            var doctor = dbContext.doctors.FirstOrDefault(doc => doc.DoctorId == dObj.DoctorId);
            doctor.DoctorName = dObj.DoctorName;
            return true;
        }

        public bool UpdateSurgery(Surgery sObj)
        {
            throw new NotImplementedException();
        }

    }
}
