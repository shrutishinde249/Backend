using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendAPI.Models;

namespace BackendAPI.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class policylinesController : ControllerBase
    {
        private readonly LobContext _context;

        public policylinesController(LobContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<policyline>>> Getpolicylines()
        {
            return await _context.policylines.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<policyline>> Getpolicyline(int id)
        {
            var policyline = await _context.policylines.FindAsync(id);

            if (policyline == null)
            {
                return NotFound();
            }

            return policyline;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Putpolicyline(int id, policyline policyline)
        {
            if (id != policyline.Id)
            {
                return BadRequest();
            }

            _context.Entry(policyline).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!policylineExists(id))
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
        public async Task<ActionResult<policyline>> Postpolicyline(policyline policyline)
        {
            _context.policylines.Add(policyline);
            await _context.SaveChangesAsync();

            return CreatedAtAction("Getpolicyline", new { id = policyline.Id }, policyline);
        }

        private bool policylineExists(int id)
        {
            return _context.policylines.Any(e => e.Id == id);
        }
    }
}
