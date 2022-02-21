using BackendAPI.Models;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendAPI.Controllers
{
    [EnableCors("pol")]
    [Route("[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly LobContext db;

        public ValuesController(LobContext context)
        {
            db = context;
        }

        [HttpGet]
        public List<HomeModel> Get()
        {
            return db.HomeModels.ToList();
        }

        [HttpGet("{id}")]
        public HomeModel Get(int id)
        {
            var x = db.HomeModels.Find(id);
            return x;
        }

        [HttpPost]
        public void Post(HomeModel obj)
        {
            db.HomeModels.Add(obj);
            db.SaveChanges();
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, HomeModel obj)
        {
            db.Entry(obj).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!LobCategoryExists(id))
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
        private bool LobCategoryExists(int id)
        {
            return db.HomeModels.Any(e => e.Id == id);
        }

        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            var x = db.HomeModels.Find(id);
            db.HomeModels.Remove(x);
            db.SaveChanges();
        }

        [HttpDelete]

        public void Delete()
        {
            var x = db.HomeModels.ToList();
            foreach(var z in x)
            {
                db.HomeModels.Remove(z);
            }
            db.SaveChanges();
        }

    }
}
