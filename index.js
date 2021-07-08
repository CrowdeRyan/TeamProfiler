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

// Engineer questions function
const addEngineer = () => {
  return inquirer.prompt(questions.engineer).then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.id,
      answers.email,
      answers.github
    );
    employees.push(engineer);
    addEmployee();
  });
};

// Intern questions function
const addIntern = () => {
  return inquirer.prompt(questions.intern).then((answers) => {
    const intern = new Intern(
      answers.name,
      answers.id,
      answers.email,
      answers.schoolName
    );
    employees.push(intern);
    addEmployee();
  });
};

// Profile Function
const makeProfile = (fileName) => {
  fileName = fs.writeFile(
    "./dist/index.html",
    generateHtml(employees),
    (err) => {
      if (err) {
        console.log("Error: " + err);
      } else {
        console.log("\n Team Profile created and added: /dist/index.html!");
      }
    }
  );
};

// Add to Team Function

const addEmployee = () => {
  return inquirer
    .prompt({
      type: "list",
      name: "newEmployee",
      message: "Do you want to add another Employee?",
      choices: ["Engineer", "Intern", "Complete Team Profile"],
    })
    .then((answers) => {
      switch (answers.newEmployee) {
        case "Engineer":
          addEngineer();
          break;
        case "Intern":
          addIntern();
          break;
        case "Complete Team Profile":
          makeProfile();
          break;
      }
    });
};
