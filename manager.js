const Worker = require('./worker');
const managerForm = [
    {
        type: "input",
        name: "name",
        message: "Enter manager's name."
    },
    {
        type: "input",
        name: "id",
        message: "Enter manager's ID."
    },
    {
        type: "input",
        name: "email",
        message: "Enter the manager's email."
    },
    {
        type: "input",
        name: "officeNum",
        message: "Enter the manager's office number."
    }
];
class Manager extends Worker{
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }

    getRole() {
        return 'Manager'
    }

	getOfficeNumber() {
		return this.officeNumber;
	}

}

module.exports = { Manager, managerForm } ;