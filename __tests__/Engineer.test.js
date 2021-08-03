const Engineer = require("../library/Engineer");

describe("Engineer", () => {

    describe("getName", () => {
        it("should return the name of the parent object", () => {
    
            //const name = "Enny"
            expect(Engineer.name).toBe("Enny");
        });
    
    });
        
    describe("getId", () => {
        it("should return the ID number of the parent object", () => {
    
            //const Id = 3
            expect(Engineer.Id).toBe(3);
        });
    
    });

    describe("getEmail", () => {
        it("should return the email address of the parent object", () => {
    
           // const email = "engineer@gmail.com"
            expect(Engineer.email).toBe("engineer@gmail.com");
        });
    
    });

    describe("getGit", () => {
        it("should return the GitHub account of the parent object", () => {
    
            //const git = "e@github"
            expect(Engineer.git).toBe("e@github");
        });
    
    });

    describe("getRole", () => {
        it("should return the role of the parent object", () => {
    
            //const Role = "engineer"
            expect(Engineer.Role).toBe("engineer");
        });
    
    });



});
// the same process holds for the Engineer, Intern, and Manager tests. We want to first link each Engineer/Intern/Manager with the file path using 
// require and then describe each get____ function which appears in the corresponding JavaScript. 