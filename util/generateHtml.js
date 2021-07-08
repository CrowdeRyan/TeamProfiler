// Employee cards array
const employeeCards = [];

// Employee card creation
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
};
