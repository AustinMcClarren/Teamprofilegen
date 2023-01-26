const Employee = require("./Employee")

class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        super(name,id,email); //gets the parent contructor

        this.officeNumber = officeNumber;
    }

    getOfficeNumber(){ //officenumber function
        return this.officeNumber;
    }

    getRole(){ //role function 
        return "Manager";
    }
}
  
module.exports = Manager;

