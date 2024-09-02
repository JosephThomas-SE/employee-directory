using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EmployeeDirectoryApi.Migrations
{
    /// <inheritdoc />
    public partial class InitialCreate : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "EmployeeDirectoryApi",
                columns: table => new
                {
                    id = table.Column<byte>(type: "tinyint", nullable: false),
                    name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    photo = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    designation = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    department = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    rating = table.Column<double>(type: "float", nullable: true),
                    address = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    city = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    country = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    totalExperience = table.Column<byte>(type: "tinyint", nullable: true),
                    inHouseExperience = table.Column<byte>(type: "tinyint", nullable: true),
                    team = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    reportingManager = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    daysPresent = table.Column<byte>(type: "tinyint", nullable: true),
                    casualLeaveAvailable = table.Column<byte>(type: "tinyint", nullable: true),
                    casualLeaveTaken = table.Column<byte>(type: "tinyint", nullable: true),
                    sickLeaveAvailable = table.Column<byte>(type: "tinyint", nullable: true),
                    sickLeaveTaken = table.Column<byte>(type: "tinyint", nullable: true),
                    leaveApplicationId = table.Column<byte>(type: "tinyint", nullable: true),
                    leaveApplicationDate = table.Column<DateOnly>(type: "date", nullable: false),
                    leaveApplicationLeaveType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    leaveApplicationCount = table.Column<byte>(type: "tinyint", nullable: true),
                    leaveApplicationStatus = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    notesId = table.Column<byte>(type: "tinyint", nullable: true),
                    notesName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    notesDate = table.Column<DateOnly>(type: "date", nullable: false),
                    notesTime = table.Column<TimeOnly>(type: "time", nullable: false),
                    notesComment = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    probationProgress = table.Column<byte>(type: "tinyint", nullable: true),
                    salaryAccessible = table.Column<int>(type: "int", nullable: false),
                    salaryPayable = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_EmployeeDirectoryApi", x => x.id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "EmployeeDirectoryApi");
        }
    }
}
