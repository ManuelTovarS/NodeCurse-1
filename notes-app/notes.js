//Core node modules
const fileSystem = require("fs");
//Npm modules
const chalk = require("chalk");

/**
 * Method to load existing notes by reading the JSON file called notes.json
 * @return {Array}
 */
const loadNotes = () => {
  try {
    const dataBuffer = fileSystem.readFileSync("notes.json");
    const dataJSON = dataBuffer.toString();
    const data = JSON.parse(dataJSON);
    return data;
  } catch (error) {
    console.log(
      chalk.red.bold(
        "There is no file of the notes created yet, creating it..."
      )
    );
    return [];
  }
};

/**
 * Method to add (write) in a JSON file the new notes entered by the user
 * @param {Array} notes the array of notes
 */
const saveNotes = (notes) => {
  const jsonFile = JSON.stringify(notes);
  fileSystem.writeFileSync("notes.json", jsonFile);
};

/**
 * Method to add a note, it takes two parameters
 * @param {string} title - the title of the note
 * @param {string} body - the body or the content of the note
 */
const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNote = notes.find(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  );

  if (!duplicateNote) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.bold("Note add succesfully!"));
  } else {
    return console.log(
      chalk.yellow.bold(
        "The note with title: " +
          chalk.red.inverse(title) +
          ", already exist please pick another title!"
      )
    );
  }
};

/**
 * Method to delete a note by title
 * @param {string} title the title of the note to delete
 */
const removeNote = (title) => {
  const notes = loadNotes();

  const newNotes = notes.filter(
    (note) => note.title.toLowerCase() !== title.toLowerCase()
  );

  if (newNotes.length === notes.length) {
    console.log(
      chalk.yellow.bold(
        "There is no note with the following title: ",
        chalk.red.inverse(title),
        ", nothing change"
      )
    );
  } else {
    console.log(
      chalk.green.bold(
        "The note with the following title: ",
        title,
        ", has been deleted"
      )
    );
    saveNotes(newNotes);
  }
};

/**
 * Method to list the notes in the terminal
 * @returns {string} That print all notes
 */
const listNotes = () => {
  const notes = loadNotes();
  let count = 1;

  console.log(chalk.green.bold("Your notes are:"));
  notes.forEach((note) => {
    console.log(chalk.yellow.bold(count + "-" + note.title));
    count++;
  });
};

/**
 * Method to show the title and body of the note in the terminal
 * @param {string} title the title of the note to read
 */
const readNote = (title) => {
  const notes = loadNotes();

  const noteToRead = notes.find(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  );

  if (noteToRead) {
    console.log(chalk.green.bold(noteToRead.title));
    console.log(chalk.grey.underline("-", noteToRead.body));
  } else {
    console.log(
      chalk.red.bold(
        "The note with the title: " +
          chalk.red.inverse("'" + title + "'") +
          " doesn't exist"
      )
    );
  }
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
};
