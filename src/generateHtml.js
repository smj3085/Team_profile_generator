
// generate html page 
const generateTeamPage = function (mapEmployeeCards) {   
    return`
    <!DOCTYPE html>
<html>

<head>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">  
    <title>Team Profile Generator</title> 
</head>

<body>
    <div class="jumbotron text-white" style="background-color: #1d1152;">
        <h1 class="text-center">Team Profile Generator</h1>
    </div>

    <div class="container justify-content-center">
        <div class="card-deck">
            <div class="row justify-content-center">
                    <!--Team Cards-->
                    ${mapEmployeeCards}
            </div>
        </div>
    </div>
        
    </body>
    
    </html>
  `;
  }

// create Manager card
const generateManager = function (manager) {
    return `
    <div class="row justify-content-center">
        <div class="col-sm-6 col-md-6 col-lg-4 mb-3">
        <div class="card">
        <div class="card-header text-white" style="background-color: palevioletred;">
            <h3><i class="fas fa-crown"></i> Manager<h3>
        </div>
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Phone number: ${manager.officePhone}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        </div>
        </div>
    </div>
    `;
}

// create Engineer card
const generateEngineer = function (engineer) {
    return `
    <div class="col-sm-6 col-md-6 col-lg-4 mb-3">
          <div class="card">
            <div class="card-header text-white" style="background-color: #1a86c9;">
              <h3><i class="fas fa-glasses"></i> Engineer<h3>
            </div>
            <div class="card-body">
              <h5 class="card-title">${engineer.name}</h5>
              <p class="card-text">ID: ${engineer.id}</p>
              <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
              <p class="card-text">GitHub: <a target="_blank" href="https://github.com/${engineer.github}">${engineer.github}</a></p>
            </div>
          </div>
    </div>
    `
}

// create Intern card 
const generateIntern = function (intern) {
    return `
    <div class="col-sm-6 col-md-6 col-lg-4 mb-3">
          <div class="card">
            <div class="card-header text-white" style="background-color: #1a991c;">
              <h3><i class="fas fa-user-graduate"></i> Intern<h3>
            </div>
            <div class="card-body">
              <h5 class="card-title">${intern.name}</h5>
              <p class="card-text">ID: ${intern.id}</p>
              <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
              <p class="card-text">School: ${intern.school}</p>
            </div>
          </div>
    </div>
    `
};

generateHTML = (data) => {

    teamArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 


        // call manager function
        if (role === 'Manager') {
            const mapManagerCard = generateManager(employee);

            teamArray.push(mapManagerCard);
        }

        // call engineer function
        if (role === 'Engineer') {
            const mapEngineerCard = generateEngineer(employee);

            teamArray.push(mapEngineerCard);
        }

        // call intern function 
        if (role === 'Intern') {
            const mapInternCard = generateIntern(employee);

            teamArray.push(mapInternCard);
        }
        
    }

    // joining strings 
    const mapEmployeeCards = teamArray.join('')

    // return to generated page
    const generateTeam = generateTeamPage(mapEmployeeCards); 
    return generateTeam;

}


// export to index
module.exports = generateHTML; 