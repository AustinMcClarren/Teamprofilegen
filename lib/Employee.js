//The parent to the other classes
class Employee {
 constructor(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;

 }
 getName(){  //get name input   
    return this.name;
 }

 getId(){ //get id input
    return this.id;

}

getEmail(){ //get email input 
    return this.email;
}

getRole(){ //get role input 
    return "Employee";
}

}

module.exports = Employee;