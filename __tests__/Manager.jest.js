const Manager = require("../lib/Manager");

test("Office Number", () => {
    const testValue = "RyanManager";
    const e = new Manager("Ryan", 1, "Ryan@Ryan.com", testValue);
    expect(e.officeNumber).toBe(testValue);
});

test("getRole returns Manager", () => {
    const testValue = "Manager";
    const e = new Manager("Ryan", 1, "Ryan@Ryan.com", "RyanManager");
    expect(e.getRole()).toBe(testValue);
});

test("getOfficeNumber() returns OfficeNumber", () => {
    const testValue = "RyanManager";
    const e = new Manager("Ryan", 1, "Ryan@Ryan.com", testValue);
    expect(e.getOfficeNumber()).toBe(testValue);
});