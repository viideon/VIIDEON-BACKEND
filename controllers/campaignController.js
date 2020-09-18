const campaignService = require("../services/campaignService");
module.exports.getTemplates = async (req, res) => {
  try {
    const templates = await campaignService.getTemplates();
    if (!templates) {
      res.status(400).json({ message: "No templates found" });
    } else {
      res.status(200).json({ templates });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports.addTemplate = async (req, res) => {
  let template = req.body;
  try {
    const newTemplate = await campaignService.addTemplate(template);
    if (newTemplate) {
      res.status(201).json({ template: newTemplate });
    } else {
      res.status(400).json({ message: "failed to add new template" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.updateTemplate = async (req, res) => {
  try {
    const { template, id } = req.body;
    const updatedTemplate = await campaignService.updateTemplate(id, template);
    if (updatedTemplate) {
      res.status(200).json({ template: updatedTemplate });
    } else {
      res.status(400).json({ message: "failed to add template" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.deleteTemplate = async (req, res) => {
  try {
    const { id } = req.params;
    await campaignService.deleteTemplate(id);
    res.status(200).json("Successfully Deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
