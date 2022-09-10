const campaignTemplateModel = require("../models/campaignTemplate");
const industriesModel = require("../models/industries");

const addTemplate = template => {
  return campaignTemplateModel.create({
    ...template
  });
};
const getTemplates = () => {
  return campaignTemplateModel.find();
};
const updateTemplate = (id, template) => {
  return campaignTemplateModel.update(id, template);
};
const deleteTemplate = (id) => {
  return campaignTemplateModel.delete({_id: id})
}
const getIndustries = () => {
  return industriesModel.find()
}
const addIndustry = (industry) => {
  return industriesModel.create({...industry});
}
const updateIndustry = (_id, industry) => {
  return industriesModel.update({_id}, {...industry})
}
const deleteIndustry = async (_id) => {
  await campaignTemplateModel.deleteByIndustryId(_id);
  console.log('Campaigns deleted');
  return industriesModel.delete({_id});
}
module.exports = { addTemplate, getTemplates, updateTemplate, deleteTemplate, getIndustries, addIndustry, updateIndustry, deleteIndustry };
