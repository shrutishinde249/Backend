using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendAPI.Models
{
    public class policyline
    {
        public int Id { get; set; }
        public string pol_code { get; set; }
        public string desc { get; set; }
        public string gob { get; set; }
        public bool isActive { get; set; }
        public bool PC { get; set; }
        public string app_details { get; set; }

    }
}
