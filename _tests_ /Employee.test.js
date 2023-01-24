const Employee = require('../lib/Employee')
const employee = new Employee('austin' , '2048323', 'austinmcclarren1@gmail.com');

test('test for employee', () => {
    expect(employee.name).toBe('austin')
    expect(employee.id).toBe('2048323')
    expect(employee.email).toBe('austinmcclarren1@gmail.com')

});

test('test if we get back the name', ()=> {
    expect(employee.getName()).toBe('austin')
})
test('test if we get back the id', ()=> {
    expect(employee.id()).toBe('2048323')
})
test('test if we get back the email', ()=> {
    expect(employee.email()).toBe('austinmcclarren1@gmail.com')
})