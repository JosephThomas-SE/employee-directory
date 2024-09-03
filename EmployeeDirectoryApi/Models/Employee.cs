using System.ComponentModel.DataAnnotations;

namespace EmployeeDirectoryApi.Models
{
    public class Employee
    {
        // Basic employee details
        [Required]
        public int id { get; set; }  // Changed to int for consistency
        [Required]
        public string Name { get; set; }
        [Required]
        public string Photo { get; set; }
        [Required]
        public string Designation { get; set; }
        [Required]
        public string Department { get; set; }
        [Required]
        public double? Rating { get; set; }
        [Required]
        public int TotalExperience { get; set; }
        [Required]
        public int InHouseExperience { get; set; }
        [Required]
        public string Team { get; set; }
        [Required]
        public string ReportingManager { get; set; }
        [Required]
        public int DaysPresent { get; set; }
        [Required]
        public int ProbationProgress { get; set; } // Add this field to match the DB

        // Relationships

        // Location - One-to-One relationship (assuming one employee has one location)
        [Required] 
        public int LocationId { get; set; }
        public Location Location { get; set; }  // Navigation property

        // Leave details - One-to-One relationship
        public LeaveDetail LeaveDetails { get; set; }  // Navigation property

        // Leave applications - One-to-Many relationship
        public List<LeaveApplication> LeaveApplications { get; set; } = new List<LeaveApplication>();

        // Notes - One-to-Many relationship
        public List<Note> Notes { get; set; } = new List<Note>();

        // Probation - One-to-One relationship
        public Probation Probation { get; set; }  // Navigation property

        // Salary details - One-to-One relationship
        public SalaryDetail SalaryDetails { get; set; }  // Navigation property
    }

    public class Location
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public string Address { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public string Country { get; set; }
    }

    public class LeaveDetail
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int EmployeeId { get; set; }  // Foreign key
        [Required]
        public int CasualLeaveAvailable { get; set; }
        [Required]
        public int CasualLeaveTaken { get; set; }
        [Required]
        public int SickLeaveAvailable { get; set; }
        [Required]
        public int SickLeaveTaken { get; set; }

        // Navigation property to Employee
        public Employee Employee { get; set; }
    }

    public class LeaveApplication
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int EmployeeId { get; set; }  // Foreign key
        [Required]
        public DateOnly Date { get; set; }
        [Required]
        public string LeaveType { get; set; }
        [Required]
        public int Count { get; set; }
        [Required]
        public string Status { get; set; }

        // Navigation property to Employee
        public Employee Employee { get; set; }
    }

    public class Note
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int EmployeeId { get; set; }  // Foreign key
        [Required]
        public string Name { get; set; }
        [Required]
        public DateOnly Date { get; set; }
        [Required]
        public TimeOnly Time { get; set; }
        [Required]
        public string Comment { get; set; }

        // Navigation property to Employee
        public Employee Employee { get; set; }
    }

    public class Probation
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int EmployeeId { get; set; }  // Foreign key
        [Required]
        public int Progress { get; set; } // This should match the DB column name

        // Navigation property to Employee
        public Employee Employee { get; set; }
    }

    public class SalaryDetail
    {
        [Required]
        public int Id { get; set; }
        [Required]
        public int EmployeeId { get; set; }  // Foreign key
        [Required]
        public double Accessible { get; set; } // Adjust to match DB column name
        [Required]
        public double Payable { get; set; } // Adjust to match DB column name

        // Navigation property to Employee
        public Employee Employee { get; set; }
    }
}
