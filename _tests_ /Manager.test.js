const Manager = require('./lib/Manager');
const manager = new Manager('austin' , '2048323', 'austinmcclarren1@gmail.com', '213');

test('testing the constructor here', () => {
    expect(manager.name).toBe('austin')
    expect(manager.id).toBe('2048323')
    expect(manager.email).toBe('austinmcclarren1@gmail.com')
    expect(manager.offficeNumber).toBe('213')

});

test('test if we get back the name', ()=> {
    expect(manager.getName()).toBe('austin')
})
test('test if we get back the id', ()=> {
    expect(manager.id()).toBe('2048323')
})
test('test if we get back the email', ()=> {
    expect(manager.email()).toBe('austinmcclarren1@gmail.com')
})
test('test if we get back the officenumber', ()=> {
    expect(manager.offficeNumber()).toBe('213')
})
test('test if we get back the role', ()=> {
    expect(manager.getRole()).toBe('Manager')
})
