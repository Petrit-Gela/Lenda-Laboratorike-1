using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthCare.Models
{
    public class Appointment
    {
        public int appointmentid { get; set; }
        public string username { get; set; }
        public string uselastname { get; set; }
        public string userphone { get; set; }
        public string useremail { get; set; }
        public string appointmentdate { get; set; }
        public string textmessage { get; set; }
        public string departmentid { get; set; }
        public string doctorid { get; set; }
    }
}
