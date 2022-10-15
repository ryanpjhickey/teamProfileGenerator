const Intern = require("../lib/Intern");

test("School", () => {
    const testValue = "RyanIntern";
    const e = new Intern("Ryan", 1, "Ryan@Ryan.com", testValue);
    expect(e.school).toBe(testValue);
});

test("getRole returns intern", () => {
    const testValue = "Intern";
    const e = new Intern("Ryan", 1, "Ryan@Ryan.com", "RyanIntern");
    expect(e.getRole()).toBe(testValue);
});

test("getSchool() returns School name", () => {
    const testValue = "RyanIntern";
    const e = new Intern("Ryan", 1, "Ryan@Ryan.com", testValue);
    expect(e.getSchool()).toBe(testValue);
});