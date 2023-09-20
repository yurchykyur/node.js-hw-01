const fs = require("fs/promises");
const contacts = require("./contacts");

// fs.readFile("./db/contacts.json")
//   .then((data) => console.log(data))
//   .catch((error) => console.log(error.message));

// const fileOperation = async () => {
//   const text = await fs.readFile("./db/contacts.json", "utf-8");
//   console.log(text);
//   //   const data = await fs.readFile("./db/contacts.json");
//   //   console.log(data.toString());
// };

console.log(contacts.listContacts());
console.log(contacts.addContact());
console.log(contacts.getContactById());
console.log(contacts.removeContact());

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      return console.log(allContacts);

    case "get":
      const contactById = await contacts.getContactById(id);
      return console.log(contactById);

    case "add":
      const newContact = await contacts.addContact(name, email);
      return console.log(newContact);

    case "remove":
      const deletedContactById = await contacts.removeContact();
      return console.log(deletedContactById);

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};
