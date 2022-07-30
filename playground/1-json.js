const fileSystem = require('fs');

const book = {
  title: "El Quijote de la Mancha",
  author: "Miguel de Cervantes",
};

const bookString = JSON.stringify(book);


fileSystem.writeFileSync('../playground/note.json', bookString);


