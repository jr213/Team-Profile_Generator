const inquirer = require('inquirer');
const { Manager, managerForm } = require('./manager');
const { Engineer, engineerForm } = require('./engineer');
const { Intern, internForm } = require('./intern');
const {generateHTML} = require('./generatehtml')
const {generateHTMLFile} = require('./generatehtml')
const teamArray = [];


const init = () => {managerQuestion()}
const managerQuestion = () => {
    inquirer.prompt(managerForm)
    .then((input) => {
        input = new Manager(input.name,input.id, input.email, input.officeNum)
        teamArray.push(input);
        console.log(teamArray)
        return newWorker();
    })
}
const internQuestion = () => {
    inquirer.prompt(internForm)
    .then((input) => {
        input = new Intern(input.name,input.id, input.email, input.officeNum)
        teamArray.push(input);
        return newWorker();
    })
}
const engineerQuestion = () => {
    inquirer.prompt(engineerForm)
    .then((input) => {
        input = new Engineer(input.name,input.id, input.email, input.officeNum)
        teamArray.push(input);
        return newWorker();
    })
}
const newWorker = () => {
    inquirer.prompt([{
        type: 'list',
        name: 'employeeType',
        message: "What kind of team member would you like to add?",
        choices: [
            {name: 'Engineer', value: "addEngineer"},
            {name: 'Intern', value: "addIntern"},
            {name: 'DONE', value: "done"}
        ]
    }]).then((input) => {
        switch (input.employeeType) {
            case 'addEngineer':
                engineerQuestion();
                break;
            case 'addIntern':
                internQuestion();
                break;
            
            default:
                console.log('Your team is created!');
                console.log(teamArray);
                generateHTML(teamArray);
                
                break;
        }
        // take the type and use to determine which function to call next.
    })
}
init();