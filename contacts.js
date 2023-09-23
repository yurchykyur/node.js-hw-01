const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");
const { CLIError } = require("./helpers");
require("colors");
const { writeContactsFile } = require("./helpers");

const contactsPath = path.join(__dirname, "db/contacts.json");

async function listContacts() {
  try {
    const contacts = await fs.readFile(contactsPath);
    console.log(`Вдалося прочитати файл ${contactsPath}`.blue);
    return JSON.parse(contacts);
  } catch (error) {
    throw CLIError(`В файлі відсутні дані ${contactsPath}`.red);
  }
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contactById = contacts.find((elem) => elem.id === contactId);

  return contactById;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((elem) => elem.id === contactId);

  if (index === -1) {
    return null;
  }

  const [deletedContact] = contacts.splice(index, 1);
  await writeContactsFile(contacts, contactsPath);

  return deletedContact;
}

async function addContact(data) {
  const contacts = await listContacts();
  const newContact = { ...data, id: nanoid() };

  contacts.push(newContact);
  await writeContactsFile(contacts, contactsPath);

  return newContact;
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
