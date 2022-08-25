# NodeCurse-1 📝 🗄

Repository created for study and fun reasons, that contains a node application using simple commands in the terminal!

## What is this or what is inside? 🤔 🔦

This is a very basic project, written in Javascript and run by Node.js, that I've worked on in my spare time. It consists of a simple application to store notes with a title and body inside a Json file.

Also find some files that I like to play from time to time and refresh my memory about specific aspects like modules, scopes, types of functions declarations, and others. Called "playground".

The libraries (modules) 📦 that i use in this project are:

- `Yargs` : Which helped me to use the command line and its tools in an extremely easy and interactive way! [Yargs](https://www.npmjs.com/package/yargs).
- `Chalk` : Which I use to style responses and messages in an intuitive and fun way! [Chalk](https://www.npmjs.com/package/chalk).
- `File System` : Which I use to be able to read/write to the JSON file (amazing!) [File System](https://nodejs.org/api/fs.html).

### How to run it? 🏁 🏎

First of all, to run this simple but great project, clone the repo to your computer, enter to the directory "notes-app" with the command _`cd notes-app`_ and install its dependencies with the command _`npm install`_ or _`npm i`_.

When you have installed the dependencies you can go to the **_'notes-app'_** directory if you want to run the notes project, and run the app.js file type in the terminal

```bash
node app.js
```

Now, if you want to enter the playground go to the **_'playground'_** directory, and run wherever file that you want using the command

```bash
node thejavascriptfile.js
```

### The magic commands to manage the notes are ⌨️ 🖥

ℹ Before starting I should clarify that some commands require one or two parameters, these parameters are:
`--title=""` `--body=""`

Later in each of the commands it will be explained what they mean.

- The add note command ✏️: Command to add a note to the JSON file, this command requires two parameters which are the **_title_** which is a name, identifier or keyword of the note or what it will contain. The other parameter is **_body_** which is the content of said note.

In the following example you can see how to add a note:
```bash
node app.js add title="Example of a Title" body="Example of a Body"
```

- The remove note command 🗑: Command to remove a note from the JSON file, this command requires a single parameter which is the **_title_** of the note which is the identifier of the note.

In the following example you can see how to remove a note:
```bash
node app.js remove title="Example of a Title"
```

- The list notes command 📚: Command to list all the notes contained in the JSON file, this command does not require any additional parameters.

In the following example you can see how to list all notes:
```bash
node app.js list
```

- The read note command 👀: Command to read a specific note in the JSON file, this command requires a single parameter which is the **_title_** of the note to be read.

In the following example you can see how to read a note:
```bash
node read.js add title="Example of a Title"
```

Also if you want to see a description, help or what parameters are required about the command you want to run you can add after the command to use the word **_"--help"_**, which will explain in more detail what is required and what the command delivers.

In the following example you can see how to use the help parameter for a command 🚑:
```bash
node read.js add --help
```

📬 If you'd like to take a look at it and have any suggestions, feel free to do so.
