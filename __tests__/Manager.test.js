const Manager = require("../library/Manager");

describe("Manager", () => {

    describe("getName", () => {
        it("should return the name of the parent object", () => {
            
            const name = "Martin"
            expect(name).toEqual(Manager.name);
        });
    
    });
        
    describe("getId", () => {
        it("should return the ID number of the parent object", () => {
    
            const Id = 2
            expect(Id).toEqual(Manager.id);
        });
    
    });

    describe("getEmail", () => {
        it("should return the email address of the parent object", () => {
    
            const email = "manager@gmail.com"
            expect(email).toEqual(Manager.email);
        });
    
    });

    describe("getofficeNumber", () => {
        it("should return the office number of the parent object", () => {
    
            const officeNumber = "#"
            expect(officeNumber).toEqual(Manager.officeNumber);
        });
    
    });

    describe("getRole", () => {
        it("should return the role of the parent object", () => {
    
            const role = "manager"
            expect(role).toEqual(Manager.role);
        });
    
    });


});
