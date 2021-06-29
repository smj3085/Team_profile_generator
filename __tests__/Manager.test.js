const Manager = require("../lib/Manager");

describe("Manager Test sequence", () => {
    it("Can set office number via constructor", () => {
        const testValue = 97891234;
        const employ = new Manager("Sam", 10, "test@bootcamp.com", testValue);
    
        expect(employ.officePhone).toBe(testValue);
    });

    it("getRole() should return 'Manager'", () => {
        const testValue = "Manager";
        const employ = new Manager("Sam", 10, "test@bootcamp.com", 1);

        expect(employ.getRole()).toBe(testValue);
    });

    it("Can get office number via getOfficeNumber()", () => {
        const testValue = 97891234;
        const employ = new Manager("Sam", 10, "test@bootcamp.com", testValue);

        expect(employ.getOfficePhone()).toBe(testValue);
    });

    
});