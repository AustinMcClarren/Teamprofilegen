       //add employee function
      function addEmployee() {
        inquirer.prompt ([
          
          {
            type: "input",
            name: "name",
            message: "What is the employees name?"
          },
      
          {
            type: "input",
            name: "id",
            message: "What is the  employees ID number?"
          },
      
          {
            type: "input",
            name: "email",
            message: "What is the employees email address?"
          },
      
          {
            type: "input",
            name: "officeNumber",
            message: "What is the employees office number?"
          }
      
        ]).then(employee => {
          const employeeInfo = new Employee(employee.name , employee.id, employee.email, employee.officeNumber);
          teamArray.push(employee);
        });
        
    }
    addEmployee();
    
    
    module.exports = addEmployee;

    //make a switch case to enter me into a fucntion for the prompt?
    //where do i add it ?