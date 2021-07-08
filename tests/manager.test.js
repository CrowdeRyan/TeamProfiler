const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const employee = new Manager("Steve", 100, "Steve@gmail.com", 101);

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toStrictEqual(expect.any(String));
  expect(employee.officeNumber).toEqual(expect.any(Number));
});
