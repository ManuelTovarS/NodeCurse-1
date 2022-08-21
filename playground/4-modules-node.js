//Core node modules
const fileSystem = require("fs");

//NPM Modules
const validator = require("validator");
const yargs = require("yargs");
const chalk = require("chalk");

//fileSystem (core package)
fileSystem.writeFileSync(
  "note.txt",
  "Hello this is a note created by manuel jose tovar "
);
fileSystem.appendFileSync("note.txt", ",and this is the continue XD");

//Example validator (npm package)
const email = "email@gmail.com";
const url = "https://google.com";
console.log(validator.isEmail(email));
console.log(validator.isURL(url));

//Example of the use us chalk (npm package)
console.log(chalk.red.bold.inverse("Chalk use!"));

//Use of the yargs, start of the project
console.log(process.argv);
console.log(process.argv[2]);

//Change the version of the yargs
yargs.version("1.1.0");

yargs.parse();