const { lookup } = require('dns');
const fs =require('fs');
function generateHTML(teamArray){
    console.log(teamArray+ 'from inside generatehtml')
    let data = generateData(teamArray);
    generateHTMLFile(data);
}
function generateHTMLFile(data){
    fs.writeFileSync("index.html", data);
}

function generateData(teamArray) {
// build out the dynamic code of cards

// return a string of all the html including the dynamic code
let teamCode="";
teamArray.forEach(teamMember => {
        teamCode += `<div class="col-sm-6">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Name: ${teamMember.name}</h5>
              <p class="card-text">ID: ${teamMember.id} 
              </p>
              <p>
              Email: ${teamMember.email}
              </p>
            </div>
          </div>
        </div>
        `
    })
let data=`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <title>Team Generator</title>
</head>
<body>
<header>
    <h1>Team Generator</h1>
</header>
${teamCode}
</body>
</html>`
return data;
}
module.exports={generateHTML};