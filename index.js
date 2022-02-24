const inquirer = require('inquirer');
const fs = require('fs');

var htmlContent = `<html><br>
<head><br>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
</head><br>
</html>`;

fs.writeFile('/my-portfolio.html', htmlContent, (err) => 
err ? console.error(err) : console.log('Success!'));