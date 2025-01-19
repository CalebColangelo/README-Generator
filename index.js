import inquirer from 'inquirer';
import fs from 'fs'

inquirer.prompt([
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
        choices: ['MIT', 'APACHE--2.0', 'GPL--3.0', 'BSD--3.0']
    }
])
    .then((response) => {
        const READMEcontent = generateREADME(response)

        if (response.licenseChoice === 'MIT') {
            let badgeDisplay = '![Static Badge](https://img.shields.io/badge/MIT_License-green)'
        }
        
            fs.writeFile('GeneratedREADME.md', READMEcontent, (err) =>
                err ? console.log(err) : console.log('Successfully created README.md!')
            );
    })

const generateREADME = ({ projectName, shortDescription, installSteps, usageInfo, licenseChoice, contributeTo, contactEmail, githubUser }) =>
`![Static Badge](https://img.shields.io/badge/${licenseChoice}-blue)  

${projectName}

## Description

${shortDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contact](#Contact)

## Installation

${installSteps}

## Usage

${usageInfo}


## License

This project is licensed under the ${licenseChoice} license.  

https://www.google.com/search?q=${licenseChoice}

## Badges

![Static Badge](https://img.shields.io/badge/${licenseChoice}-blue)

## How to Contribute

${contributeTo}

## Contact 

Email me at: ${contactEmail}  or see my GitHub at https://github.com/${githubUser} `
