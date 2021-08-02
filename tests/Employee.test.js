const Employee = require("../index");

describe("Employee", () => {

    describe("getName", () => {
        it("should return the name of the parent object", () => {
    
            expect("name" in obj).toEqual(parent.name1);
        });
    
    });
        
    describe("getId", () => {
        it("should return the ID number of the parent object", () => {
    
            expect("id" in obj).toEqual(parent.id1);
        });
    
    });

    describe("getEmail", () => {
        it("should return the email address of the parent object", () => {
    
            expect("email" in obj).toEqual(parent.email1);
        });
    
    });

    describe("getRole", () => {
        it("should return the role of the parent object", () => {
    
            expect("role" in obj).toEqual(parent.role1);
        });
    
    });


});

