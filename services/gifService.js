var grabzit = require('grabzit');
var client = new grabzit("N2I2MDkxMDVmNjc1NDFkYzgwOTI4MzAzMzM0NTM3MGE=", "cWMOP2Y/Pz9OIEIjC2Rqb3kQIj8/P1Y/PyQ/Pwp2Pz8=");
const saveGif = (videoUrl) => {
    var options = {"start":3, "duration":1, "framesPerSecond":1};
    client.url_to_animation("https://videonpro.s3.us-west-1.amazonaws.com/1606464221709.webm", options);
    const gif = client.save_to("result.gif", function (error, id){
        if (error != null){
            throw error;
        }
    });
  };
  module.exports = {
    saveGif
  };