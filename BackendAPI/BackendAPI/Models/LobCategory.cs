using System;

namespace BackendAPI.Models
{
    public class LobCategory
    {
        public int Id { get; set; }
        public string LobCategoryName { get; set; }
        public DateTime CreatedOn { get; set; }
        public string? UpdatedBy { get; set; }
        public string? CreatedBy { get; set; }
        public DateTime? UpdatedOn { get; set; }
        public Guid? UpdatedWith { get; set; }
        public bool IsActive { get; set; }
    }
}
