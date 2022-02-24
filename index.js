const inquirer = require('inquirer');
const fs = require('fs');


inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'location',
        message: 'where Are you located?'
    },
    {
        type: 'input',
        name: 'bio',
        message:'Please write your bio?'
    },
    {
        type: 'input',
        name: 'linkedInName',
        message: 'What is your linkedIn username?'
    },
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
