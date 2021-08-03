const Employee = require("../library/Employee"); //creating the "employee" constant and linking it to the corresponding js

describe("Employee", () => {

    describe("getName", () => {  //describing the function and what it should do
        it("should return the name of the parent object", () => {

            //const name = "Emily" //here, the employee is named Emily and we want the method "getName" to retrieve the name of the Employee
            expect(Employee.name).toBe("Emily");
        });
    
    });
        
    describe("getId", () => { // similarly with getId, we want to describe how it works, where the Employee ID is 1
        it("should return the ID number of the parent object", () => {
    
            //const id = 1
            expect(Employee.id).toBe(1);
        });
    
    });

    describe("getEmail", () => {  //again with the employee's email, we want it to be 
        it("should return the email address of the parent object", () => {
    
            //const email = "employee@gmail.com"
            expect(Employee.email).toBe("employee@gmail.com");
        });
    
    });

    describe("getRole", () => { //finally with the role, we have to show that the Employee we've defined is actually labelled as the employee
        it("should return the role of the parent object", () => {
    
            //const role = "Employee"
            expect(Employee.role).toBe("Employee.role");
        });
    
    });


});

//for the tests, we see that we've failed all of them, as parts of them are undefined. I'm still working on fixing them as of now. Thanks for watching.