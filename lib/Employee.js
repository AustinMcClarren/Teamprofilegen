//The parent to the other classes
class Employee {
 constructor(name,id,email){
    this.name = name;
    this.id = id;
    this.email = email;

 }
 getName(){  //get name function
    return this.name;
 }

 getId(){ //get id function
    return this.id;

}

getEmail(){ //get email function 
    return this.email;
}

getRole(){ //get role function 
    return "Employee";
}

}

module.exports = Employee;