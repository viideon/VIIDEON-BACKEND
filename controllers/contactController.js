const contactService = require("../services/contactService");

module.exports.createContact = async (req, res) => {
  try {
    const contact = await contactService.createContact(req.body);
    if (contact) {
      res.json({
        contact: contact,
        message: "contact created"
      });
    } else {
      return res.json({
        message: "error creating contact"
      });
    }
  } catch (err) {
    res.json({
      error: err,
      message: "error creating contact"
    });
  }
};
