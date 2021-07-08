const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHtml = require("./utils/generateHtml");

const employees = [];

const questions = {
  // MANAGER QUESTIONS

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
};
