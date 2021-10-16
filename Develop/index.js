// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const markDown = require('../Develop/utils/generateMarkdown');
const renderLicenseBadge = require('../Develop/utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Provide the title for your README?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description of your README.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and samples for use of your project. Include screenshots as needed.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, please describe guidelines.'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are some examples of tests you have written for this application, and how do you run them?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'Provide your your Github user name.'
    },
    {
        type: 'input',
        name: 'email',
        message: "Provide your email?"
    },
    {
        type: 'input',
        name: 'repo',
        message: 'Provide the name of the Github Repo for your project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license would you like to use?',
        choices: ['Apache 2.0', 'GNU GPL v3', 'Boost 1.0', 'MIT', 'no license']
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.log(err);
        } else {
            console.log("successfully rendered file");
            console.log(data);
        }

    })
};


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers);
            writeToFile('README.md', markDown(answers));
        })
}

// Function call to initialize app
init();
