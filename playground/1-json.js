const fileSystem = require('fs');

/* const book = {
  title: "El Quijote de la Mancha",
  author: "Miguel de Cervantes",
};
const bookString = JSON.stringify(book);
fileSystem.writeFileSync('../playground/note.json', bookString); */

/* const dataBuffer = fileSystem.readFileSync('./note.json');
const dataJSON = dataBuffer.toString();
const data = JSON.parse(dataJSON); */

//Challenge
const dataJSON = fileSystem.readFileSync('note.json').toString();
const data = JSON.parse(dataJSON);
data.name = "Manuel J. Tovar";
data.age = 28;
data.planet = "Jupiter";

const newJSON = JSON.stringify(data);

fileSystem.writeFileSync('note2.json', newJSON);