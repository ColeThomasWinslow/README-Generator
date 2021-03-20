const inquirer = require('inquirer');
const fs = require('fs');

const Choices = require('inquirer/lib/objects/choices');
var TheMITLicense ='[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
var ISCLicense ='[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
var PublicLicense ='[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)'

const generateMarkdown = (answers) =>
 `${answers.title}
 ${answers.licences}
 ${answers.description}
 ${answers.motivation}
 ${answers.problems}`;

inquirer
.prompt([
    {
        type: 'input',
        name: 'title',
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
    },
    {
        type: 'list', 
        name: 'licences',
        choices: [TheMITLicense, ISCLicense, PublicLicense],
        message:"Does this repo have a licences?",
       
    },
])
.then((answers) => {
const readMeContent = generateMarkdown(answers);

fs.writeFile('README.md', readMeContent, (err) =>
  err ? console.log(err) : console.log('Successfully created read me File')
    );
});
