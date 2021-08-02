const getName = require("../index");

describe("getName", () => {
    it("should return the name of the parent object", () => {
        const obj = new getName();

        expect("name" in obj).toEqual(true);
    });


});