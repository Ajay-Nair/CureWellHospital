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
            try
            {
                dbContext.doctors.Add(dObj);
                var noOfEntries = dbContext.SaveChanges();
                if (noOfEntries > 0)
                    return true;
                else
                    return false;
            }
            catch(Exception e)
            {
                return false;
            }
        }

        public bool DeleteDoctor(Doctor dObj)
        {
            try
            {
                var doctor = dbContext.doctors.Remove(dObj);
                int noOfEntries = dbContext.SaveChanges();
                if (noOfEntries > 0)
                    return true;
                else
                    return false;
            }
            catch (Exception e)
            {
                return false;
            }
            
        }

        public List<Doctor> GetAllDoctors()
        {
            try
            {
                return dbContext.doctors.ToList();

            }
            catch(Exception e)
            {
                return null;
            }
        }

        public List<Specialization> GetAllSpecialization()
        {
            try
            {
                return dbContext.specializations.ToList();
            }
            catch(Exception e)
            {
                return null;
            }
        }

        public List<Surgery> GetAllSurgeries()
        {
            try
            {

                return dbContext.surgeries.Where(surgery => surgery.SurgeryDate == DateTime.Today).ToList();

            }
            catch (Exception e)
            {
                return null;
            }}

        public List<DoctorSpecialization> GetDoctorsBySpecializationCode(string specializationCode)
        {
            try {
                return dbContext
                    .DrSpecializations.
                    Where(drSpecialization => drSpecialization.SpecializationCode.Equals(specializationCode))
                    .ToList();

            }
            catch(Exception e)
            {
                return null;
            }
        }

        public bool UpdateDoctorDetails(Doctor dObj)
        {
            try
            {
                var doctor = dbContext.doctors.FirstOrDefault(doc => doc.DoctorId == dObj.DoctorId);
                doctor.DoctorName = dObj.DoctorName;
                int noOfEntries = dbContext.SaveChanges();
                if (noOfEntries > 0)
                    return true;
                else
                    return false;

            }
            catch(Exception e)
            {
                return false;
            }

        }
                public bool UpdateSurgery(Surgery sObj)
        {
            try
            {
                var data = dbContext.surgeries.FirstOrDefault(x => x.SurgeryId == sObj.SurgeryId);
                if (data != null)
                {
                    data.StartTime = sObj.StartTime;
                    data.EndTime = sObj.EndTime;
                    dbContext.SaveChanges();
                    return true;
                }
                return false;
            }
            catch(Exception e)
            {
                return false;
            }
        }

    }
}
