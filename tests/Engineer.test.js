const Engineer = require("../index");

describe("Engineer", () => {

    describe("getName", () => {
        it("should return the name of the parent object", () => {
    
            expect("name" in obj).toEqual(parent.name3);
        });
    
    });
        
    describe("getId", () => {
        it("should return the ID number of the parent object", () => {
    
            expect("id" in obj).toEqual(parent.id3);
        });
    
    });

    describe("getEmail", () => {
        it("should return the email address of the parent object", () => {
    
            expect("email" in obj).toEqual(parent.email3);
        });
    
    });

    describe("getGit", () => {
        it("should return the GitHub account of the parent object", () => {
    
            expect("github" in obj).toEqual(parent.github);
        });
    
    });

    describe("getRole", () => {
        it("should return the role of the parent object", () => {
    
            expect("role" in obj).toEqual(parent.role3);
        });
    
    });



});
