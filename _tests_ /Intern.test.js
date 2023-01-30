const Intern = require('../lib/Intern')

//to get back intern 
test("tests if we can get intern", () => {
    let intern = new Intern("austin", "3123", "austinmcclarren7@gmail.com", "UCF");
    expect(intern.name).toBe("austin");
    expect(intern.id).toBe("3123");
    expect(intern.email).toBe("austinmcclarren7@gmail.com");
    expect(intern.school).toBe("UCF");
})
