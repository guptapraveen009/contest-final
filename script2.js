let employees = [];
    let nextId = 1;

    function addEmployee() {
      const name = document.getElementById('name').value.trim();
      const profession = document.getElementById('profession').value.trim();
      const age = document.getElementById('age').value.trim();
      const message = document.getElementById('message');


      message.textContent = '';


      if (!name || !profession || !age) {
        message.textContent = 'All fields are required!';
        message.className = 'error';
        return;
      }

  
      const employee = {
        id: nextId++,
        name,
        profession,
        age: parseInt(age)
      };

      employees.push(employee);

    
      message.textContent = 'Employee added successfully!';
      message.className = 'success';


      document.getElementById('employeeForm').reset();

 
      renderEmployees();
    }

    function deleteEmployee(id) {
  
      employees = employees.filter(emp => emp.id !== id);

      
      renderEmployees();
    }

    function renderEmployees() {
      const employeeList = document.getElementById('employeeList');
      employeeList.innerHTML = '';

      employees.forEach(employee => {
        const employeeDiv = document.createElement('div');
        employeeDiv.className = 'employee';
        employeeDiv.innerHTML = `
          <strong>ID:</strong> ${employee.id}, 
          <strong>Name:</strong> ${employee.name}, 
          <strong>Profession:</strong> ${employee.profession}, 
          <strong>Age:</strong> ${employee.age}
          <button onclick="deleteEmployee(${employee.id})">Delete</button>
        `;
        employeeList.appendChild(employeeDiv);
      });
    }
 

 
  