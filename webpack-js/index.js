//этот пример показан для того чтобы знать как мы можем связать 
//библиотеку с нашим кодом

const chalk = require('chalk');
const msg = 'Bandeled with webpack';

console.log(chalk.black.bgGreenBright(msg));

console.log(chalk.white.bgRedBright(msg + msg));