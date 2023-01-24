// page creation
const generateHTML = require('./src/generateHTML');

// team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern'); 

// node modules 
const fs = require('fs'); 
const inquirer = require('inquirer');


teamArray = [];

//a function to create the question prompt
    function theTeam () 
      inquirer.prompt([{
        type: "list",
        message: "What type of employee would you like to add to your team?",
        name: "addEmployee",
        choices: ["Manager", "Engineer", "Intern", "No more members."]
      }]).then(function (userInput) {
        switch(userInput.addEmployee) {
          case "Manager":
            addManager();
            break;
          case "Engineer":
            addEngineer();
            break;
          case "Intern":
            addIntern();
            break;
  
          default:
            htmlbuild();
        }
      })

      //function that will add the manager and questions about the manager.
      function addManager() {
        inquirer.prompt ([
          
          {
            type: "input",
            name: "managerName",
            message: "What is the manager's name?"
          },
      
          {
            type: "input",
            name: "managerId",
            message: "What is the manager's employee ID number?"
          },
      
          {
            type: "input",
            name: "managerEmail",
            message: "What is the manager's email address?"
          },
      
          {
            type: "input",
            name: "managerOfficeNumber",
            message: "What is the manager's office number?"
          }
      
        ]).then(answers => {
          const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
          teamArray.push(manager);
          theTeam();
        });
      
      }
    







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