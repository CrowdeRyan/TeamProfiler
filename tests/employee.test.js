const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee("Steve", 100, "Steve@gmail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toStrictEqual(expect.any(String));
});
