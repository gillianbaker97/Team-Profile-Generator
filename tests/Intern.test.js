const Intern = require("../Intern");

describe("Intern", () => {

    describe("getName", () => {
        it("should return the name of the parent object", () => {
    
            expect("name" in obj).toEqual(parent.name4);
        });
    
    });
        
    describe("getId", () => {
        it("should return the ID number of the parent object", () => {
    
            expect("id" in obj).toEqual(parent.id4);
        });
    
    });

    describe("getEmail", () => {
        it("should return the email address of the parent object", () => {
    
            expect("email" in obj).toEqual(parent.email4);
        });
    
    });

    describe("getSchool", () => {
        it("should return the school of the parent object", () => {
    
            expect("school" in obj).toEqual(parent.school);
        });
    
    });

    describe("getRole", () => {
        it("should return the role of the parent object", () => {
    
            expect("role" in obj).toEqual(parent.role4);
        });
    
    });


});
