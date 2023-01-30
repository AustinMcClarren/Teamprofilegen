const Employee = require('../lib/Employee')

// testing to see if we get name back 
test('test if we get back the name', () => {
    const name = 'austin';
    const employee = new Employee(name)
    expect(employee.getName()).toBe(name)
})
// testing to see if we get id back
test('test if we get back the id', () => {
    const id = 12345;
    const employee = new Employee('austin', id)
    expect(employee.getId()).toBe(id)
})
// testing to see if we get email back
test('test if we get back the email', () => {
    const email = 'austin@gmail.com';
    const employee = new Employee('ian', 2, email)
    expect(employee.getEmail()).toBe(email)
})


