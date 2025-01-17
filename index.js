import inquirer from 'inquirer';
import fs from 'fs'


const generateREADME = ({ projectName, shortDescription, installSteps, usageInfo, licenseChoice, contributeTo, contactEmail, githubUser }) => 
`${projectName}
## Description

${shortDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${installSteps}

## Usage

${usageInfo}


## License

${licenseChoice}

## Badges


## How to Contribute

${contributeTo}
Email me at: ${contactEmail}
or see my GitHub at ${githubUser} `

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
        const READMEcontent = generateREADME(response)

        fs.writeFile('README.md', READMEcontent, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md!')
          );
    })

// TODO: Create a function to initialize app
// function init() { }

// Function call to initialize app
// init();

