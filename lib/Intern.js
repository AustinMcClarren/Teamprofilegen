const Employee = require("./Employee")

class Intern extends Employee {
    constructor(name, id, email, school) {
        super (name, id, email);
        this.school = school;        
    }

    getSchool() { //school input
        return this.school;
    }

    getRole () { //role input
        return "Intern"
    }
}

module.exports = Intern;