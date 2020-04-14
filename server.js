const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

//config
require("dotenv").config();
// dependencies
const user = require("./routes/user");
const videos = require("./routes/videos");

mongoose.connect(
  "mongodb+srv://username:username@myfirstcluster-8ccsm.mongodb.net/test22?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: false,
    useFindAndModify: false
  },
  () => {
    console.log("connected to db");
  }
);

//middlewares
app.use(cors());
app.use(express.json());
//routes
app.use("/user", user);
app.use("/video", videos);
app.get("/", (req, res) => {
  res.send("Root place");
});

const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
