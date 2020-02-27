const express = require("express");
const app = express();
const mongoose = require("mongoose");

//config
require('dotenv').config()
// dependencies
const user = require("./routes/user");

mongoose.connect(
  "mongodb+srv://username:username@myfirstcluster-8ccsm.mongodb.net/test22?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log("connected to db");
  }
);

//middlewares
app.use(express.json())
//routes
app.use("/user", user);
app.get('/',(req,res)=>{res.send("Root place")})

const port = process.env.PORT || 3008;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
