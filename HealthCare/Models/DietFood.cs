using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace HealthCare.Models
{
    public class DietFood
    {
        public int dietFoodid { get; set; }
        public string dietName { get; set; }
        public string allowedFoods { get; set; }
        public string notallowedFoods { get; set; }

        public string proteins { get; set; }
        public string PhotoFileName { get; set; }

    }
}
