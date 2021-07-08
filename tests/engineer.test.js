const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const employee = new Engineer("Steve", 100, "Steve@gmail.com", "Cap45");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toStrictEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
});

test("get the employee's role", () => {
  const employee = new Engineer("Tony", 100, "Starky@gmail.com", "IamIron");

  expect(employee.getRole()).toEqual("Engineer");
});
