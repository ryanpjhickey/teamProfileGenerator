const Employee = require("../lib/Employee");

test("Employee Name", () => {
    const name = "Ryan";
    const e = new Employee(name);
    expect(e.name).toBe(name);
});

test("Employee ID", () => {
    const testValue = 100;
    const e = new Employee("Ryan", testValue);
    expect(e.id).toBe(testValue);
});

test("Employee email", () => {
    const testValue = "Ryan@Ryan.com";
    const e = new Employee("Ryan", 1, testValue);
    expect(e.email).toBe(testValue);
});

test("Can get name via getName()", () => {
    const testValue = "Ryan";
    const e = new Employee(testValue);
    expect(e.getName()).toBe(testValue);
});

test("Can get id via getId()", () => {
    const testValue = 100;
    const e = new Employee("Ryan", testValue);
    expect(e.getId()).toBe(testValue);
});

test("Can get email via getEmail()", () => {
    const testValue = "Ryan@Ryan.com";
    const e = new Employee("Ryan", 1, testValue);
    expect(e.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const e = new Employee("Ryan", 1, "Ryan@Ryan.com");
    expect(e.getRole()).toBe(testValue);
});