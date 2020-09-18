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
const deleteTemplate = (id) => {
  return campaignTemplate.deleteOne({_id: id})
}
module.exports = { addTemplate, getTemplates, updateTemplate, deleteTemplate };
