//Core modules
const fileSystem = require("fs");
//NPM Modiles
const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
//Own Modules
const { getNotes } = require("./notes");

//fileSystem (core package)
/* fileSystem.writeFileSync('note.txt', 'Hello this is a note created by manuel jose tovar ');
fileSystem.appendFileSync('note.txt', ',and this is the continue XD'); */

//Example validator (npm package)
/* const email = "manueljosetovar@gmailcom";
const url = "https://google.com";
console.log(validator.isEmail(email));
console.log(validator.isURL(url)); */

//Example of the use us chalk (npm package)
/* console.log(chalk.red.bold.inverse('Chalk use!')); */

//Use of the yargs, start of the project
/* console.log(process.argv);
console.log(process.argv[2]); */

//Change the version of the yargs
yargs.version("1.1.0");

//Add, remove, read, list

const handlerAdd = () => {
  console.log("Adding a new note");
};

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "This option allow you to enter the title of the note",
      type: String,
    },
  },
  handler: handlerAdd,
});

//Create remove command
yargs.command({
  command: "remove",
  description: "Remove a note",
  handler: function () {
    console.log("Removing the note");
  },
});

//Create read command
yargs.command({
  command: "read",
  description: "Read a note",
  handler: function () {
    console.log("Reading the note");
  },
});

//Create list command
yargs.command({
  command: "list",
  description: "List your notes",
  handler: function () {
    console.log("Listing out all notes");
  },
});

yargs.argv;
