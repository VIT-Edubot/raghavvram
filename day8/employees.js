// employees.js

let employees = [];
let editingEmployeeId = null;

document.addEventListener('DOMContentLoaded', () => {
    const employeeForm = document.getElementById('employee-form');
    const employeeList = document.getElementById('employee-list');

    employeeForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const position = document.getElementById('position').value;
        const department = document.getElementById('department').value;

        if (editingEmployeeId !== null) {
            // Edit existing employee
            const employee = employees.find(emp => emp.id === editingEmployeeId);
            employee.name = name;
            employee.position = position;
            employee.department = department;
            editingEmployeeId = null;
            employeeForm.querySelector('button').textContent = "Add Employee";
        } else {
            // Add new employee
            const newEmployee = {
                id: employees.length ? employees[employees.length - 1].id + 1 : 1,
                name,
                position,
                department
            };
            employees.push(newEmployee);
        }

        employeeForm.reset();
        displayEmployees();
    });

    function displayEmployees() {
        employeeList.innerHTML = '';
        employees.forEach(employee => {
            const employeeCard = document.createElement('div');
            employeeCard.className = 'employee-card';
            employeeCard.innerHTML = `
                <p>Name: ${employee.name}</p>
                <p>Position: ${employee.position}</p>
                <p>Department: ${employee.department}</p>
                <button onclick="editEmployee(${employee.id})">Edit</button>
                <button onclick="deleteEmployee(${employee.id})">Delete</button>
            `;
            employeeList.appendChild(employeeCard);
        });
    }

    displayEmployees();
});

function editEmployee(id) {
    const employee = employees.find(emp => emp.id === id);
    document.getElementById('name').value = employee.name;
    document.getElementById('position').value = employee.position;
    document.getElementById('department').value = employee.department;
    document.querySelector('button[type="submit"]').textContent = "Update Employee";
    editingEmployeeId = id;
}

function deleteEmployee(id) {
    employees = employees.filter(emp => emp.id !== id);
    displayEmployees();
}

function displayEmployees() {
    const employeeList = document.getElementById('employee-list');
    employeeList.innerHTML = '';
    employees.forEach(employee => {
        const employeeCard = document.createElement('div');
        employeeCard.className = 'employee-card';
        employeeCard.innerHTML = `
            <p>Name: ${employee.name}</p>
            <p>Position: ${employee.position}</p>
            <p>Department: ${employee.department}</p>
            <button onclick="editEmployee(${employee.id})">Edit</button>
            <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(employeeCard);
    });
}
