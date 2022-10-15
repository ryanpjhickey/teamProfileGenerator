const Engineer = require("../lib/Engineer");

test("Github Account", () => {
    const testValue = "RyanEngineer";
    const e = new Engineer("Ryan", 1, "Ryan@Ryan.com", testValue);
    expect(e.github).toBe(testValue);
});

test("getRole returns engineer", () => {
    const testValue = "Engineer";
    const e = new Engineer("Ryan", 1, "Ryan@Ryan.com", "RyanEngineer");
    expect(e.getRole()).toBe(testValue);
});

test("getGithub() returns Github username", () => {
    const testValue = "RyanEngineer";
    const e = new Engineer("Ryan", 1, "Ryan@Ryan.com", testValue);
    expect(e.getGithub()).toBe(testValue);
});