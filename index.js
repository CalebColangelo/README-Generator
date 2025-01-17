
import inquirer from 'inquirer';


const questions = ['What is the name of your project?', 'Please provide a short description of your project.', 'What are the steps to install the project?', 'Please enter any usage information.', 'How can users contribute to the project?', 'Please add any test instructions.', 'What is your GitHub username?', 'What is your email adress?'];

const questionInputs = inquirer.prompt([
    {
        type: 'input',
        message: 'What is the name of your project?',
        name: 'projectName'
    },
    {
        type: 'input',
        message: 'Please provide a short description of your project.',
        name: 'shortDescription'
    },
    {
        type: 'input',
        message: 'What are the steps to install the project?',
        name: 'installSteps'
    },
    {
        type: 'input',
        message: 'Please enter any usage information.',
        name: 'usageInfo'
    },
    {
        type: 'input',
        message: 'How can users contribute to the project?',
        name: 'contributeTo'
    },
    {
        type: 'input',
        message: 'Please add any test instructions.',
        name: 'testInstructions'
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'githubUser'
    },
    {
        type: 'input',
        message: 'What is your email adress?',
        name: 'contactEmail'
    },
    {
        type: 'list',
        message: 'Which license would you like to use?',
        name: 'licenseChoice',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3.0', 'NONE']
    }
])
    .then((response) => {
        console.log(`My project name is ${response.projectName}`)
        console.log(response)
        const licenseChoice = response.licenseChoice
        console.log(licenseChoice)
    })


module.exports = {
    questionInputs
}

// TODO: Create a function to write README file
function writeToFile(data) { }

// TODO: Create a function to initialize app
function init() { }

// Function call to initialize app
init();

