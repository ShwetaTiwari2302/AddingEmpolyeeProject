let employees = [];
let employeeId = 1;

function addEmployee() {
  const name = document.getElementById("name").value.trim();
  const profession = document.getElementById("profession").value.trim();
  const age = document.getElementById("age").value.trim();
  const message = document.getElementById("message");

  // Validation for empty fields
  if (!name || !profession || !age) {
    message.textContent = "All fields are required!";
    message.className = "message error";
    return;
  }

  // Add employee to array
  const newEmployee = {
    id: employeeId++,
    name: name,
    profession: profession,
    age: parseInt(age)
  };
  employees.push(newEmployee);

  // Display success message
  message.textContent = "Employee added successfully!";
  message.className = "message success";

  // Reset input fields
  document.getElementById("name").value = "";
  document.getElementById("profession").value = "";
  document.getElementById("age").value = "";

  renderEmployees();
}

function renderEmployees() {
  const employeeList = document.getElementById("employee-list");
  employeeList.innerHTML = "";

  employees.forEach(employee => {
    const employeeDiv = document.createElement("div");
    employeeDiv.className = "employee";
    employeeDiv.innerHTML = `
      <span>${employee.name} - ${employee.profession} - ${employee.age} years</span>
      <button onclick="deleteEmployee(${employee.id})">Delete</button>
    `;
    employeeList.appendChild(employeeDiv);
  });
}

function deleteEmployee(id) {
  employees = employees.filter(employee => employee.id !== id);
  renderEmployees();
}
