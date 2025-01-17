
const questionInputs = require('./index.js')


const MIT = 'This project is licensed under the MIT license'
const apache = 'This project is licensed under the APACHE 2.0 license'
const GPL = 'This project is licensed under the GPL 3.0 license'
const BSD = 'This project is licensed under the BSD 3.0 license'

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 

}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return ` ${questionInputs.projectName}

## Description

${questionInputs.shortDescription}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation

${questionInputs.installSteps}

## Usage

${questionInputs.usageInfo}


## License

${questionInputs.licenseChoice}

## Badges



## How to Contribute

${questionInputs.contributeTo}
Email me at: ${questionInputs.contactEmail}
or see my GitHub at ${questionInputs.githubUser} :)


Go the extra mile and write tests for your application. Then provide examples on how to run them here.# ${data.title}`;
}

export default generateMarkdown;
