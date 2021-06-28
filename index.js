const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const util = require('util');

const generateHTML = require("./src/generateHtml.js");

const employees = [];

// Manager input 
const newManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter the team manager's name.",
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's Id.",
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email.",
        },
        {
            type: "input",
            name: "officePhone",
            message: "Enter the manager's office phone number.",
        }
    ])
    .then(answers => {
        const manager = new Manager (answers.name, answers.id, answers.email, answers.officePhone);
        employees.push(manager);
        console.log(manager);
    })
};

// Add employees 
const addTeamMember = () => {
    console.log("Building your team profile");

    return inquirer.prompt ([
        {
            type: "list", 
            name: "role", 
            message: "Choose the team member's role.",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input", 
            name: "name",
            message: "Enter team member's name.",
        },
        {
            type: "input",
            name: "id",
            message: "Enter team member's id.",
        },
        {
            type: "input",
            name: "email",
            message: "Enter team member's email.",
        },
        {
            type: "input",
            name: "github",
            message: "Enter employee's github username.",
            when: (input) => input.role === "Engineer",
        },
        {
            type: "input",
            name: "school",
            message: "Enter intern's school",
            when: (input) => input.role === "Intern",
        },
        {
            type: "list",
            name: "addMoreMembers",
            message: "Would you like to add more team members?",
            choices: ["Yes", "No"],
        }
    ])
    .then(teamData => {
        let {name, role, id, email, github, school, addMoreMembers} = teamData;
        let teamMember; 

        if (role === "Engineer") {
            teamMember = new Engineer(name, id, email, github);
            console.log(teamMember);
        } else if (role === "Intern") {
            teamMember = new Intern(name, id, email, school);
            console.log(teamMember);
        }

        employees.push(teamMember);

        if (addMoreMembers === "Yes") {
            return addTeamMember(employees);
        } else {
            return employees;
        }
    })
};


const writeFile = data => {
    fs.writeFile('./output/index.html', data, err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Your team profile has been successfully created! Please check out the index.html")
        }
    })
}; 

newManager()
  .then(addTeamMember)
  .then(employees => {
    return generateHTML(employees);
  })
  .then(pageHTML => {
    return writeFile(pageHTML);
  })
  .catch(err => {
 console.log(err);
});
