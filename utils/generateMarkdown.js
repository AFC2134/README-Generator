// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {

  if (data.license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]'
  };
  if (data.license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]'
  }
  if (data.license === 'GNU GPL v3') {
    return '[![License: GMU](https://img.shields.io/badge/License-GPLv3-blue.svg)]'
  }
  if (data.license === 'Boost 1.0') {
    return '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]'
  }
  if (data.license === 'no license') {
    return ' '
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// NO LICENSE IS AN OPTION IN THE LICENSE CHOICES ARRAY ON LINE 57 OF INDEX.JS,
// SELECTING NO LICENSE WILL GIVE YOU AN EMPTY STING WHERE LINK WOULD USUALLY RENDER




function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
   ${renderLicenseBadge(data)}
   ## Table of Contents
  * [Description](https://github.com/${data.github}/${data.repo}#description)
  * [Installation](https://github.com/${data.github}/${data.repo}#installation)
  * [Usage](https://github.com/${data.github}/${data.repo}#usage)
  * [License](https://github.com/${data.github}/${data.repo}#license)
  * [Contributing](https://github.com/${data.github}/${data.repo}#contributing)
  * [Tests](https://github.com/${data.github}/${data.repo}#tests)
  * [Questions](https://github.com/${data.github}/${data.repo}#questions)

  ## Description
   ${data.description}

  ## Installation
    ${data.installation}

  ## Usage
    ${data.usage}

  ## License  
    This application is covered under the ${data.license} license.
 
  ## Contributing
    ${data.contributing}

  ## Tests
    ${data.tests}

  ## Questions
  Click here to see ${data.github}'s page! https://github.com/${data.github}  
  Feel free to email me at ${data.email} and I will gladly answer any questions you have!

`;
}

module.exports = generateMarkdown;
