using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthCare.Models
{
    public class Fatura
    {
        public int faturaid { get; set; }
        public string vizita { get; set; }
        public string totali { get; set; }
        public string pacientiname { get; set; }
        public string pacientilastname { get; set; }
    }
}
