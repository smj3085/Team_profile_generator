const Employee = require("../lib/Employee");

describe("Employee Test Sequence", () => {
    it("Can instantiate Employee instance", () => {
        const employ = new Employee();

        expect(typeof(employ)).toBe("object");
    });

    it("Can set name via constructor arguments", () => {
        const name = "Anne";
        const employ = new Employee(name);
        
        expect(employ.name).toBe(name);
    });

    it("Can set id via constructor arguments", () => {
        const testValue = "10";
        const employ = new Employee("Sam", testValue);

        expect(employ.id).toBe(testValue)
    });

    it("Can set email via constructor arguments", () => {
        const testValue = "test@bootcamp.com";
        const employ = new Employee("Sam", 10, testValue);

        expect(employ.email).toBe(testValue);
    });

    describe("getName", () => {
        it("Can get name via getName()", () => {
            const name = "Anne";
            const employ = new Employee(name);
            
            expect(employ.getName()).toBe(name);
        });
    });

    describe("getId", () => {
        it("Can get id via getId()", () => {
            const testValue = "10";
            const employ = new Employee("Sam", testValue);

            expect(employ.getId()).toBe(testValue);
        });
    });

    describe("getEmail", () => {
        it("Can get email via getEmail()", () => {
            const testValue = "test@bootcamp.com";
            const employ = new Employee("Sam", 10, testValue);

            expect(employ.getEmail()).toBe(testValue);
        });
    });

    describe("getRole", () => {
        it("getRole() should return 'Employee'", () => {
            const testValue = "Employee";
            const employ = new Employee("Anne", 10, "test@bootcamp.com");

            expect(employ.getRole()).toBe(testValue);
        });
    });

})