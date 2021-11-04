
// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the name of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "How would you describe your project?",
        name: "description"
    },
    {
        type: "input",
        message: "What are the instructions to install this project?",
        name: "installation" 

    },
    {
        type: "input",
        message: "How can others contribute to this project?",
        name: "contributions" 
    },
    {
        type: "input",
        message: "How can testing be conducted for this project?",
        name: "testing" 
    },
    {
        type: "input",
        message: "What are the instructions for utilizing this project?",
        name: "usage" 
    },
    {
        type: "list",
        message: "Which license did you use for this project?",
        name: "licenses",
        choices: ['MIT License', 'Apache License', 'GPL License'] 
    },
    {
        type: "input",
        message: "What is your Github username?",
        name: "github" 
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email" 
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

