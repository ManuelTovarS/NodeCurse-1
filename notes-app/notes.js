//Core node modules
const fileSystem = require("fs");
//Npm modules
const chalk = require("chalk");

const addNote = (title, body) => {
  const notes = loadNotes();

  const duplicateNotes = notes.filter(
    (note) => note.title.toLowerCase() === title.toLowerCase()
  );

  if (duplicateNotes.length === 0) {
    notes.push({
      title,
      body,
    });
    saveNotes(notes);
    console.log(chalk.green.bold("Note add succesfully!"));
  } else {
    return console.log(
      chalk.yellow.bold(
        "The note already exist, please pick another title!"
      )
    );
  }
};

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

const saveNotes = (notes) => {
  const jsonFile = JSON.stringify(notes);
  fileSystem.writeFileSync("notes.json", jsonFile);
};

const getNotes = () => {
  return "Your notes...";
};

module.exports = {
  getNotes,
  addNote,
};
