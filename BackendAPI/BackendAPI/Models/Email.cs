using Microsoft.AspNetCore.Http;
using System.ComponentModel.DataAnnotations.Schema;

namespace BackendAPI.Models
{
    public class Email
    {
        public int Id { get; set; }
        public string subject_line { get; set; }
        public string body { get; set; }
        public string footer { get; set; }
        [Column(TypeName = "nvarchar(100)")]
        public string ImageName { get; set; }
        [NotMapped]
        public IFormFile ImageFile { get; set; }

        
        public string ImageSrc { get; set; }
    }
}
