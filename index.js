const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./assets/markdownGenerator");

// TODO: Create an array of questions for user input
const questions = () => {
    inquirer.prompt([     
        {
            type: 'input', 
            message: 'what is your project name?',
            name: 'project'
        },
        {
            type: 'input', 
            message: 'Short Description of Project',
            name: 'description'
        },
        {
            type: 'input', 
            message: 'what command should be run to install dependencies?',
            name: 'installation',
            default: 'npm i'
        },
        {
            type: 'input', 
            message: 'usage of the repo for the user?',
            name: 'usage'
        },
        {
            type: 'list',
            message:'What kind of licesnse should be included?', 
            name: 'license',
            choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
        },
        {
            type: 'input', 
            message: 'What type of contributions does the user need to know for the repo?',
            name: 'contributing'
        },   
        {
            type: 'input', 
            message: 'what command should be run to to run tests?',
            name: 'tests',
            default: 'npm test'
        },          
        {
            type: 'input', 
            message: 'what is your GitHub Username?',
            name: 'username'
        },
        {
            type: 'input', 
            message: 'what is your email address?',
            name: 'email'
        },   
    ]).then(data => {

        console.log(data)

        const content = generateMarkdown(data)        
        
        fs.writeFile("README.md", content, err => {
            if(err) console.log(err);
            else console.log("success!");
        });

    });

}



function init() {
    questions()
}


init();