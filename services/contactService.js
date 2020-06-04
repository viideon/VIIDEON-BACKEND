const Contact = require("../models/contact");

const createContact = contactData => {
  const contact = new Contact({
    ...contactData
  });
  return contact.save();
};

module.exports = {
  createContact
};
