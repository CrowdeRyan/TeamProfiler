const Engineer = require("../lib/Engineer");

test("creates an engineer object", () => {
  const employee = new Engineer("Steve", 100, "Steve@gmail.com", "Cap45");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toStrictEqual(expect.any(String));
  expect(employee.github).toEqual(expect.any(String));
});
