const Intern = require("../lib/Intern");

describe("Intern Test sequence", () => {
    it("Can set school via constructor", () => {
        const testValue = "USYD";
        const employ = new Intern("Sam", 10, "test@bootcamp.com", testValue);
    
        expect(employ.school).toBe(testValue);
    });

    it("getRole() should return 'Intern'", () => {
        const testValue = "Intern";
        const employ = new Intern("Sam", 10, "test@bootcamp.com", "USYD");

        expect(employ.getRole()).toBe(testValue);
    });

    it("Can get school via getSchool()", () => {
        const testValue = "USYD";
        const employ = new Intern("Sam", 10, "test@bootcamp.com", testValue);

        expect(employ.getSchool()).toBe(testValue);
    });
    
});
