const contactModel = require("../models/contact");

const createContact = contactData => {
  return contactModel.create({
    ...contactData
  });
};

module.exports = {
  createContact
};
