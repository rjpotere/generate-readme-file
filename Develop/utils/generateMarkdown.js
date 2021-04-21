// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  return
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return 
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} \n
  ## Description: \n ${data.description} \n
  ## Installation Instructions:\n ${data.instructions} \n
  ## Usage Information: \n${data.usage} \n
  ## Contribution Guidelines:\n ${data.contribute} \n
  ## Test Instructions: \n${data.tests}\n
  ## Questions:\n
  Github Profile: [${data.github}](https://github.com/${data.github}).\n
  Email me: [${data.email}](mailto:ryan.potere@gmail.com)\n
`;
}

module.exports = generateMarkdown

