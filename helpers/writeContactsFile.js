const fs = require("fs/promises");

const writeContactsFile = async (contacts, contactsPath) => {
  try {
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    console.log(`Вдалося записати файл ${contactsPath}`.blue);
  } catch (error) {
    throw CLIError(`Не вдалося записати в файл ${contactsPath}`.red);
  }
};

module.exports = { writeContactsFile };
