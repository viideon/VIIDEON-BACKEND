const campaignTemplate = require("../models/campaignTemplate");

const addTemplate = template => {
  const newTemplate = new campaignTemplate({
    ...template
  });
  return newTemplate.save();
};
const getTemplates = () => {
  return campaignTemplate.find();
};

module.exports = { addTemplate, getTemplates };
