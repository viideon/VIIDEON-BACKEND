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
const updateTemplate = (id, template) => {
  return campaignTemplate.findByIdAndUpdate(id, template, { new: true });
};
module.exports = { addTemplate, getTemplates, updateTemplate };
