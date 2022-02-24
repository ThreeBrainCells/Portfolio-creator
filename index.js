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
      message: 'What is your user name?',
      name: 'username',
    },
    {
      type: 'password',
      message: 'What is your password?',
      name: 'password',
    },
    {
      type: 'password',
      message: 'Re-enter password to confirm:',
      name: 'confirm',
    },
  ])
  .then((response) =>
    response.confirm === response.password
      ? console.log('Success!')
      : console.log('You forgot your password already?!')
  );
