const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() { //github input
        return this.github;
    }

    getRole() { //role input 
        return "Engineer";
    }

}

module.exports = Engineer;

