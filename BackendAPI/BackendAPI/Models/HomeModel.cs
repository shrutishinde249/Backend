using System;

namespace BackendAPI.Models
{
    public class HomeModel
    {
        public int Id { get; set; }
        public string Summary { get; set; }
        public string CreatedBy { get; set; }
        public DateTime? CreatedOn { get; set; }
        public Guid UpdatedWith { get; set; }
        public string UpdatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
    }
}
