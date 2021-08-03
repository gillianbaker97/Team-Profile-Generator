const Intern = require("../library/Intern");

describe("Intern", () => {

    describe("getName", () => {
        it("should return the name of the parent object", () => {
    
            //const name = "Sam"
            expect(Intern.name).toBe("Sam");
        });
    
    });
        
    describe("getId", () => {
        it("should return the ID number of the parent object", () => {
    
            //const Id = 4
            expect(Intern.Id).toBe(4);
        });
    
    });

    describe("getEmail", () => {
        it("should return the email address of the parent object", () => {
    
            //const email = "intern@gmail.com"
            expect(Intern.email).toBe("intern@gmail.com");
        });
    
    });

    describe("getSchool", () => {
        it("should return the school of the parent object", () => {

            //const school = "OSU"
            expect(Intern.school).toBe("OSU");
        });
    
    });

    describe("getRole", () => {
        it("should return the role of the parent object", () => {
    
            //const Role = "intern"
            expect(Intern.Role).toBe("intern");
        });
    
    });


});
