using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthCare.Models
{
    public class Diagnoses
    {
        public string patientsname { get; set; }
        public int diagnoseid { get; set; }
        public string diagnosename { get; set; }
        public string diagnosedescription { get; set; }
        public string nursesname { get; set; }
        public string doctorsname { get; set; }


    }
}
