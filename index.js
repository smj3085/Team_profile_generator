const inquirer = require("inquirer");
const fs = require("fs");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const generateHTML = require("./src/generateHtml.js");

const employees = [];

// Manager input 
const newManager = () => {
    return inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter the team manager's name.", 
            validate: function (answer) {
                if (answer === '') {
                    return console.log("Enter a name.");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter the manager's Id.",
            validate: numberInput => {
                if  (isNaN(numberInput)) {
                    console.log ("Enter a numeric Id.")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Please enter the manager's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ('Please enter an email!')
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "officePhone",
            message: "Enter the manager's office phone number.",
            validate: numberInput => {
                if  (isNaN(numberInput)) {
                    console.log ("Enter a phone number")
                    return false; 
                } else {
                    return true;
                }
            }
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
            validate: function (answer) {
                if (answer === '') {
                    return console.log("Enter a name.");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "id",
            message: "Enter team member's id.",
            validate: numberInput => {
                if  (isNaN(numberInput)) {
                    console.log ("Enter a numeric id")
                    return false; 
                } else {
                    return true;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter team member's email.",
            validate: email => {
                valid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)
                if (valid) {
                    return true;
                } else {
                    console.log ("Enter an email")
                    return false; 
                }
            }
        },
        {
            type: "input",
            name: "github",
            message: "Enter team member's github username.",
            when: (input) => input.role === "Engineer",
            validate: function (answer) {
                if (answer === '') {
                    return console.log("Enter a username.");
                }
                return true;
            }
        },
        {
            type: "input",
            name: "school",
            message: "Enter intern's school",
            when: (input) => input.role === "Intern",
            validate: function (answer) {
                if (answer === '') {
                    return console.log("Enter a school.");
                }
                return true;
            }
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
            console.log("Check out your team profile in the output folder!")
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
