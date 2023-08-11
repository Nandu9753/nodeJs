const chalk = require('chalk');
const validate = require('validator');

console.log(chalk.green.bgRed.bold('Chalk module'));
console.log(`
CPU: ${chalk.red('90%')}
RAM: ${chalk.green('40%')}
DISK: ${chalk.yellow('70%')}
`);
console.log(chalk.rgb(123, 45, 67).underline('Underlined reddish color'));
console.log(chalk.green.bgRed.bold('validator module'));
console.log(validate.isEmail("narendra@gmail.com"));
console.log(validate.isEmail("narendra"));