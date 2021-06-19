const Engineer = require("../lib/Engineer");

describe("Engineer Test sequence", () => {
    it("Can set GitHub account via constructor", () => {
        const testValue = "SamHub";
        const employ = new Engineer("Sam", 10, "test@bootcamp.com", testValue);
    
        expect(employ.github).toBe(testValue);
    });

    it("getRole() should return 'Engineer'", () => {
        const testValue = "Engineer";
        const employ = new Engineer("Sam", 10, "test@bootcamp.com", "SamHub");

        expect(employ.getRole()).toBe(testValue);
    });

    it("Can get GitHub username via getGithub()", () => {
        const testValue = "SamHub";
        const employ = new Engineer("Sam", 10, "test@bootcamp.com", testValue);

        expect(employ.getGithub()).toBe(testValue);
    });

    
});

