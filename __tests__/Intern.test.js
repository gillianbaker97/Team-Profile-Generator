const Intern = require("../library/Intern");

describe("Intern", () => {

    describe("getName", () => {
        it("should return the name of the parent object", () => {
    
            const name = "Sam"
            expect(name).toEqual(Intern.name);
        });
    
    });
        
    describe("getId", () => {
        it("should return the ID number of the parent object", () => {
    
            const Id = 4
            expect(Id).toEqual(Intern.id);
        });
    
    });

    describe("getEmail", () => {
        it("should return the email address of the parent object", () => {
    
            const email = "intern@gmail.com"
            expect(email.toEqual(Intern.email);
        });
    
    });

    describe("getSchool", () => {
        it("should return the school of the parent object", () => {

            const school = "OSU"
            expect(school).toEqual(Intern.school);
        });
    
    });

    describe("getRole", () => {
        it("should return the role of the parent object", () => {
    
            const Role = "intern"
            expect(Role).toEqual(Intern.role);
        });
    
    });


});
