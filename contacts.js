const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contactById = contacts.find((elem) => elem.id === contactId);

  return contactById || null;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((elem) => elem.id === contactId);

  if (index === -1) {
    return null;
  }

  const [deletedContact] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return deletedContact;
}

async function addContact(data) {
  const contacts = await listContacts();
  const newContact = { ...data, id: nanoid() };

  contacts.push(newContact);

  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));

  return newContact;
}

module.exports = { listContacts, getContactById, removeContact, addContact };
