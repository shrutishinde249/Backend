using Microsoft.EntityFrameworkCore;
using BackendAPI.Models;

namespace BackendAPI.Models
{
    public class LobContext : DbContext
    {
        public LobContext(DbContextOptions options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<client_inv_del>().HasKey(am => new
            {
                am.inv_deliveryId,
                am.ClientId
            });

            modelBuilder.Entity<client_inv_del>().HasOne(m => m.Client).WithMany(am => am.client_inv_del).HasForeignKey(m => m.ClientId);
            modelBuilder.Entity<client_inv_del>().HasOne(m => m.inv_delivery).WithMany(am => am.client_inv_del).HasForeignKey(m => m.inv_deliveryId);


            base.OnModelCreating(modelBuilder);
        }
        public DbSet<HomeModel> HomeModels { get; set; }
        public DbSet<LobCategory> LobCategories { get; set; }
        public DbSet<Email> Emails { get; set; }
        public DbSet<policyline> policylines { get; set; }
        public DbSet<inv_delivery> inv_Deliveries { get; set; }
        public DbSet<Client> Clients { get; set; }
        public DbSet<client_inv_del> client_Inv_Dels { get; set; }
        public DbSet<Glob> Globs { get; set; }
        public DbSet<Distribution> Distributions { get; set; }
    }
}
