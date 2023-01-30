const Engineer = require('../lib/Engineer');

//the test to see if we get back engineer
test("tests if we can get engineer", () => {
    const engineer = new Engineer("austin", "3123", "austinmcclarren7@gmail.com",'austinmcclarren');
    expect(engineer.name).toBe("austin");
    expect(engineer.id).toBe("3123");
    expect(engineer.email).toBe("austinmcclarren7@gmail.com");
    expect(engineer.github).toBe('austinmcclarren')
})

