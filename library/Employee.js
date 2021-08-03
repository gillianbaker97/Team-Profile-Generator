class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    };

    getName() {
        console.log(`Name: ${this.name}`);
    };

    getId() {
        console.log(`Id: ${this.id}`);
    };

    getEmail() {
        console.log(`Email: ${this.email}`)
    };

    getRole() {
        colsole.log(`Employee: ${this.Employee}`)
    };
};

// here, we have the class Employee with the corresponding constructor function. We're assigning "name", "id", and "email" to each 
// class and then defining the methods of getName, .... The portion of "this.___" refers to the parent object, which in this case is 
// Employee.