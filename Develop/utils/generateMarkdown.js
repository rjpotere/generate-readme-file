// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(!license) {
    return '';
  }
  const licenseLink = renderLicenseLink(license);
  return `![photo](${licenseLink})`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return `https://img.shields.io/badge/${license}-license-brightgreen`
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `**License:** \n ${renderLicenseBadge(license)}`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n
  ## **Table of Contents**
  1. [license](#license)
  2. [Description](#description)
  3. [Installation Instructions](#installation-instructions)
  4. [Usage information](#usage-information)
  5. [Contribution Guidelines](#contribution-guidelines)
  6. [Test Instructions](#test-instructions)
  7. [Questions?](#questions)\n
  ## ${renderLicenseSection(data.licensetype)}\n
  This application is covered under license type: ${data.licensetype}\n
  ## **Description:** \n ${data.description} \n
  ## **Installation Instructions:**\n ${data.instructions} \n
  ## **Usage Information:** \n${data.usage} \n
  ## **Contribution Guidelines:**\n ${data.contribute} \n
  ## **Test Instructions:** \n${data.tests}\n
  ## **Questions:**\n
  Github Profile: [${data.github}](https://github.com/${data.github}).\n
  Contact me by email with additional questions: [${data.email}](mailto:${data.email})\n
`;
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection};

