// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None"){
    return `![github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None"){
    return `\n* [License](#license)\n`;
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown({projectTitle, description, installation, usage, credits, license}) {
  return `# ${projectTitle}
  ${renderLicenseBadge(license)}

## Description
${description}
      
      
## Table of Contents 

* [Installation](#installation)

* [Usage](#usage)

 ${renderLicenseLink(license)}

* [Contributing](#credits)



## Installation
 ${installation}


## Usage
${usage}


## Credits
${credits}


## License
${license}
      
      `;
}

module.exports = generateMarkdown;
