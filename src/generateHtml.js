
function mainHtml() {
    return `
<!DOCTYPE html>
<html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/>
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin&display=swap" rel="stylesheet">
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,400;1,700&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./assets/css/style.css"/>
      
      <title>My Team</title>
    </head>

    <body>
        <header class="jumbotron jumbotron-fluid">
            <h1 class="display-5 font-weight-bold">My Team</h1>
        </header>
        <main class="container">
            <div class="row col-6">
                <div class="card mx-auto" style="width: 18rem">
                    ${teamMembers}
                </div>
            </div>
        </main>
    </body>
</html>`
}


// <div class="card-body">
//                         <h5 class="card-title" id="name">Name</h5>
//                         <h6 class="card-subtitle mb-2 text-muted" id="role">Role</h6>
//                         <ul class="list-group list-group-flush">
//                             <li class="list-group-item">ID</li>
//                             <li class="list-group-item">Email</li>
//                             <li class="list-group-item">GitHub</li>
//                         </ul>
//                     </div>