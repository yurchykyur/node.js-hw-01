const fs = require("fs/promises");
const contacts = require("./contacts");
const { Command } = require("commander");

const program = new Command();
program
  .option("-a, --action, <type> ", "choose action")
  .option("-i --id <type> ", "user id")
  .option("-n, --name <type> ", "user name")
  .option("-e, --email <type> ", "user email")
  .option("-p, --phone <type> ", "user phone");

program.parse();

const options = program.opts();

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);

    case "get":
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.log(newContact);

    case "remove":
      const deletedContactById = await contacts.removeContact(id);
      return console.log(deletedContactById);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(options);
