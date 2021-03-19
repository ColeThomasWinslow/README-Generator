const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message:"What is the name of your Repo?"
    }
])
.then(answers) => {}
