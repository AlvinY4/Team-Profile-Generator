const Intern = require('../lib/Intern');

test('creates an intern', () => {
    const intern = new Intern('Alvin', 10, 'leroy.yearby@gmail.com','UNC');
    expect(intern.school).toEqual(expect.any(String));
});

test('gets intern school', () => {
    const intern = new Intern('Alvin', 10, 'leroy.yearby@gmail.com', 'UNC');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('gets teammate role', () => {
    const intern = new Intern('Alvin', 10, 'leroy.yearby@gmail.com', 'UNC');
    expect(intern.getRole()).toEqual("Intern");
}); 


