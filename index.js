// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./potential-enigma/Develop/utils/generateMarkdown');





// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title"
    },
    {
        type: "input",
        message: "Can you give a accurate description of the project?",
        name: "Description"
    },
    {
        type: "input",
        message: "table of contents",
        name: "table of contents"
    },
    {
        type: "input",
        message: "what are the required steps to make a install the project?",
        name: "Installation"
    },
    {
        type:"input",
        message: "Have you or will you add screenshots to giver examples of how to use this?",
        name:"Usage"
    },
    {
        type:"input",
        message:"If your project has many features, list them here.",
        name:"features"
    },
    {
        type:"input",
        message: "List collaborators with links to their GitHub profiles, if you used third party assets or tutorials, include links to those here as well.",
        name:"Credits"
    },
    {
        type:"input",
        message:"this section is to let other developers know what they can and cant do with your code",
        name:"License"
    },
];
console.log(questions)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data, function(err){
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    
}

// Function call to initialize app
init();
