const contacts = require("./contacts");
const { CLIError } = require("./helpers");
const { ctrlWrapper } = require("./helpers");
require("colors");

const getAllContacts = async () => {
  const allContacts = await contacts.listContacts();
  if (!allContacts) {
    return;
  }

  console.table(allContacts);
};

const getContactById = async (id) => {
  const contactById = await contacts.getContactById(id);
  if (!contactById) {
    throw CLIError("There is no contact with the specified id");
  }
  console.log(contactById);
};

const addNewContact = async (data) => {
  if (!data?.name || !data?.email || !data?.phone) {
    throw CLIError("There is no all contact data");
  }
  const newContact = await contacts.addContact(data);

  console.log(newContact);
  return newContact;
};

const deleteContactById = async (id) => {
  const deletedContactById = await contacts.removeContact(id);

  if (!deletedContactById) {
    throw CLIError("There is no contact with the specified id");
  }

  console.log(deletedContactById);
};

module.exports = {
  getAllContacts: ctrlWrapper(getAllContacts),
  getContactById: ctrlWrapper(getContactById),
  addNewContact: ctrlWrapper(addNewContact),
  deleteContactById: ctrlWrapper(deleteContactById),
};
