const employee = [
    {
        id: 1,
        name: "John Doe",
        photo: "./assets/profile-img/emp1.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Development",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "New York", // City
            country: "USA" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    },
    {
        id: 2,
        name: "John Doe",
        photo: "./assets/profile-img/emp2.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Development",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "London", // City
            country: "UK" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    },
    {
        id: 3,
        name: "John Doe",
        photo: "./assets/profile-img/emp3.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Development",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "Dammam", // City
            country: "KSA" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    },
    {
        id: 4,
        name: "John Doe",
        photo: "./assets/profile-img/emp4.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Development",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "Kerala", // City
            country: "India" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    },
    {
        id: 5,
        name: "John Doe",
        photo: "./assets/profile-img/emp5.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Development",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "Ranchi", // City
            country: "India" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    },
    {
        id: 6,
        name: "John Doe",
        photo: "./assets/profile-img/emp6.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Development",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "Burj Khalifa", // City
            country: "UAE" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    }
    ,{
        id: 7,
        name: "John Doe",
        photo: "./assets/profile-img/emp7.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Development",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "New York", // City
            country: "USA" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    },
    {
        id: 8,
        name: "John Doe",
        photo: "./assets/profile-img/emp8.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Development",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "New York", // City
            country: "USA" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    },
    {
        id: 9,
        name: "John Doe",
        photo: "./assets/profile-img/emp9.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Management",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "New York", // City
            country: "USA" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    },
    {
        id: 10,
        name: "John Doe",
        photo: "./assets/profile-img/emp10.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Development",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "New York", // City
            country: "USA" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    },
    {
        id: 11,
        name: "John Doe",
        photo: "./assets/profile-img/emp11.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Quality Assurance",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "New York", // City
            country: "USA" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    },
    {
        id: 12,
        name: "John Doe",
        photo: "./assets/profile-img/emp12.jpg", // Path to employee's photo
        designation: "Software Engineer",
        department: "Management",
        rating: 4.5,
        location: {
            address: "123 Main St, New York, NY", // Full address
            city: "New York", // City
            country: "USA" // Country
        },
        totalExperience: 5, // Total experience in years
        inHouseExperience: 3, // In-house experience in years
        team: "Backend Team",
        reportingManager: "Jane Smith",
        daysPresent: 230, // Number of days present
        leaveDetails: {
            casualLeave: {
                available: 10, // Total available casual leaves
                taken: 1 // Number of casual leaves taken
            },
            sickLeave: {
                available: 10, // Total available sick leaves
                taken: 2 // Number of sick leaves taken
            },
        },
        leaveApplications: [
            {
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "Needs to work on communication skills with the team."
            }
        ],
        probation: {
            progress: 70 // Percentage of probation period completed
        },
        salaryDetails: {
            accessible: 75000, // Amount accessible in INR
            payable: 80000 // Amount payable in INR
        }
    }
];

// Export the employee object for use in other files
export default employee;
