const Manager = require("../lib/Manager");

//to see if we get manager back
test("tests if we can create an manager object", () => {
    let manager = new Manager("austin", "3456", "austinmcclarren@gmail.com", "1122");
    expect(manager.name).toBe("austin");
    expect(manager.id).toBe("3456");
    expect(manager.email).toBe("austinmcclarren@gmail.com");
    expect(manager.officeNumber).toBe("1122");
})
