const chatVidServices = require("../services/chatvid")

const get = async (req, res) => {
  try {
    const { userId, chatvidId } = req.query;
    if (!userId && !chatvidId) throw ({ message: "Invalid Request!" })
    let chatvids = undefined;
    if (userId) {
      chatvids = await chatVidServices.getChatvidByUserId(userId);
    }
    if (chatvidId) {
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
    const { video, fitvideo, responseType, choices, calendar, title, isAudio, isVideo, isText, text } = req.body;
    if (!title) throw ({ message: "now title" })
    let vid = await chatVidServices.saveVideo(video);
    if (vid) {
      let chatvid = await {
        name: title,
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
        isVideo,
        isAudio,
        isText,
        text,
        userId: video.userId
      }
      let step = await chatVidServices.saveStep(roomstep);
      try {
        await Promise.all(choices.map(async (choice, ind) => {
          if (responseType !== "Multiple-Choice") return resolve();
          const option = {
            text: choice,
            stepId: step._id,
            chatvidId: room._id,
          }
          const opt = await chatVidServices.saveChoice(option);
          await chatVidServices.updateStepChoice(step._id, opt._id)
          return opt;
        }))
      } catch (error) {
        console.log("error")
      }
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
    const { video, userId, chatvidId, fitvideo, responseType, choices, calendar, isAudio, isVideo, isText, text, stepNo } = req.body;
    const chatvid = await chatVidServices.getChatvidById(chatvidId);
    if (!chatvid && chatvid.length > 0) throw ({ message: "No chatvid found!" });
    let vid = await chatVidServices.saveVideo(video);
    if (!vid) throw ({ message: "unabel to store video" });
    const newStep = {
      isFull: fitvideo, responseType, calendar, isAudio, isVideo, isText, text, videoId: vid._id, roomId: chatvidId, userId, stepNo
    }
    let step = await chatVidServices.saveStep(newStep);
    let steps = [...Array(chatvid[0].steps.length + 1).keys()];
    steps[stepNo] = step._id;
    var minus = 0;
    await steps.map((stp, index) => {
      if (isNaN(stp)) {
        minus = 1;
      } else {
        steps[index] = chatvid[0].steps[index - minus]._id
      }
      return true
    })
    await chatVidServices.updateChatvidSteps(chatvidId, steps);
    try {
      await Promise.all(choices.map(async (choice, ind) => {
        if (responseType !== "Multiple-Choice") return resolve();
        const option = {
          text: choice,
          stepId: step._id,
          chatvidId,
          userId,
        }
        const opt = await chatVidServices.saveChoice(option);
        await chatVidServices.updateStepChoice(step._id, opt._id)
        return opt;
      }))
    } catch (error) {
      console.log("error:  <>   ", error)
    }
    res.status(200).json({ message: "Successfully added" })
  } catch (error) {
    // console.log("ERR: ", error)
    res.status(400).json({ message: error.message })
  }
};
const deleteChatvid = async (req, res) => {
  try {
    const { id } = req.params;
    //console.log('delete chat vid called !!!', id)
    chatVidServices.deleteChatvid(id);
    res.status(200).json({ message: "Chatvid deleted succesfully!" })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
};
function isEmpty(obj) {
  for (var key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}
const updateJumps = async (req, res) => {
  try {
    const { _id, jumpTo } = req.body;
    let step = await chatVidServices.getStepById(_id);
    if (!step) throw ({ message: "no record found" })
    delete req.body._id;
    if (jumpTo) {
      await chatVidServices.updateStep(_id, req.body)
    } else {
      if (!isEmpty(step.jumpChoice)) {
        let jumpChoice = {...step.jumpChoice, ...req.body.jumpChoice}
        await chatVidServices.updateStep(_id, {jumpChoice})
      }else {
        await chatVidServices.updateStep(_id, req.body)
      }
    }
    res.status(200).json({ message: "updated...!", data: req.body })
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
}
const addReply = async (req, res) => {
  try {
    const { people, reply } = req.body;
    if (reply.type !== "choice") {
      delete reply.choiceId
    }
    if (reply.type === "video") {
      const vidObj = {
        url: reply.url,
        date: Date.now(),
        campaign: false,
      }
      const video = await chatVidServices.saveVideo(vidObj);
      reply.videoId = video._id;
    }
    let peopleID = await chatVidServices.getPeopleByEmail(people.email)
    if (peopleID && peopleID.email) {
      reply.peopleId = peopleID._id;
    } else {
      var ppl = await chatVidServices.registerPeople(people);
      reply.peopleId = ppl._id;
    }
    const rply = await chatVidServices.saveReply(reply);
    if (reply.type === "choice") {
      await chatVidServices.updateChoice(reply.choiceId, rply._id)
    }
    await chatVidServices.updateStepReply(reply.stepId, rply);
    await chatVidServices.updateChatvidPeople(reply.chatvidId, ppl ? ppl : peopleID)
    res.status(200).json({ message: "Replied Successfully!" })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
}
const saveAnalytics = async (req, res) => {
  try {
    await chatVidServices.saveMetrics(req.body)
    res.status(200).json({ message: "successfully save" })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
}
const getMetrics = async (req, res) => {
  try {
    const { chatvidId, dateFrom, dateTo, deviceType, isAnswered, isCompleted, isInteracted } = req.body;
    const allMetrics = await chatVidServices.getMetrics(chatvidId, dateFrom, dateTo, deviceType, isInteracted, isCompleted, isAnswered);
    var landed = 0, completed = 0, answered = 0, interacted = 0, datasets = { desktop: new Array(), tablet: new Array(), mobile: new Array() };
    var unique = { desktop: {}, tablet: {}, mobile: {} };
    await Promise.all(allMetrics.map(async (record, index) => {
      let date = (new Date(record.createdAt)).toLocaleDateString();
      if (!record.isInteracted && !record.isCompleted && !record.isAnswered) landed++;
      if (record.isInteracted) interacted++;
      if (record.isCompleted) completed++;
      if (record.isAnswered) answered++;
      if (!unique[record.deviceType][date]) {
        unique[record.deviceType][date] = { t: date, y: 1 }
      } else {
        unique[record.deviceType][date] = { t: date, y: unique[record.deviceType][date].y + 1 }
      }
    }));
    datasets.desktop = await Object.values(unique.desktop);
    datasets.tablet = await Object.values(unique.tablet);
    datasets.mobile = await Object.values(unique.mobile);
    res.status(200).json({ message: [], stats: { landed, completed, answered, interacted, total: allMetrics.length, datasets } })
  } catch (error) {
    console.log(error)
    res.status(400).json({ message: error.message })
  }
}

const controller = {
  get,
  save,
  update,
  deleteChatvid,
  addReply,
  updateJumps,
  saveAnalytics,
  getMetrics
}
module.exports = controller;