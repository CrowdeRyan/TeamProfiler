const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./utils/generateHtml");

const employees = [];

const questions = {
  // Manager Prompts
  manager: [
    {
      type: "input",
      name: "name",
      message: "What is the name of the team manager? \n",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter a name.");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "id",
      message: "What is the employee's ID number? \n",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("You must enter a 4-digit ID number.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address? \n",
      validate: (emailInput) => {
        if (emailInput.includes("@") && emailInput.includes(".com")) {
          return true;
        } else {
          console.log("\n You must enter a valid email address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "officeNumber",
      message: "\n What is the Manager's office number?",
      validate: function (value) {
        let valid = !isNaN(parseFloat(value));
        return valid || "Please enter an office number.";
      },
      filter: Number,
    },
  ],

  // Engineer Prompts
  engineer: [
    {
      type: "input",
      name: "name",
      message: "What is the name of the employee? \n",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter a name.");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "id",
      message: "What is the employee's ID number? \n",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("You must enter a 4-digit ID number.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address? \n",
      validate: (emailInput) => {
        if (emailInput.includes("@") && emailInput.includes(".com")) {
          return true;
        } else {
          console.log("\n You must enter a valid email address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "github",
      message: "\n What is the Engineer's GitHub username?",
      validate: function (value) {
        if (value) {
          return true;
        } else {
          console.log("Please provide the GitHub username for this employee.");
        }
      },
    },
  ],
  // Intern Prompts

  intern: [
    {
      type: "input",
      name: "name",
      message: "What is the name of the employee? \n",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("You must enter a name.");
          return false;
        }
      },
    },
    {
      type: "number",
      name: "id",
      message: "What is the employee's ID number? \n",
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log("You must enter a 4-digit ID number.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "email",
      message: "What is the employee's email address? \n",
      validate: (emailInput) => {
        if (emailInput.includes("@") && emailInput.includes(".com")) {
          return true;
        } else {
          console.log("\n You must enter a valid email address.");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "schoolName",
      message: "\n What is the name of the Intern's school?",
      validate: function (value) {
        if (value) {
          return true;
        } else {
          console.log("Please provide the name of this employee's school.");
        }
      },
    },
  ],
};

// Manager questions function
const addManager = () => {
  return inquirer.prompt(questions.manager).then((answers) => {
    const manager = new Manager(
      answers.name,
      answers.id,
      answers.email,
      answers.officeNumber
    );
    employees.push(manager);
    addEmployee();
  });
};
