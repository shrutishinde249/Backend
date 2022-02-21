using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendAPI.Models;

namespace BackendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GlobsController : ControllerBase
    {
        private readonly LobContext _context;

        public GlobsController(LobContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Glob>>> GetGlobs()
        {
            return await _context.Globs.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Glob>> GetGlob(int id)
        {
            var glob = await _context.Globs.FindAsync(id);

            if (glob == null)
            {
                return NotFound();
            }

            return glob;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutGlob(int id, Glob glob)
        {
            if (id != glob.Id)
            {
                return BadRequest();
            }

            _context.Entry(glob).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GlobExists(id))
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

        [HttpPost]
        public async Task<ActionResult<Glob>> PostGlob(Glob glob)
        {
            _context.Globs.Add(glob);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGlob", new { id = glob.Id }, glob);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGlob(int id)
        {
            var glob = await _context.Globs.FindAsync(id);
            if (glob == null)
            {
                return NotFound();
            }

            _context.Globs.Remove(glob);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool GlobExists(int id)
        {
            return _context.Globs.Any(e => e.Id == id);
        }
    }
}