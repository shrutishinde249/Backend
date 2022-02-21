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
    [Route("api/[Controller]")]
    [ApiController]
    public class DistributionController : ControllerBase
    {

        private readonly LobContext _context;

        public DistributionController(LobContext context)
        {
            _context = context;
        }


        [HttpGet]
        public async Task<ActionResult<IEnumerable<Distribution>>> GetDistribution()
        {
            return await _context.Distributions.ToListAsync();

        }

        [HttpGet("GetStatus/{status}")]
        public async Task<ActionResult<IEnumerable<Distribution>>> getstatus(string status)
        {
            return await _context.Distributions.Where(lc => lc.current_status.Equals(status)).ToListAsync();

        }

        [HttpGet("{invoice}/{clientname}")]
        public async Task<ActionResult<IEnumerable<Distribution>>> getsearch(string invoice, string clientname)
        {
            return await _context.Distributions.Where(lc => lc.invoice.Equals(invoice) && lc.client_name.Equals(clientname)).ToListAsync();

        }

        [HttpGet("GetId/{id}")]
        public async Task<ActionResult<Distribution>> GetDistribution(int id)
        {
            var distributions = await _context.Distributions.FindAsync(id);

            if (distributions == null)
            {
                return NotFound();
            }

            return distributions;
        }

        [HttpPost]
        public async Task<ActionResult<Distribution>> PostDistribution(Distribution distribution)
        {
            _context.Distributions.Add(distribution);
            await _context.SaveChangesAsync();

            return Ok();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDistributions(int id)
        {
            var distribution = await _context.Distributions.FindAsync(id);
            if (distribution == null)
            {
                return NotFound();
            }

            _context.Distributions.Remove(distribution);
            await _context.SaveChangesAsync();

            return NoContent();
        }


    }
}