const employee = [
    {
        id: 1,
        name: "Johny Doe",
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
                id:"1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id:"2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                id: "2",
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
        name: "John Danny",
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
                id: "1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id: "2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                id: "2",
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
        name: "Mariya Doe",
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
                id: "1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id: "2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                id: "2",
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
        name: "John Martin",
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
                id: "1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id: "2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                id: "2",
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
        name: "Mary Doe",
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
                id: "1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id: "2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                id: "2",
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
        name: "Joe Sam",
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
                id: "1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id: "2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                id: "2",
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
        name: "Mohan Dony",
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
                id: "1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id: "2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                id: "2",
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
        name: "Sijo Doe",
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
                id: "1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id: "2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            },
            {
                id: "3",
                date: "2024-09-05",
                leaveType: "Sick Leave",
                count: 1,
                status: "Approved"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                id: "2",
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
        name: "Das Doe",
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
                id: "1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id: "2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            },
            {
                id: "3",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "comment 1."
            },
            {
                id: "2",
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "comment 2."
            },
            {
                id: "3",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "comment 3"
            },
            {
                id: "4",
                name: "Eva Green",
                date: "2024-08-20",
                time: "02:30 PM",
                comment: "comment 4"
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
        name: "John Marykutty",
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
                id: "1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id: "2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                id: "2",
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
        name: "Dilshad Doe",
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
                id: "1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id: "2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                id: "2",
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
        name: "Seban Doe",
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
                id: "1",
                date: "2024-09-05",
                leaveType: "Casual Leave",
                count: 1,
                status: "Approved"
            },
            {
                id: "2",
                date: "2024-09-10",
                leaveType: "Sick Leave",
                count: 2,
                status: "Pending"
            }
        ],
        notes: [
            {
                id: "1",
                name: "Jane Smith",
                date: "2024-08-15",
                time: "10:00 AM",
                comment: "John has shown great improvement in recent projects."
            },
            {
                id: "2",
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
