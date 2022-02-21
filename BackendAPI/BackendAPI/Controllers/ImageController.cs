using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.IO;
using Microsoft.AspNetCore.Hosting;
using BackendAPI.Models;

namespace BackendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly LobContext _context;
        private readonly IWebHostEnvironment _hostEnvironment;

        public ImageController(LobContext context, IWebHostEnvironment hostEnvironment)
        {
            _context = context;
            this._hostEnvironment = hostEnvironment;
        }
        [HttpGet]
        
        public List<Email> Get()
        {
           return _context.Emails.ToList();
            
        }
        [HttpGet("{id}")]
        public Email Get(int id)
        {
            return _context.Emails.Find(id);
        }
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id,  Email data)
        {
            if (id != data.Id)
            {
                return BadRequest();
            }

            if (data.ImageFile != null)
            {
                DeleteImage(data.ImageName);
                data.ImageName = await Upload(data.ImageFile);
                
                
            }
            data.ImageSrc = String.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, data.ImageName);
            _context.Entry(data).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EmailmodelExist(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        private bool EmailmodelExist(int id)
        {
            return _context.Emails.Any(e => e.Id == id);
        }
        [HttpPost]
        [Route("upload")]
        public async Task<string> Upload(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_hostEnvironment.ContentRootPath, "Images",imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}
