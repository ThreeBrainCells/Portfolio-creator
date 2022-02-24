const inquirer = require('inquirer');
const fs = require('fs');

var htmlContent = `<html><br>
<head><br>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>${data.username}'s Portfolio</title>
</head><br>
<body><br>
</body>
</html>`;

fs.writeFile('/my-portfolio.html', htmlContent, (err) => 
err ? console.error(err) : console.log('Success!'));

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
