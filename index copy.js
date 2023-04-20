const inquirer = require("inquirer");
const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is the name of your project title?",
      name: "projectTitle",
    },
    {
      type: "input",
      message:
        "Describe your project, include your motivation, why you built it, what problem it solves, and what you learned",
      name: "description",
    },
    {
      type: "input",
      message:
        "What are the steps required to install your project? Describe each step to get it running",
      name: "installation",
    },
    {
      type: "input",
      message:
        "Give instructions on how to use your application, you can add screenshots later",
      name: "usage",
    },
    {
      type: "input",
      message:
        "Please provide a list of any collaborators and links to their GitHub profiles",
      name: "credits",
    },
    {
      type: "list",
      message: "What license did you use?",
      choices: [
        "GNU AGPLv3",
        "GNU GPLv3",
        "Mozilla Publc License 2.0",
        "Apache License 2.0",
        "MIT License",
        "Boost Software License 1.0",
        "The Unlicense",
      ],
      name: "license",
    },
  ])
  .then(({projectTitle, description, installation, usage, credits, license}) => {
    const ReadMe = `# ${projectTitle}
      
      ## Description
      ${description}
      
      
      ## Installation
      ${installation}


      ## Usage
      ${usage}


      ## Credits
      ${credits}


      ## License
      ${license}
      
      `;
    // console.log(ans);
    fs.writeFile(`./output/README.md`, ReadMe, (err) => {
      if (err) {
        throw err;
      }
      console.log("successfully created your README!");
    });
  });

// let array = [1, 2, 3];
// console.log(array[1]);
// let object = {
//   num1: 1,
//   num2: 2,
// };
// console.log(object.num2);

// let ans = {
//   projectTitle: "s",
//   description: "s",
//   installation: "s",
//   usage: "s",
//   credits: "s",
//   license: "GNU AGPLv3",
// };
// console.log(ans.projectTitle);

// let ans2 = {
//   projectTitle,
//   description,
//   installation,
//   usage,
//   credits,
//   license,
//   tests,
//   emailQuestions,
// };


