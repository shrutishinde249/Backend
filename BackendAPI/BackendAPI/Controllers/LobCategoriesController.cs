using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendAPI.Models;
using Microsoft.AspNetCore.Cors;

namespace BackendAPI.Controllers
{
    [EnableCors("pol")]
    [Route("[controller]")]
    [ApiController]
    public class LobCategoriesController : ControllerBase
    {
        private readonly LobContext _context;

        public LobCategoriesController(LobContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LobCategory>>> GetLobCategories()
        {
            return await _context.LobCategories.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LobCategory>> GetLobCategory(int id)
        {
            var lobCategory = await _context.LobCategories.FindAsync(id);

            if (lobCategory == null)
            {
                return NotFound();
            }

            return lobCategory;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutLobCategory(int id, LobCategory lobCategory)
        {
            if (id != lobCategory.Id)
            {
                return BadRequest();
            }

            _context.Entry(lobCategory).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
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

        [EnableCors("pol")]
        [HttpPost]
        public async Task<ActionResult<LobCategory>> PostLobCategory(LobCategory lobCategory)
        {
            _context.LobCategories.Add(lobCategory);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetLobCategory", new { id = lobCategory.Id }, lobCategory);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLobCategory(int id)
        {
            var lobCategory = await _context.LobCategories.FindAsync(id);
            if (lobCategory == null)
            {
                return NotFound();
            }

            _context.LobCategories.Remove(lobCategory);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool LobCategoryExists(int id)
        {
            return _context.LobCategories.Any(e => e.Id == id);
        }
    }
}
