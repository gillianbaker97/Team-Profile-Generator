const inquirer = require('inquirer'); //here, we have the main JavaScript page. It calls upon the 'inquirer' package and defines constants here
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile); //we're writing the file

const promptInfo = () => {     //here's the inquirer package notation to define what input we want, the name of the input, and its message
    return inquirer.prompt([
      {
        type: 'input',
        name: 'name1',
        message: 'Emily',
      },

      {
        type: 'input',
        name: 'id1',
        message: 'What is your id?',  
      },

      {
        type: 'input',
        name: 'email1',
        message: 'What is your email?',  //what I've just highlighted is the inquirer setup for the Employee 
      },

      {
        type: 'input',
        name: 'role1',
        message: 'Employee',
      },

      {
        type: 'input',
        name: 'name2',
        message: 'Martin',
      },

      {
        type: 'input',
        name: 'id2',
        message: 'What is your id?',
      },

      {
        type: 'input',
        name: 'email2',
        message: 'What is your email?',
      },

      {
        type: 'input',
        name: 'office',
        message: 'What is your office number?', //this is the inquirer setup for the Manager
      },

      {
        type: 'input',
        name: 'role2',
        message: 'Manager',
      },

      {
        type: 'input',
        name: 'name3',
        message: 'Enny',
      },

      {
        type: 'input',
        name: 'id3',
        message: 'What is your id?',
      },

      {
        type: 'input',
        name: 'email3',
        message: 'What is your email?', //this is the inquirer setup for the Engineer
      },

      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },

      {
        type: 'input',
        name: 'role3',
        message: 'Engineer',
      },

      {
        type: 'input',
        name: 'name4',
        message: 'Sam',
      },

      {
        type: 'input',
        name: 'id4',
        message: 'What is your id?',
      },

      {
        type: 'input',
        name: 'email4',
        message: 'What is your email?', //this is the inquirer setup for the intern
      },

      {
        type: 'input',
        name: 'school',
        message: 'Enter your school here',
      },

      {
        type: 'input',
        name: 'role4',
        message: 'Intern',
      },

    ]);
  };//below, we can generate the corresponding HTML file with jQuery references for each of the inquirer inputs. Where we have the 
    // jQuery notation, we have the ${} with a reference to answers along with each of the inputs in inquirer.

  const generateHTML = (answers) =>  

`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
    <title>Document</title>
</head>
<body>
    <div class="p-5 mb-3 bg-danger text-white">
        <p class="fs-1 text-center">My Team</p>
    </div>

    <div class= "row row-cols-1 row-cols-md-3 g-4">
    <div class="col">
    <div class="card" style="width: 18rem;">
      <div class="card-header bg-primary">
        <p class="fs-1 text-white">${answers.name1}</p>
        <p class="fs-1 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bug" viewBox="0 0 16 16">
          <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"/>
        </svg> ${answers.role1}</p>
      </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${answers.id1}</li>
          <li class="list-group-item">Email: ${answers.email1}</li>
        </ul>
      </div>
      </div>

      <div class="col">
      <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary">
          <p class="fs-1 text-white">${answers.name2}</p>
          <p class="fs-1 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bug" viewBox="0 0 16 16">
            <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"/>
          </svg> ${answers.role2}</p>
        </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.id2}</li>
            <li class="list-group-item">Email: ${answers.email2}</li>
            <li class="list-group-item">Office Number: ${answers.office}</li>
          </ul>
        </div>
        </div>
        
        <div class="col">
        <div class="card" style="width: 18rem;">
          <div class="card-header bg-primary">
            <p class="fs-1 text-white">${answers.name3}</p>
            <p class="fs-1 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bug" viewBox="0 0 16 16">
              <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"/>
            </svg> ${answers.role3}</p>
          </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">ID: ${answers.id3}</li>
              <li class="list-group-item">Email: ${answers.email3}</li>
              <li class="list-group-item">Git: ${answers.github}</li>
            </ul>
          </div>
          </div>
     

      <div class="col">
      <div class="card" style="width: 18rem;">
        <div class="card-header bg-primary">
          <p class="fs-1 text-white">${answers.name4}</p>
          <p class="fs-1 text-white"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bug" viewBox="0 0 16 16">
            <path d="M4.355.522a.5.5 0 0 1 .623.333l.291.956A4.979 4.979 0 0 1 8 1c1.007 0 1.946.298 2.731.811l.29-.956a.5.5 0 1 1 .957.29l-.41 1.352A4.985 4.985 0 0 1 13 6h.5a.5.5 0 0 0 .5-.5V5a.5.5 0 0 1 1 0v.5A1.5 1.5 0 0 1 13.5 7H13v1h1.5a.5.5 0 0 1 0 1H13v1h.5a1.5 1.5 0 0 1 1.5 1.5v.5a.5.5 0 1 1-1 0v-.5a.5.5 0 0 0-.5-.5H13a5 5 0 0 1-10 0h-.5a.5.5 0 0 0-.5.5v.5a.5.5 0 1 1-1 0v-.5A1.5 1.5 0 0 1 2.5 10H3V9H1.5a.5.5 0 0 1 0-1H3V7h-.5A1.5 1.5 0 0 1 1 5.5V5a.5.5 0 0 1 1 0v.5a.5.5 0 0 0 .5.5H3c0-1.364.547-2.601 1.432-3.503l-.41-1.352a.5.5 0 0 1 .333-.623zM4 7v4a4 4 0 0 0 3.5 3.97V7H4zm4.5 0v7.97A4 4 0 0 0 12 11V7H8.5zM12 6a3.989 3.989 0 0 0-1.334-2.982A3.983 3.983 0 0 0 8 2a3.983 3.983 0 0 0-2.667 1.018A3.989 3.989 0 0 0 4 6h8z"/>
          </svg> ${answers.role4}</p>
        </div>
          <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${answers.id4}</li>
            <li class="list-group-item">Email: ${answers.email4}</li>
            <li class="list-group-item">${answers.school}</li>
          </ul>
        </div>
        </div>
     </div>
    
</body>
</html>`;

const init = () => {
  promptInfo()
    .then((answers) => writeFileAsync('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
};

init();


//above, we have the HTML file being written based off the inputted answers along with a console log checking our progress. 
// writing to the HTML file is successful! Now for the tests =>