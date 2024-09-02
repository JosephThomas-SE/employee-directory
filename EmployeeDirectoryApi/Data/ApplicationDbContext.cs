using EmployeeDirectoryApi.Models;
using Microsoft.EntityFrameworkCore;

namespace EmployeeDirectoryApi.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<Employee> Employees { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // Add model configurations here if necessary
            modelBuilder.Entity<Employee>()
            .ToTable("EmployeeDirectoryApi"); // Specify the table name explicitly
        }
    }
}
