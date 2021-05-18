function markdownGenerator(data) {
    return `
  # ${data.project}
  UNC Bootcamp Homework #9
  [README Generator](goodReadMeGenerator (1)](https://user-images.githubusercontent.com/41960292/118577473-71d93f00-b758-11eb-9c52-74bfbe10845d.gif))
  ![GitHub License]()
  ### Table of Contents:
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  * [Credits](#credits)
  ### Description: 
  ${data.description}
  ### Installation: 
  To install neccessary dependencies, please run the following command:
  \`\`\`
  ${data.installation}
  \`\`\`
  ### Usage: 
  ${data.usage}
  ### License: 
  This project is licensed under the ${data.license} license 
  ### Contributing: 
  ${data.contributing}
  ### Tests: 
  To run tests, please run the following command:
  \`\`\`
  ${data.tests}
  \`\`\`
  ### Questions: 
  If you have any issues about the repo, please contact me via email at ${data.email}
  You can find more of my work at ${data.username}
  ### Credits: 
  npm inquirer
  `;
  }
  
  module.exports = markdownGenerator;