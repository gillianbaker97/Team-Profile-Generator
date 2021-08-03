const Manager = require("../Manager");

describe("Manager", () => {

    describe("getName", () => {
        it("should return the name of the parent object", () => {
    
            expect("name" in obj).toEqual(parent.name2);
        });
    
    });
        
    describe("getId", () => {
        it("should return the ID number of the parent object", () => {
    
            expect("id" in obj).toEqual(parent.id2);
        });
    
    });

    describe("getEmail", () => {
        it("should return the email address of the parent object", () => {
    
            expect("email" in obj).toEqual(parent.email2);
        });
    
    });

    describe("getofficeNumber", () => {
        it("should return the office number of the parent object", () => {
    
            expect("office number" in obj).toEqual(parent.officeNumber);
        });
    
    });

    describe("getRole", () => {
        it("should return the role of the parent object", () => {
    
            expect("role" in obj).toEqual(parent.role2);
        });
    
    });


});
