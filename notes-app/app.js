//NPM Modules
const validator = require("validator");
const yargs = require("yargs");
//Own Modules
const { addNote, removeNote, listNotes, getNotes } = require("./notes");
const { argv } = require("process");

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

//Create add command
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "This option allow you to enter the title of the note",
      type: "string",
      demandOption: true,
    },
    body: {
      describe: "This option allow you to enter the body of the note",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => addNote(argv.title, argv.body),
});

//Create remove command
yargs.command({
  command: "remove",
  builder: {
    title: {
      describe:
        "This option allow you to enter the title of the note to delete",
      type: "string",
      demandOption: true,
    },
  },
  description: "Remove a note",
  handler: (argv) => removeNote(argv.title),
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
  handler: () => listNotes(),
});

yargs.parse();
