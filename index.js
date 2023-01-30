// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');


// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// page creation
const generateHTML = require('./src/generateHTML');
const teamArray = [];

     




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
        });
        addManager();
        
      }



      function addEngineer() {
        inquirer.prompt ([
          
          {
            type: "input",
            name: "name",
            message: "What is the Engineers name?"
          },
      
          {
            type: "input",
            name: "id",
            message: "What is your employee ID number?"
          },
      
          {
            type: "input",
            name: "email",
            message: "What is the engineers email address?"
          },
      
          {
            type: "input",
            name: "github",
            message: "What is your github username?",
          },
          {
            type:"list",
            name:"addEmployee",
            message: "select an employee you would like to add!",
            choices:['Intern','Engineer', 'Manager','No more employees!']
          }
      
        ]).then(engineer => {
          const engineerInfo = new Engineer(engineer.name , engineer.id, engineer.email, engineer.github);
          teamArray.push(engineer);
        });
        addEngineer();
      }

      function addIntern() {
        inquirer.prompt ([
          
          {
            type: "input",
            name: "name",
            message: "What is the Interns name?"
          },
      
          {
            type: "input",
            name: "id",
            message: "What is your employee ID number?"
          },
      
          {
            type: "input",
            name: "email",
            message: "What is the interns email address?"
          },
      
          {
            type: "input",
            name: "school",
            message: "What school are you attending?",
          },
          {
            type:"list",
            name:"addEmployee",
            message: "select an employee you would like to add!",
            choices:['Intern','Engineer', 'Manager','No more employees!']
          }
      
        ]).then(intern => {
          const InternInfo = new Intern(intern.name , intern.id, intern.email, intern.school);
          teamArray.push(intern);
        });
        addIntern();
      }


























      






      //con statement
// if choices equal?



// const init function to generate the page?


      
      
    







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