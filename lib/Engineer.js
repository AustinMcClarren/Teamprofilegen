const Employee = require("./Employee")

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super (name, id, email);
        this.github = github;
    }

    getGithub() { //github function
        return this.github;
    }

    getRole() { //role function 
        return "Engineer";
    }

}

module.exports = Engineer;

