namespace EmployeeDirectoryApi.Models
{
    public class Employee
    {
        // Basic employee details
        public int Id { get; set; }  // Changed to int for consistency
        public string Name { get; set; }
        public string Photo { get; set; }
        public string Designation { get; set; }
        public string Department { get; set; }
        public double? Rating { get; set; }
        public int TotalExperience { get; set; }
        public int InHouseExperience { get; set; }
        public string Team { get; set; }
        public string ReportingManager { get; set; }
        public int DaysPresent { get; set; }

        // Relationships

        // Location - One-to-One relationship (assuming one employee has one location)
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
        public int Id { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
    }

    public class LeaveDetail
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }  // Foreign key
        public int CasualLeaveAvailable { get; set; }
        public int CasualLeaveTaken { get; set; }
        public int SickLeaveAvailable { get; set; }
        public int SickLeaveTaken { get; set; }

        // Navigation property to Employee
        public Employee Employee { get; set; }
    }

    public class LeaveApplication
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }  // Foreign key
        public DateOnly Date { get; set; }
        public string LeaveType { get; set; }
        public int Count { get; set; }
        public string Status { get; set; }

        // Navigation property to Employee
        public Employee Employee { get; set; }
    }

    public class Note
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }  // Foreign key
        public string Name { get; set; }
        public DateOnly Date { get; set; }
        public TimeOnly Time { get; set; }
        public string Comment { get; set; }

        // Navigation property to Employee
        public Employee Employee { get; set; }
    }

    public class Probation
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }  // Foreign key
        public int Progress { get; set; }

        // Navigation property to Employee
        public Employee Employee { get; set; }
    }

    public class SalaryDetail
    {
        public int Id { get; set; }
        public int EmployeeId { get; set; }  // Foreign key
        public double Accessible { get; set; }
        public double Payable { get; set; }

        // Navigation property to Employee
        public Employee Employee { get; set; }
    }
}
