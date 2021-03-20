const inquirer = require('inquirer');
const fs = require('fs');

inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message:"What is the name of your Repo?"
    },
    {
        type: 'input',
        name: 'description',
        message:"Description of the Project?"
    },
    {
        type: 'input',
        name: 'motivation',
        message:"Motivation for the Project?"
    },
    {
        type: 'input',
        name: 'problems',
        message:"what problem does it solve?"
    }
])
// .then(answers) => {}
