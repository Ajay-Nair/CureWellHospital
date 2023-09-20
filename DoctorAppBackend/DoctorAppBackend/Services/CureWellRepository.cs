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
            throw new NotImplementedException();
        }

        public List<Doctor> GetAllDoctors()
        {
            throw new NotImplementedException();
        }

        public List<Specialization> GetAllSpecialization()
        {
            throw new NotImplementedException();
        }

        public List<Surgery> GetAllSurgeries()
        {
            throw new NotImplementedException();
        }

        public List<Doctor> GetDoctorsBySpecializationCode(string specializationCode)
        {
            throw new NotImplementedException();
        }

        public bool UpdateDoctorDetails(Doctor dObj)
        {
            throw new NotImplementedException();
        }

        public bool UpdateSurgery(Surgery sObj)
        {
            throw new NotImplementedException();
        }
    }
}
