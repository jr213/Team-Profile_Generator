const Worker= require("./worker");
const internForm = [
    {
        type: "input",
        name: "name",
        message: "Enter Intern's name."
    },
    {
        type: "input",
        name: "id",
        message: "Enter Intern's ID."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the Intern's email."
    },
    {
        type: "input",
        name: "school",
        message: "Enter the Intern's school."
    }
];

class Intern extends Worker {
    constructor(name, id, email, school){
        super(name, id, email);
        this.school=school;
    }
    getSchool() {
        return this.school;
    }
    getRole(){
        return 'Intern';
    }
}
module.exports= {Intern, internForm};