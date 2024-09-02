
//import Data from './employeeListData.js'; // Import sample data
//import FullData from './fullData.js';

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('clearAllFilters').addEventListener('click', clearFilters);

    getEmployees();

    document.getElementById('search').addEventListener('input', filterEmployees);
    document.getElementById('location-filter').addEventListener('change', filterEmployees);
    document.getElementById('department-filter').addEventListener('change', filterEmployees);
    document.getElementById('employeeModalClose').addEventListener('click', closeModal);
    document.getElementById('addNewNote').addEventListener('click', addNewNote);
;});


let employees = [];

async function getEmployees() {
    try {
        const response = await fetch('https://localhost:7203/api/Employee', {
            method: 'GET', // Method type
            headers: {
                'Content-Type': 'application/json', // Specify the content type
            },
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        // Parse the JSON response and assign it to the employees array
        employees = await response.json();
        populateFilters();
        displayEmployees(employees);
        
        console.log('Employees:', employees); // You can log the employees array to verify

    } catch (error) {
        console.error('Error fetching data:', error); // Handle any errors
    }
}


function displayEmployees(employeeList) {
    const grid = document.getElementById('employeeGrid');
    grid.innerHTML = ''; // Clear the grid

    employeeList.forEach(employee => {
        const card = document.createElement('div');
        card.className = 'employee-card';
        
        // Construct card HTML with an additional wrapper div around the image
        card.innerHTML = `
            <div class="photo-wrapper">
                <img src="${employee.photo}" alt="${employee.name}" class="employee-photo">
            </div>
            <div class="employee-info">
                <h1>${employee.name}</h1>
                <p>${employee.designation}</p>
                <p>${employee.department}</p>
            </div>
        `;
        card.onclick = () => openEmployeeModal(employee);
        grid.appendChild(card);
    });
}

function openEmployeeModal(employee) {
    // Update the employee photo
    const photoElement = document.getElementById('employeePhoto');
    photoElement.src = employee.photo; // Assuming `employee.photo` is the URL to the photo

    // Update employee basic information
    document.getElementById('employeeName').textContent = employee.name;
    document.getElementById('employeeDesignation').textContent = employee.designation;
    document.getElementById('employeeLocation').textContent = employee.location;
    document.getElementById('totalExperience').textContent = employee.city; // Adjusted
    document.getElementById('inHouseExperience').textContent = employee.country; // Adjusted
    document.getElementById('employeeDepartment').textContent = employee.department;
    document.getElementById('reportingManager').textContent = employee.reportingManager;

    // Update rating
    const ratingElement = document.getElementById('employeeStarRating');
    ratingElement.innerHTML = ''; // Clear any existing stars
    for (let i = 0; i < 5; i++) {
        const star = document.createElement('span');
        star.className = 'star';
        if (i < employee.rating) {
            star.classList.add('filled');
        }
        star.textContent = '★';
        ratingElement.appendChild(star);
    }
    document.getElementById('employeeRatingNumber').textContent = employee.rating;

    const colors = ['#FFEBEE', '#E8F5E9', '#E3F2FD', '#FFF3E0', '#F3E5F5']; // Array of colors for notes

    // Update Days Present
    document.getElementById('employeeDaysPresent').textContent = employee.daysPresent;

    // Read leave details from employee object
    const casualLeaveAvailable = employee.leaveDetails.casualLeave.available;
    const casualLeaveTaken = employee.leaveDetails.casualLeave.taken;
    const sickLeaveAvailable = employee.leaveDetails.sickLeave.available;
    const sickLeaveTaken = employee.leaveDetails.sickLeave.taken;

    // Update Casual Leave Progress Bars
    document.getElementById('casualLeaveAvailableProgressBar').style.width = (casualLeaveAvailable * 10) + '%';
    document.getElementById('casualLeaveTakenProgressBar').style.width = (casualLeaveTaken * 10) + '%';
    document.getElementById('casualLeaveInfo').textContent = `Available: ${casualLeaveAvailable}, Taken: ${casualLeaveTaken}`;
    document.getElementById('casualLeaveAvailableCount').textContent = `${casualLeaveAvailable}`;
    document.getElementById('casualLeaveTakenCount').textContent = `${casualLeaveTaken}`;

    // Update Sick Leave Progress Bars
    document.getElementById('sickLeaveAvailableProgressBar').style.width = (sickLeaveAvailable * 10) + '%';
    document.getElementById('sickLeaveTakenProgressBar').style.width = (sickLeaveTaken * 10) + '%';
    document.getElementById('sickLeaveInfo').textContent = `Available: ${sickLeaveAvailable}, Taken: ${sickLeaveTaken}`;
    document.getElementById('sickLeaveAvailableCount').textContent = `${sickLeaveAvailable}`;
    document.getElementById('sickLeaveTakenCount').textContent = `${sickLeaveTaken}`;

    // notes section
    const notesList = document.getElementById('notesList');
    notesList.innerHTML = ''; // Clear any existing notes

    employee.notes.forEach((note, index) => {
        const noteItem = document.createElement('div');
        noteItem.style.backgroundColor = colors[index % colors.length]; // Cycle through colors
        noteItem.className = 'note-item';
        noteItem.innerHTML = `
            <strong>${note.name}</strong> - ${note.date} | ${note.time}
            <p>${note.comment}</p>
        `;
        notesList.appendChild(noteItem);
    });

    // Update leave applications table
    const leaveApplicationsTableBody = document.getElementById('leaveApplicationsTableBody');
    leaveApplicationsTableBody.innerHTML = ''; // Clear any existing rows
    employee.leaveApplications.forEach(app => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${app.date}</td>
            <td>${app.leaveType}</td>
            <td>${app.count}</td>
            <td>${app.status}</td>
        `;
        leaveApplicationsTableBody.appendChild(row);
    });

    // Update probation details
    document.getElementById('probationProgressBar').style.width = employee.probationPercentage + '%';
    document.getElementById('probationPercentage').textContent = employee.probationPercentage + '%';

    // Update salary details
    document.getElementById('salaryAccessible').textContent = employee.salaryAccessible;
    document.getElementById('salaryPayable').textContent = employee.salaryPayable;

    // Display the modal
    const modal = document.getElementById('employeeModal');
    modal.style.display = 'block';
}

function addNewNote() {
    const currentDate = new Date();
    const date = currentDate.toLocaleDateString();
    const time = currentDate.toLocaleTimeString();

    // Example of getting the note details from user input (can be replaced with actual input fields)
    const newNote = {
        name: "New User", // Replace with actual user's name
        date: date,
        time: time,
        comment: "This is a new note." // Replace with actual comment input
    };

    const colors = ['#FFEBEE', '#E8F5E9', '#E3F2FD', '#FFF3E0', '#F3E5F5']; // Array of colors for notes

    // Append the new note to the employee's notes (adjust according to your data handling)
    const noteItem = document.createElement('div');
    noteItem.style.backgroundColor = colors[index % colors.length]; // Cycle through colors
    noteItem.className = 'note-item';
    noteItem.innerHTML = `
        <strong>${newNote.name}</strong> - ${newNote.date} at ${newNote.time}
        <p>${newNote.comment}</p>
    `;

    document.getElementById('notesList').appendChild(noteItem);
}
  
function closeModal() {
    document.getElementById('employeeModal').style.display = 'none';
}
  

function filterEmployees() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const locationValue = document.getElementById('location-filter').value.toLowerCase();
    const departmentValue = document.getElementById('department-filter').value.toLowerCase();

    const filtered = employees.filter(employee => {
        const matchesSearch = employee.name.toLowerCase().includes(searchValue) || 
                              employee.id.toString().toLowerCase().includes(searchValue) || 
                              employee.designation.toLowerCase().includes(searchValue);

        // Check if the employee's city or country matches the selected location
        const matchesLocation = !locationValue || 
                                (employee.location && (employee.location.city.toLowerCase() === locationValue || 
                                employee.location.country.toLowerCase() === locationValue));

        const matchesDepartment = !departmentValue || employee.department.toLowerCase() === departmentValue.toLowerCase();
        
        return matchesSearch && matchesLocation && matchesDepartment;
    });

    displayEmployees(filtered);
}

function clearFilters() {
    document.getElementById('search').value = '';
    document.getElementById('location-filter').value = '';
    document.getElementById('department-filter').value = '';
    displayEmployees(employees);
}

function populateFilters() {
    const locationFilter = document.getElementById('location-filter');
    const departmentFilter = document.getElementById('department-filter');

    //const locations = [...new Set(employees.map(emp => emp.location))];
    const departments = [...new Set(employees.map(emp => emp.department))];

    // Use a Set to store unique cities and countries
    const uniqueLocations = new Set();

    employees.forEach(employee => {
        if (employee.location) {
            uniqueLocations.add(employee.location.city);
            uniqueLocations.add(employee.location.country);
        }
    });

    // Clear existing options
    locationFilter.innerHTML = '';

    // Add a default option
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.text = 'All Locations';
    locationFilter.appendChild(defaultOption);

    // Populate the dropdown with unique cities and countries
    uniqueLocations.forEach(location => {
        if (location) {  // Only add if location is not null or undefined
            const option = document.createElement('option');
            option.value = location.toLowerCase(); // Store in lowercase for consistency
            option.text = location;
            locationFilter.appendChild(option);
        }
    });
    
    // Populate the dropdown with Department names
    departments.forEach(department => {
        const option = document.createElement('option');
        option.value = department;
        option.textContent = department;
        departmentFilter.appendChild(option);
    });
}
