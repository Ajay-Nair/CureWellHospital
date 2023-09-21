using DoctorAppBackend.Models;

namespace DoctorAppBackend.Services
{
    public interface ICureWellRepository
    {
        List<Doctor> GetAllDoctors();
        bool AddDoctor(Doctor dObj);
        List<Specialization> GetAllSpecialization();
        List<Surgery> GetAllSurgeries();
        List<DoctorSpecialization> GetDoctorsBySpecializationCode(string specializationCode);
        bool UpdateDoctorDetails(Doctor dObj);
        bool UpdateSurgery(Surgery sObj);
        bool DeleteDoctor(Doctor dObj);
    }
}
