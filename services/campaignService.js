const campaignTemplateModel = require("../models/campaignTemplate");
const Industries = require("../models/industries");

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
  return Industries.find()
}
const addIndustry = (industry) => {
  return Industries.save({...industry});
}
const updateIndustry = (_id, industry) => {
  return Industries.updateOne({_id}, {...industry})
}
const deleteIndustry = async (_id) => {
  await campaignTemplateModel.deleteByIndustryId({industryId: _id});
  return Industries.delete({_id});
}
module.exports = { addTemplate, getTemplates, updateTemplate, deleteTemplate, getIndustries, addIndustry, updateIndustry, deleteIndustry };
