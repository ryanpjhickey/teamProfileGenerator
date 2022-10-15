const inquirer = require("inquirer")
const path = require("path")
const fs = require("fs")

const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")

const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html")

const render = require("./src/pageTemplate.js")

const teamMember = [];
const idArray = [];

function applicationMenu() {
    function createManager() {
        console.log("Please build your team!")
        inquirer.prompt([
            {
                type: "input",
                name: "managerName",
                message: "What is the manager's name?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter a name";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's id?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter an id";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's email?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter an email";
                }
            },
            {
                type: "input",
                name: "managerId",
                message: "What is the manager's office number?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter an office number";
                }
            },
        ]).then(answers => {
            const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
            teamMembers.push(manager);
            idArray.push(answers.managerId);
            createTeam();
        })
    }

    function createTeam() {
        inquirer.prompt([
            {
                type: "list",
                name: "memberChoice",
                message: "What is your new team member's role?",
                choices: [
                    "Engineer",
                    "Intern",
                    "I don't want to add any more team members"
                ]
            },
        ]).then(userChoice => {
            switch (userChoice.memberChoice) {
                case "Engineer":
                    addEngineer();
                    break
                case "Intern":
                    addIntern();
                default:
                    buildTeam();
            }
        })
    }
    function addEngineer() {
        inquirer.prompt([
            {
                type: "input",
                name: "engineerName",
                message: "What is the engineer's name?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter a name";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's id?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter an id";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's email?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter an email";
                }
            },
            {
                type: "input",
                name: "engineerId",
                message: "What is the engineer's Github username?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter a Github username";
                }
            },
        ]).then(answers => {
            const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
            teamMembers.push(engineer);
            idArray.push(answers.engineerId);
            createTeam();
        })
    }
    function addIntern() {
        inquirer.prompt([
            {
                type: "input",
                name: "internName",
                message: "What is the intern's name?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter a name";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's id?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter an id";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is the intern's email?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter an email";
                }
            },
            {
                type: "input",
                name: "internId",
                message: "What is the name of the intern's school?",
                validate: answer => {
                    if (answer !== '') {
                        return true;
                    }
                    return "Please enter a school";
                }
            },
        ]).then(answers => {
            const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
            teamMembers.push(intern);
            idArray.push(answers.internId);
            createTeam();
        })
    }

    function buildTeam() {
        if (!fs.existsSync(OUTPUT_DIR)) {
            fs.mkdirSync(OUTPUT_DIR)
        }
        fs.writeFileSync(outputPath, render(teamMembers), "utf-8");
    }

    createManager();
}

applicationMenu();