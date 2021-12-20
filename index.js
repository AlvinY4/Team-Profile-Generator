const inquirer = require("inquirer");
const fs = require("fs");

const generateHTMl = require('./src/generateHTML');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern'); 

team = []; 


const addManager = () => {
    inquirer.prompt([
        {
            typr: 'input',
            name: 'name',
            message: 'what is the team managers name? (required)',
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is the managers id? (required)',
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the managers email address? (required)',
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'what is the managers office number (required)',
        }, 
        {
            type: 'list',
            name: 'addMember',
            message: 'What team memeber would you like to add next?',
            choices: ['Engineer', 'Intern', 'None'], 

        }
        
    ])

    .then((managerAnswers) => {
        const manager = new Manager(managerAnswers.id, managerAnswers.name, managerAnswers.email, managerAnswers.officeNumber)
        team.push(manager)
        switch(managerAnswers.addMember) { 
            case 'Engineer':
                addEngineer(); 
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeToFile('dist/index.html', generateHTMl(team)) 
        }
    });
};

const addEngineer = () => {
    console.log(`
    =================
    Adding Engineer to the team
    =================
    `);

    return inquirer.prompt ([
        {
            type:'input',
            name:'name',
            massage: 'What is the engineers name? (required)'
        },
        {
            type:'input',
            name:'id',
            message: 'What is the engineers id? (required)',
        },
        {
            type:'input',
            name:'email',
            message: 'What is the engineers email address? (required)', 
        },
        {
            type:'input',
            name:'github',
            message: 'What is the engineers GitHub account? (required)',
        },
        {
            type:'list',
            name:'addMember',
            message:'What team memeber would like to add next?',
            choices: ['Engineer', 'Intern', 'None'],
        }
    ])
    .then((engineerAnswers) => {
        const engineer = new Engineer(engineerAnswers.id, engineerAnswers.name, engineerAnswers.email, engineerAnswers.github)
        team.push(engineer)
        switch(engineerAnswers.addMember) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeToFile('dist/index.html', generateHTML(team))
        }
    })

}

const addIntern = () => {
    console.log(`
    =================
    Adding Intern to the team
    =================
    `);

    inquirer.prompt([
        {
            type:'input',
            name:'name',
            massage: 'What is the interns name? (required)'
        },
        {
            type:'input',
            name:'id',
            message: 'What is the interns id? (required)',
        },
        {
            type:'input',
            name:'email',
            message: 'What is the interns email address? (required)', 
        },
        {
            type:'input',
            name:'school',
            message: 'What is the interns school? (required)',
        },
        {
            type:'list',
            name:'addMember',
            message:'What team memeber would like to add next?',
            choices: ['Engineer', 'Intern', 'None'],
        }
    ])
    .then((internAnswers) => {
        const intern = new Intern(internAnswers.id, internAnswers.name, internAnswers.email, internAnswers.school)
        team.push(intern)
        switch(internAnswers.addMember) {
            case 'Engineer':
                addEngineer();
                break;
            case 'Intern':
                addIntern();
                break;
            default:
                writeToFile('dist/index.html', generateHTML(team))
            
        }
    }) 
}

addManager(); 

function writeToFile(filename, data) {
    fs.writeFile(filename, data, (err) => {
        if(err) throw err;
        console.log('file succesfully made!')
    });
};




