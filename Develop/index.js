// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown= require('./utils/generateMarkdown');
const Choice = require('inquirer/lib/objects/choice');


// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter a description about your project:'
  },
  {
    type: 'input',
    name: 'instructions',
    message: 'Enter installation instructions:'

  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter usage information:'
  },
  {
    type: 'input',
    name: 'contribute',
    message: 'Enter contribution quidelines:'
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter test instructions:'
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter your GitHub username:'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Enter your email address:'
  },
  {
    type: 'list',
    name: 'badgetype',
    message: 'Choose a badge:',
    choices:['choice a','choice b','choice c']
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdownCreated = generateMarkdown(data)
  fs.writeFile(fileName, markdownCreated, (err) =>
    err ? console.log(err) : console.log('Readme file created')
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((data) => {
      const fileName = `${data.title}.md`;
      writeToFile(fileName, data)
    })
}


// Function call to initialize app
init();


