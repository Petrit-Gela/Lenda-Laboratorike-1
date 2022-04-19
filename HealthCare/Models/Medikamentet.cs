using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthCare.Models
{
    public class Medikamentet
    {
        public int medikamentiid { get; set; }
        public string emri { get; set; }
        public string doktoriname { get; set; }
        public string doktorilastname { get; set; }
        public string cmimi { get; set; }
    }
}
