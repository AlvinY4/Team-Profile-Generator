const Engineer = require('../lib/Engineer'); 

test('creates an engineer', () => {
    const engineer = new Engineer('Alvin', 10, 'leroy.yearby@gmail.com', 'AlvinY4');

    expect(engineer.github).toEqual(expect.any(String)); 
});

test('gets engineer github', () => {
    const engineer = new Engineer('Alvin', 10, 'leroy.yearby@gmail.com', 'AlvinY4');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString())); 

});

test('gets teammate role', () => {
    const engineer = new Engineer('Alvin', 10, 'leroy.yearby@gmail.com', 'AlvinY4'); 

    expect(engineer.getRole()).toEqual("Engineer"); 
}); 