const campaignTemplate = require("../models/campaignTemplate");
const Industries = require("../models/industries");

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
const getIndustries = () => {
  return Industries.find()
  // .populate("styles")
}
const addIndustry = (industry) => {
  const newIndustry = new Industries({...industry})
  return newIndustry.save();
}
const updateIndustry = (_id, industry) => {
  return Industries.updateOne({_id}, {...industry})
}
const deleteIndustry = async (_id) => {
  await campaignTemplate.deleteMany({industryId: _id});
  return Industries.deleteOne({_id});
}
module.exports = { addTemplate, getTemplates, updateTemplate, deleteTemplate, getIndustries, addIndustry, updateIndustry, deleteIndustry };
