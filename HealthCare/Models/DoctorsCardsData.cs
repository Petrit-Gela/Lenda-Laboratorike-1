using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthCare.Models
{
    public class DoctorsCardsData
    {
        public int DoctorId { get; set; }
        public string DoctorName { get; set; }
        public string Department { get; set; }
        public string PhotoFileName { get; set; }
        public string CV { get; set; }
    }
}
