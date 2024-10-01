// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import { writeFile } from 'fs/promises';

// TODO: Create an array of questions for user input
const makeMDFile = ({ projectTitle, projectDescription, installationInstructions, usageInformation, contributionGuidelines, testInstructions, license, github, email }) => 
`# ${projectTitle}

## Description
${projectDescription}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [Questions](#questions)
- [License](#license)

## Installation
${installationInstructions}

## Usage
${usageInformation}

## Contribution
${contributionGuidelines}

## Tests
${testInstructions}

## Questions
If you have any questions, please reach out to me at:
- Email: [${email}](mailto:${email})
- GitHub: [${github}](https://github.com/${github})

## License
![License: ${license}](https://img.shields.io/badge/License-${license}-blue.svg)

## Screencastify
- Screencastify: [Link](https://drive.google.com/file/d/1uyrbPMUjMPC9IN6MY4GuHyldYhkszUKu)`;

// TODO: Create a function to write README file
async function writeToFile(fileName, data) {
  try {
    await writeFile(fileName, data);
    console.log(`Successfully wrote ${fileName}`);
  } catch (err) {
    console.error(err);
  }
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      {
        // Title of the project
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?',
      },
      {
        // Description of the project
        type: 'input',
        name: 'projectDescription',
        message: 'Enter a project description:',
      },
      {
        // Installation instructions
        type: 'input',
        name: 'installationInstructions',
        message: 'Enter installation instructions:',
      },
      {
        // Usage information
        type: 'input',
        name: 'usageInformation',
        message: 'Enter usage information:',
      },
      {
        // Contribution guidelines
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Enter contribution guidelines:',
      },
      {
        // Test instructions
        type: 'input',
        name: 'testInstructions',
        message: 'Enter test instructions:',
      },
      {
        // License
        type: 'list',
        name: 'license',
        message: 'Choose a license:',
        choices: ['MIT', 'GNU', 'Apache', 'GPL', 'BSD', 'None'],
      },
      {
        // GitHub username
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:',
      },
      {
        // Email address
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
    ])
    // Write the data to a file and name file based on project title
    .then((answers) => {
      const fileName = `${answers.projectTitle.toLowerCase().split(' ').join('')}.md`;
      const markdownContent = makeMDFile(answers);
      return writeToFile(fileName, markdownContent);
    })
    .catch((err) => console.error(err));
}

// Function call to initialize app
init();
