const Engineer = require("../index");

describe("Engineer", () => {

    describe("getName", () => {
        it("should return the name of the parent object", () => {
            const obj = new getName();
    
            expect("name" in obj).toEqual(parent.name);
        });
    
    });
        
    describe("getId", () => {
        it("should return the ID number of the parent object", () => {
            const obj = new getId();
    
            expect("id" in obj).toEqual(parent.id);
        });
    
    });

    describe("getEmail", () => {
        it("should return the email address of the parent object", () => {
            const obj = new getEmail();
    
            expect("email" in obj).toEqual(parent.email);
        });
    
    });

    describe("getGit", () => {
        it("should return the GitHub account of the parent object", () => {
            const obj = new getGit();
    
            expect("github" in obj).toEqual(parent.github);
        });
    
    });



});
