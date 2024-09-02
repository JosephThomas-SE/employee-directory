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
        public DbSet<Location> Locations { get; set; }
        public DbSet<LeaveDetail> LeaveDetails { get; set; }
        public DbSet<LeaveApplication> LeaveApplications { get; set; }
        public DbSet<Note> Notes { get; set; }
        public DbSet<Probation> Probations { get; set; }
        public DbSet<SalaryDetail> SalaryDetails { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            // Table mappings
            modelBuilder.Entity<Employee>().ToTable("Employees");
            modelBuilder.Entity<Location>().ToTable("Locations");
            modelBuilder.Entity<LeaveDetail>().ToTable("LeaveDetails");
            modelBuilder.Entity<LeaveApplication>().ToTable("LeaveApplications");
            modelBuilder.Entity<Note>().ToTable("Notes");
            modelBuilder.Entity<Probation>().ToTable("Probations");
            modelBuilder.Entity<SalaryDetail>().ToTable("SalaryDetails");

            // Configurations for relationships

            // One-to-One relationship between Employee and Location
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.Location)
                .WithOne()
                .HasForeignKey<Employee>(e => e.LocationId);

            // One-to-One relationship between Employee and LeaveDetail
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.LeaveDetails)
                .WithOne(ld => ld.Employee)
                .HasForeignKey<LeaveDetail>(ld => ld.EmployeeId);

            // One-to-Many relationship between Employee and LeaveApplication
            modelBuilder.Entity<Employee>()
                .HasMany(e => e.LeaveApplications)
                .WithOne(la => la.Employee)
                .HasForeignKey(la => la.EmployeeId);

            // One-to-Many relationship between Employee and Note
            modelBuilder.Entity<Employee>()
                .HasMany(e => e.Notes)
                .WithOne(n => n.Employee)
                .HasForeignKey(n => n.EmployeeId);

            // One-to-One relationship between Employee and Probation
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.Probation)
                .WithOne(p => p.Employee)
                .HasForeignKey<Probation>(p => p.EmployeeId);

            // One-to-One relationship between Employee and SalaryDetail
            modelBuilder.Entity<Employee>()
                .HasOne(e => e.SalaryDetails)
                .WithOne(sd => sd.Employee)
                .HasForeignKey<SalaryDetail>(sd => sd.EmployeeId);
        }
    }
}
