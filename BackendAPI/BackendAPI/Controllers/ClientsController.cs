using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendAPI.Models;

namespace BackendAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientsController : ControllerBase
    {
        private readonly LobContext _context;

        public ClientsController(LobContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Client>>> GetClients()
        {
            return await _context.Clients.ToListAsync();
        }

        [HttpGet("{id}")]
        public Task<Client> GetbyId(int id)
        {
            var obj = _context.Clients
                
                .Include(am => am.client_inv_del).ThenInclude(a => a.inv_delivery)
                .FirstOrDefaultAsync(n => n.Id == id);
            var x= obj;
            return x;
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutClient(int id,inv_delivery client)
        {
            
            _context.inv_Deliveries.Add(client);
            await _context.SaveChangesAsync();

            var x= _context.inv_Deliveries.Find(client.Id).Id;
            try
            {
                await _context.SaveChangesAsync();

                var obj = new client_inv_del
                {
                    ClientId = id,
                    inv_deliveryId = x
                };
                _context.client_Inv_Dels.Add(obj);
                _context.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ClientExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            
            return Ok();
        }

        [HttpPost]
        public async Task<ActionResult<Client>> PostClient(Client client)
        {
            _context.Clients.Add(client);
            await _context.SaveChangesAsync();

            return Ok();
        }

        private bool ClientExists(int id)
        {
            return _context.Clients.Any(e => e.Id == id);
        }
    }
}
