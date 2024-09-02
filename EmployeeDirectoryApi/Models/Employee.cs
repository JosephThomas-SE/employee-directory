namespace EmployeeDirectoryApi.Models
{
    public class Employee
    {
        public byte? id { get; set; }
        public string name { get; set; }
        public string photo { get; set; }
        public string designation { get; set; }
        public string department { get; set; }
        public double? rating { get; set; }
        public string address { get; set; }
        public string city { get; set; }
        public string country { get; set; }
        public byte? totalExperience { get; set; }
        public byte? inHouseExperience { get; set; }
        public string team { get; set; }
        public string reportingManager { get; set; }
        public byte? daysPresent { get; set; }
        public byte? casualLeaveAvailable { get; set; }
        public byte? casualLeaveTaken { get; set; }
        public byte? sickLeaveAvailable { get; set; }
        public byte? sickLeaveTaken { get; set; }
        public byte? leaveApplicationId { get; set; }
        public DateOnly leaveApplicationDate { get; set; }
        public string leaveApplicationLeaveType { get; set; }
        public byte? leaveApplicationCount { get; set; }
        public string leaveApplicationStatus { get; set; }
        public byte? notesId { get; set; }
        public string notesName { get; set; }
        public DateOnly notesDate { get; set; }
        public TimeOnly notesTime { get; set; }
        public string notesComment { get; set; }
        public byte? probationProgress { get; set; }
        public int salaryAccessible { get; set; }
        public int salaryPayable { get; set; }
    }



}
