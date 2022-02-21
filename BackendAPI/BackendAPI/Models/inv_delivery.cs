using System;
using System.Collections.Generic;

namespace BackendAPI.Models
{
    public class inv_delivery
    {
        public int Id { get; set; }
        public string instr_level { get; set; }
        public string agency_code { get; set; }
        public int s_id { get; set; }
        public string contact_name { get; set; }
        public string glob { get; set; }
        public string desc { get; set; }
        public string updated_by { get; set; }
        public DateTime? updated_on { get; set; }
       
        public List<client_inv_del> client_inv_del { get; set; }
    }
}
