const generateTeam = team => {

    const generateManager = manager => {
        return `
    <div class='card employee-card'>
    <div class='card-header'>
        <h2 class='card-title'>${manager.getName()}</h2>
        <h3 class='card-title'><i class='fas fa-mug-hot mr-2'></i>${manager.getRole()}</h3>
        </div>
        <div class='card-body'>
            <ul class='list-group'>
            <li class='list-group-item'>ID: ${manager.getId()}
            </li>
            <li class='list-group-item'>E-mail: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a>
            </li>
            <li class='list-group-item'>Office Number: ${manager.getOfficeNumber()}
            </li>
            </ul>
        </div>
    </div>
    `
    }

    const generateIntern = intern => {
        return `
    <div class='card employee-card'>
    <div class='card-header'>
        <h2 class='card-title'>${intern.getName()}</h2>
        <h3 class='card-title'><i class='fas fa-mug-hot mr-2'></i>${intern.getRole()}</h3>
        </div>
        <div class='card-body'>
            <ul class='list-group'>
            <li class='list-group-item'>ID: ${intern.getId()}
            </li>
            <li class='list-group-item'>E-mail: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a>
            </li>
            <li class='list-group-item'>Studying at: ${intern.getSchool()}
            </li>
            </ul>
        </div>
    </div>
    `
    }

    const generateEngineer = engineer => {
        return `
    <div class='card employee-card'>
    <div class='card-header'>
        <h2 class='card-title'>${engineer.getName()}</h2>
        <h3 class='card-title'><i class='fas fa-mug-hot mr-2'></i>${engineer.getRole()}</h3>
        </div>
        <div class='card-body'>
            <ul class='list-group'>
            <li class='list-group-item'>ID: ${engineer.getId()}
            </li>
            <li class='list-group-item'>E-mail: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a>
            </li>
            <li class='list-group-item'>GitHub: ${engineer.getGithub()}
            </li>
            </ul>
        </div>
    </div>
    `
    }

}

module.exports = team => {
    return `
    <!DOCTYPE html>
    <html lang='en'>
    
    <head>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/boostrap.min.css"
        integrity="sha384-gg0yR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1t" crossorigin=anonymous">
        </head>
    <body>
    <div class="container-fluid">
    <div class="row">
    <div class="col-12 jumbotron mb-3 team-heading">
    <h1 class="text-center">My Team</h1>
    </div>
    </div>
    </div>
    <div class="container">
    <div class="row>
    <div class="team-area col-12 d-flex justify-content-center">${generateTeam(team)}
    </div>
    </div>
    </div>
    </body>
    </html>
        `
}