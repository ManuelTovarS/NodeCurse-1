//NPM Modules
const yargs = require("yargs");
//Own Modules
const { addNote, removeNote, listNotes, readNote } = require("./notes");
const { argv } = require("process");

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

//Create list command
yargs.command({
  command: "list",
  description: "List your notes",
  handler: () => listNotes(),
});

//Create read command
yargs.command({
  command: "read",
  description: "Read a note",
  builder: {
    title: {
      describe: "This option allow you to read a note by enter the title",
      type: "string",
      demandOption: true,
    },
  },
  handler: (argv) => readNote(argv.title),
});

yargs.parse();
