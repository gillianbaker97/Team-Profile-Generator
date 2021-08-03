const Manager = require("../library/Manager");

describe("Manager", () => {

    describe("getName", () => {
        it("should return the name of the parent object", () => {
            
            //const name = "Martin"
            expect(Manager.name).toBe("Martin");
        });
    
    });
        
    describe("getId", () => {
        it("should return the ID number of the parent object", () => {
    
            //const Id = 2
            expect(Manager.Id).toBe(2);
        });
    
    });

    describe("getEmail", () => {
        it("should return the email address of the parent object", () => {
    
            //const email = "manager@gmail.com"
            expect(Manager.email).toBe("manager@gmail.com");
        });
    
    });

    describe("getofficeNumber", () => {
        it("should return the office number of the parent object", () => {
    
            //const officeNumber = "#"
            expect(Manager.officeNumber).toBe("#");
        });
    
    });

    describe("getRole", () => {
        it("should return the role of the parent object", () => {
    
            //const role = "manager"
            expect(Manager.role).toBe("manager");
        });
    
    });


});
