const fs = require("fs/promises");
const path = require("path");

const contactsPath = "";

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код. Повертає масив контактів.
  console.log("Повертає масив контактів.");
}

function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
  console.log(
    "Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений."
  );
}

function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
  console.log(
    "Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений."
  );
}

function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту.
  console.log("Повертає об'єкт доданого контакту.");
}

module.exports = { listContacts, getContactById, removeContact, addContact };
