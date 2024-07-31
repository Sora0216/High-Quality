// TODO: Include packages needed for this application
const inquirer = require(`inquirer`);
const fs = require(`fs`);
const path = require(`path`);
const generateMarkdown = require(`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What would you like to title your project... nerd?`,
        name: `title`,
    },
    {
        type: `input`,
        message: `Enter a Description`,
        name: `Description`,
    },
    {
        type: `input`,
        message: `Enter installation instructions`,
        name: `Installation`,
    },
    {
        type: `input`,
        message: `Enter usage information`,
        name: `Usage`,
    },
    {
        type: `input`,
        message: `Enter contribution Guideline`,
        name: `Contribution`,
    },
    {
        type: `input`,
        message: `Enter Test Instructions`,
        name: `Test`,
    },
    {
        type: `lsit`,
        message: `What license would you like to use for your project`,
        name: `license`,
        choices: [`MIT`, `Apache 2.0`, `GPL 3.0`, `BSD 3`, `None`]
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
        fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((userAnswers) =>{
        writeToFile(`README.md`, generateMarkdown([userAnswers]));
    });
}

// Function call to initialize app
init();
