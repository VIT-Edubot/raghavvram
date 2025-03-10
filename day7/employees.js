// employees.js

// Define array of employee objects
const employees = [
    { id: 1, name: "Alice Johnson", position: "Developer", department: "Engineering", isActive: true },
    { id: 2, name: "Bob Smith", position: "Manager", department: "Sales", isActive: false },
    { id: 3, name: "Carol White", position: "Designer", department: "Marketing", isActive: true },
    { id: 4, name: "David Brown", position: "Analyst", department: "Finance", isActive: false }
];

// Function to display employees
function displayEmployees(employeeArray) {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = ''; // Clear the list before re-displaying
    employeeArray.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
            <p>Name: ${employee.name}</p>
            <p>Position: ${employee.position}</p>
            <p>Department: ${employee.department}</p>
            <p>Status: <span class="${employee.isActive ? 'active' : 'inactive'}">${employee.isActive ? 'Active' : 'Inactive'}</span></p>
            <button onclick="toggleStatus(${employee.id})">Toggle Status</button>
        `;
        employeeList.appendChild(employeeDiv);
    });
}

// Function to toggle employee status
function toggleStatus(id) {
    const employee = employees.find(emp => emp.id === id);
    employee.isActive = !employee.isActive;
    displayEmployees(employees);
}

// Display all employees initially
displayEmployees(employees);

// Filter and display only active employees
const activeEmployees = employees.filter(employee => employee.isActive);
displayEmployees(activeEmployees);

// Sort employees by name in alphabetical order and display
const sortedEmployees = employees.sort((a, b) => a.name.localeCompare(b.name));
displayEmployees(sortedEmployees);

// Create an array of employee names and display it in the console
const employeeNames = employees.map(employee => employee.name);
console.log(employeeNames);
