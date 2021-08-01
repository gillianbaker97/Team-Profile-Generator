const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

constWriteFileAsync = util.promisify(fs.writeFile);

const promptInfo = () => {
    return inquirer.prompt([
      {
        type: 'input',
        name: 'Jared',
        message: 'ID:1',
      },
      {
        type: 'input',
        name: 'location',
        message: 'Where are you from?',
      },
      {
        type: 'input',
        name: 'hobby',
        message: 'What is your favorite hobby?',
      },
      {
        type: 'input',
        name: 'food',
        message: 'What is your favorite food?',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username',
      },
      {
        type: 'input',
        name: 'linkedin',
        message: 'Enter your LinkedIn URL.',
      },
    ]);
  };