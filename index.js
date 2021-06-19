const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");
const generateHtml = require("./src/generateHtml");

const employees = [];

// Input required
addTeamMember();

function addTeamMember() {
    console.log("Building your team profile")

    inquirer.prompt ([
        {
            type: "input",
            name: "name",
            message: "Enter team member's name",
        },
        {
            type: "list",
            name: "role",
            message: "What is the team member's role?",
            choices: ["Engineer", "Intern", "Manager"],
        },
        {
            type: "input",
            name: "id",
            message: "Enter team member's id",

        },
        {
            type: "input",
            name: "email",
            message: "Enter team member's email",
        }
    ])
    .then(function({name, role, id, email}) {
        const addInfo = "";
        if(role === "Engineer") {
            addInfo = "GitHub username";
        } else if(role === "Manager") {
            addInfo = "Office Number";
        } else {
            addInfo = "School";
        }
        inquirer.prompt([
            {
                type: "input",
                name: "addInfo",
                message: `Enter team member's ${addInfo}`,
            },
            {
                type: "list",
                name: "addMoreMembers",
                message: "Would you like to add more team members?",
                choices: ["Yes", "No"],
            }
        ])
        .then(function({addInfo, addMoreMembers}) {
            const newMember;
            if (role === "Engineer") {
                newMember = new Engineer(name, id, email, addInfo);
            } else if(role === "Manager") {
                newMember = new Manager(name, id, email, addInfo);
            } else {
                newMember = new Intern(name, id, email, addInfo); 
            }
            employees.push(newMember);
            generateHtml(newMember)
            .then(function() {
                if(addMoreMembers === "Yes") {
                    addTeamMember();
                } else {
                    generateHtml();
                    // const html = render(employees);
                    // fs.writeFile("./dist/team.html", html, function(err) {
                    //     if
                    // })                    
                }
            });
        });
    });
}

// Function to start app
function init() {
    generateHtml();
    addTeamMember();
};

init();