const chatVidServices = require("../services/chatvid")

const get = async (req, res) => {
  try {
    const { userId, chatvidId } = req.query;
    if(!userId && !chatvidId) throw({message: "Invalid Request!"})
    let chatvids = undefined;
    if(userId) {
      chatvids = await chatVidServices.getChatvidByUserId(userId);
    }
    if(chatvidId) {
      chatvids = await chatVidServices.getChatvidById(chatvidId)
    }

    res.status(200).json({ message: chatvids })
  } catch (error) {
    console.log("Error message: ", error.message)
    res.status(400).json({ message: error.message })
  }
};
const save = async (req, res) => {
  try {
    const { video, fitvideo, responseType, choices, calendar, tittle, isAudio, isVideo, isText, text } = req.body;
    if(!tittle) throw({message: "now tittle"})
    let vid = await chatVidServices.saveVideo(video);
    if (vid) {
      let chatvid = await {
        name: tittle,
        userId: video.userId,
        steps: [],
        people: [],
        thumbnail: video.thumbnail,
        branding: true,
      }
      let room = await chatVidServices.createChatvid(chatvid);
      let roomstep = await {
        roomId: room._id,
        stepNo: 1,
        videoId: vid._id,
        isFull: fitvideo,
        responseType,
        calendar,
        choices,
        isVideo,
        isAudio,
        isText,
        text,
        userId: video.userId
      }
      let step = await chatVidServices.saveStep(roomstep);
      await chatVidServices.updateChatvidStep(room._id, step._id);
      return res.status(200).json({ message: "Successfully created!" })
    }
    throw ({ message: "video not saved!" })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};
const update = async (req, res) => {
  try {
    const { userId } = req.params;
    let chatvids = [];
    console.log('update chat vid called !!!')
    res.status(200).json({ message: chatvids })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};
const deleteChatvid = async (req, res) => {
  try {
    const { userId } = req.params;
    console.log('delete chat vid called !!!')
    let chatvids = [];
    res.status(200).json({ message: chatvids })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};
const addReply = async (req, res) => {
  try {
    const { people, reply } = req.body;
    if(reply.type === "video") {
      const video = await chatVidServices.saveVideo(reply.ansVideo);
      reply.videoId = video._id;
    }
    const ppl = await chatVidServices.registerPeople(people);
    reply.poepleId = ppl._id;
    const rply = await chatVidServices.saveReply(reply);
    await chatVidServices.updateStepReply(reply.stepId, rply)
    await chatVidServices.updateChatvidPeople(reply.chatvidId, ppl)
    res.status(200).json({message: "Replied Successfully!"})
  } catch (error) {
    console.log(error.message)
    res.status(400).json({message: error.message})
  }
}

const controller = {
  get,
  save,
  update,
  deleteChatvid,
  addReply
}
module.exports = controller;