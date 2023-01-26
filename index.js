// page creation
const generateHTML = require('./src/generateHTML');


// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 
const Employee = require('./lib/Employee');


// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');
const addEmployee = require('./lib/Employee');
const {writeFile} = require('fs').promises


      // manager function
      function addManager() {
        inquirer.prompt ([
          
          {
            type: "input",
            name: "name",
            message: "What is the managers name?"
          },
      
          {
            type: "input",
            name: "id",
            message: "What is the  managers ID number?"
          },
      
          {
            type: "input",
            name: "email",
            message: "What is the managers email address?"
          },
      
          {
            type: "input",
            name: "officeNumber",
            message: "What is the managers office number?",
          },
          {
            type:"list",
            name:"addEmployee",
            message: "select an employee you would like to add!",
            choices:['Intern','Engineer', 'Manager','No more employees!']
          }
      
        ]).then(manager => {
          const managerInfo = new Manager(manager.name , manager.id, manager.email, manager.officeNumber);
          teamArray.push(manager);
          addManager();
        });
      
      }






// const init function to generate the page


      
      
    







// GIVEN a command-line application that accepts user input

// WHEN I am prompted for my team members and their information

// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML

// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username

// THEN that GitHub profile opens in a new tab

// WHEN I start the application

// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number

// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option

// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option

// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team

// THEN I exit the application, and the HTML is generated