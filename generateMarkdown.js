

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

  ${renderLicenseBadge(data.license)}${renderLicenseLink(data/license)}

  ##Table of Contents
  *[Description](#description)
  *[Installation](#installation)
  *[Contributing](#contributions)
  *[Tests](#testing)
  *[Usage]($usage)
  *[Licenses]($licenses)
  *[Questions]($questions)

  ##Description

  ${data.description}

  ##Installation

  ${data.installation}

  ##Contributing

  ${data.contributions}

  ##Tests

  ${data.testing}

  ##Usage

  ${data.usage}

  ##Licenses

  ${data.licenses}

  ##Questions

  * Application URL: (https://${data.github}.github.io/${data.title}/)
  * Github Repository URL: (https://github.com/${data.github}/${data.title})



  If there are questions please reach out to ${data.email} for answers!

`;
}

module.exports = generateMarkdown;
