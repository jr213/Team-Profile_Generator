const Worker = require('./worker');
const engineerForm= [
    {
        type: "input",
        name: "name",
        message: "Enter engineer's name."
    },
    {
        type: "input",
        name: "id",
        message: "Enter engineer's ID."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the engineer's email."
    },
    {
        type: "input",
        name: "github",
        message: "Enter the engineer's Github."
    }
]
class Engineer extends Worker{
    constructor(id,name, email, github){
        super(name, id, email);
        this.github=github;
    }
    getRole(){
        return 'Engineer';
    }
    getGithub(){
        return this.github;
    }
}
module.exports= {Engineer, engineerForm};