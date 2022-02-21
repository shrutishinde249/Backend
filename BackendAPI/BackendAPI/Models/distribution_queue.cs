using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendAPI.Models
{
    public class Distribution
    {
        public int Id { get; set; }
        public string Attachment_name { get; set; }
        public DateTime Datetime_approved { get; set; }
        public string Epic_agencycode { get; set; }
        public string current_status { get; set; }
        public DateTime installeddate { get; set; }
        public string Dmethod { get; set; }
        public string cmemail { get; set; }
        public string toemail { get; set; }
        public string ccemail { get; set; }
        public string invoice { get; set; }
        public string epic_lookup_code { get; set; }
        public string client_name { get; set; }
        public DateTime sendcm_date { get; set; }
        public DateTime cmreview_date { get; set; }
        public string cmapproved { get; set; }



    }
}