// Employee card array
const employeeCards = [];

// Card creation
const generateHtml = (employees) => {
  console.log("employees:", employees);

  const createManager = (manager) => {
    return `
                <div class="col s4">
                    <div class="card green lighten-3">
                        <div class="card content teal lighten-5 center-align">
                            <h2 class="padding-top card-title">${manager.getName()}</h2>
                            <h5 class='padding-bot'><span class="icon icons"><i class="fas fa-briefcase"></i></span>${manager.getRole()}</h5>
                        </div>
                        <div class="card-content">
                            <div class="card-content">
                                <span>ID:${manager.getId()}</span>
                            </div>
                            <div class="card-content">
                                <span>Email:<a class='black-text' href='mailto:${manager.getEmail()}'> ${manager.getEmail()}</a></span>
                            </div>
                            <div class="card-content">
                                <span>Office Number: ${
                                  manager.officeNumber
                                }</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
  };

  const createEngineer = (engineer) => {
    return `
                <div class="col s4">
                    <div class="card green lighten-3">
                        <div class="card content teal lighten-5 center-align">
                            <h2 class="padding-top card-title">${engineer.getName()}</h2>
                            <h5 class='padding-bot'><span class="icon icons"><i class="fas fa-laptop-code"></i></span>${engineer.getRole()}</h5>
                        </div>
                        <div class="card-content">
                            <div class="card-content">
                                <span>ID:${engineer.getId()}</span>
                            </div>
                            <div class="card-content">
                                <span>Email:<a class='black-text' href='mailto:${engineer.getEmail()}'> ${engineer.getEmail()}</a></span>
                            </div>
                            <div class="card-content">
                                <span>GitHub:<a href='https://github.com/${engineer.getGithub()}' target='_blank'> ${engineer.getGithub()}</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
  };

  const createIntern = (intern) => {
    return `
                <div class="col s4">
                    <div class="card green lighten-3">
                        <div class="card content teal lighten-5 center-align">
                            <h2 class="padding-top card-title">${intern.getName()}</h2>
                            <h5 class='padding-bot'><span class="icon icons"><i class="fas fa-book"></i></span>${intern.getRole()}</h5>
                        </div>
                        <div class="card-content">
                            <div class="card-content">
                                <span>ID:${intern.getId()}</span>
                            </div>
                            <div class="card-content">
                                <span>Email:<a class='black-text' href='mailto:${intern.getEmail()}'> ${intern.getEmail()}</a></span>
                            </div>
                            <div class="card-content">
                                <span>School: ${intern.getSchool()}</span>
                            </div>
                        </div>
                    </div>
                </div>
            `;
  };

  const team = [];
  team.push(
    employees
      .filter((employee) => employee.getRole() === "Manager")
      .map((manager) => createManager(manager))
      .join("")
  );
  team.push(
    employees
      .filter((employee) => employee.getRole() === "Engineer")
      .map((engineer) => createEngineer(engineer))
      .join("")
  );
  team.push(
    employees
      .filter((employee) => employee.getRole() === "Intern")
      .map((intern) => createIntern(intern))
      .join("")
  );

  return team.join("");
};

module.exports = (employeeHtml) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" integrity="sha512-UJfAaOlIRtdR+0P6C3KUoTDAxVTuy3lnSXLyLKlHYJlcSU8Juge/mjeaxDNMlw9LgeIotgz5FP8eUQPhX1q10A==" crossorigin="anonymous" />        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.1/css/all.min.css" integrity="sha512-+4zCK9k+qNFUR5X+cKL9EIR+ZOhtIloNl9GIKS57V1MyNsYpYcUrUeQc9vNfzsWfV28IaLL3i96P9sdNyeRssA==" crossorigin="anonymous" />
        <link rel="stylesheet" href="./assets/css/style.css">
    </head>
    <body>
        <header class='green lighten-1'>
            <div class='green lighten-1'>
                <h1 class='center-align'>My Team</h1>
            </div>
        </header>
        <main>
            <section class='row'>
                ${generateHtml(employeeHtml)}
            </section>
        </main>
    </body>
    </html>
    `;
};
