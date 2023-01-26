const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email); //gets the parent contructor

        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){ //officenumber input
        return this.officeNumber;
    }

    getRole(){ //role input 
        return "Manager";
    }
}
  
module.exports = Manager;

