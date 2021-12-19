const Manager = require('../lib/Manager'); 

test('creates a manager', () => {
    const manager = new Manager('Alvin', 10, 'leroy.yearby@gmail.com', 1); 
    expect(manager.officeNumber).toEqual(expect.any(Number)); 
});

test('gets teammate role', () => {
    const manager = new Manager('Alvin', 10, 'leroy.yearby@gmail.com'); 
    expect(manager.getRole()).toEqual("Manager"); 
});

