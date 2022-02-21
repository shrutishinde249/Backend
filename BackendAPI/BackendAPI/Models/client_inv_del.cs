using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendAPI.Models
{
    public class client_inv_del
    {
        public int ClientId { get; set; }
        public Client Client { get; set; }

        public int inv_deliveryId { get; set; }
        public inv_delivery inv_delivery { get; set; }
    }
}
