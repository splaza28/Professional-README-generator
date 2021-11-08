

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'MIT License'){
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  }
  else if (license === 'Apache 2.0 License'){
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  }
  else if (license === 'GNU General Public License v3.0'){
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
  else {return ''}
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License'){
    return 'https://choosealicense.com/licenses/mit/'
  }
  else if (license === 'Apache 2.0 License'){
    return 'https://choosealicense.com/licenses/apache-2.0/'
  }
  else if (license === 'GNU General Public License v3.0'){
    return 'https://choosealicense.com/licenses/gpl-3.0/'
  }
  else {return ''}
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return '## License'
  }
  else {
    return ''
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
 
  return `# ${data.title}

  ${renderLicenseBadge(data.licenses)}

  ## Table of Contents:

  1. [Description](#description)
  2. [Installation](#installation)
  3. [Contributions](#contributions)
  4. [Testing](#testing)
  5. [Usage](#usage)
  6. [Licenses](#licenses)
  7. [Questions](#questions)

  ## Description

  ${data.description}

  ## Installation

  ${data.installation}

  ## Contributions

  ${data.contributions}

  ## Testing

  ${data.testing}

  ## Usage

  ${data.usage}

  ## Licenses

  $${renderLicenseLink(data.licenses)}

  ## Questions

  * Application URL: (https://${data.github}.github.io/${data.title}/)
  * Github URL: (https://github.com/${data.github})



  If there are questions please reach out to ${data.email} for answers!

`;
}

module.exports = generateMarkdown;
