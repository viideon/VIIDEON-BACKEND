const campaignService = require("../services/campaignService");
module.exports.getIndustries = async (req, res) => {
  try {
    const industries = await campaignService.getIndustries();
    if (!industries) throw({ message: "No templates found" });
      res.status(200).json({ industries });
  } catch (error) {
    console.error('Error loading industries', {error});
    res.status(400).json({ message: error.message });
  }
};

module.exports.addIndustry = async (req, res) => {
  try {
    const newTemplate = await campaignService.addIndustry(req.body);
    if (newTemplate) return res.status(201).json({ template: newTemplate });
      throw ({ message: "failed to add new template" });
  } catch (error) {
    console.error('Error adding industry', {error});
    res.status(400).json({ message: error.message });
  }
};
module.exports.updateIndustry = async (req, res) => {
  try {
    const { industry, id } = req.body;
    const updated = await campaignService.updateIndustry(id, industry);
    if (updated) return res.status(200).json({ message: "Successfully updated!" });
    throw ({ message: "failed to add industry" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
module.exports.deleteIndustry = async (req, res) => {
  try {
    const { id } = req.params;
    console.log('Deleting industry', {id});
    await campaignService.deleteIndustry(id);
    res.status(200).json("Successfully Deleted");
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
