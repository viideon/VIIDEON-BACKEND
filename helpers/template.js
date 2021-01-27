require("dotenv").config();
module.exports.generateStringTemplate = (id, thumbnail) => {
  return `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
      xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="x-apple-disable-message-reformatting" />
  </head>
  <body width="100%" style="margin: 0; font-family: 'Montserrat',Georgia, sans-serif; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F2F2F1;"> <center style="width: 100%; background-color: #F2F2F1;"> <div style="max-width: 600px; margin: 0 auto;padding: 5px" class="email-container"> <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;"> <tr> <td> <h5 style="font-size:16px">vidionPro</h5> </td> <td> <h5 style="text-align: end;font-size: 16px" align="end"> Hello </h5> </td> </tr> </table> </div> <div style="max-width: 600px; margin-top: 0px;margin-bottom: 50px; margin-left: auto; margin-right: auto;background-color: #fff;padding: 10px 10px 30px 10px" class="email-container"> <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;"> <tr> <td> <a href="${process.env.APP_DOMAIN}/watch/${id}"> <div style="width: 100%;background-color:#000;"> <div style="height:280px;background-image:url(${thumbnail});object-fit:contain;background-size: contain;background-repeat:no-repeat;background-position: center"> <img style="width: 80px;margin-left: 44%;margin-top: 18%" src="https://vidionpro-backend.herokuapp.com/video/email/track?id=${id}" /> </div> </div> </td> </tr> <tr> <td> <h5 style="text-align: center;color: #76827F;padding:0px 30px;font-weight: 800" align="center"> Video powered by vidionPro </h5> </td> </tr> <tr> <td style="text-align: center;" align="center"> <a style="cursor: pointer;background-color: #19AF8F;color: #fff;padding:10px 14px;border-radius: 3px;font-weight: 400;text-decoration: none; margin-bottom: 30px" href="${process.env.APP_DOMAIN}/watch/${id}/cta">WATCH VIDEO</a> </td> </tr> </table> </div> </center> </body> </html>`;
};

module.exports.spreadTheme = (id=false, thumbnail=false, logo=false, text=false,userName,url) => {
    // console.log("thumbnail",thumbnail)
    console.log("logo",logo)
    console.log("text",text)
    // console.log("usrName in template",userName)
    // console.log("avatar",url)
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Style-Type" content="text/css">
    <title></title>
    <meta name="Generator" content="Cocoa HTML Writer">
    <meta name="CocoaVersion" content="1894.6">
    <style type="text/css">
      .mainWrapper {
        text-align: -webkit-center;
        width: 720px;
      }
      .bodyWrapper {
        width: 100%;
        min-width: 80%;
        max-height: 970px;
        min-height: 750px;
        background-color: darkgoldenrod;
      }
      .headerWrapper {
        
        width: 100%;
        min-width: 60%;
        height: 240px;
        background-position: center;
        opacity: 0.9;
      }
      .emailTemplatethumbnailWrapper {
        ${thumbnail && "background-image: url(${thumbnail});"}
        width: 100%;
        min-height: 512px;
        max-height: 720px;
        background-position: center;
        background-color: darkgoldenrod;
      }
      .headerImage {
        width: 120px;
        height: 120px;
        opacity: 1;
      }
      .headerH1 {
        font-weight: bolder;
        color: white;
        font-size: 60px;
        margin: 0px;
        padding-bottom: 0px;
      }
      .headerP {
        margin-top: 0px;
        color: white;
        font-weight: bolder;
        font-size: 20px;
      }
      .footerWrapper {
        background: lightgray;
        padding: 2.5em;
      }
      .watchVideoBtn {
        color: white;
        background-color: goldenrod;
        border: none;
        border-radius: 23px;
        min-height: 40px;
        min-width: 200px !important;
        width: 225px;
        font-weight: bolder;
        outline: none;
        font-size: 18px;
        cursor: pointer !important;
      }
      .copyRightWrapper {
        margin-top: 1em;
      }
      .copyRightWrapper p {
        padding-left: 15px;
        font-size: 16px;
        font-weight: bold;
        color: goldenrod;
      }
      .socialBtn {
        border: none;
        border-radius: 50px;
        background: goldenrod;
        color: white;
        font-size: 30px;
        overflow: hidden;
        height: 35px;
        width: 35px;
        margin: 8px;
        outline: none;
        cursor: pointer !important;
      }
      a {
        cursor: pointer !important;
        color: transparent;
        text-decoration: none;
      }
    </style>
  </head>
  <body style="text-align: -webkit-center;" >
    <div class="mainWrapper">
      <div class="bodyWrapper">
        <div class="headerWrapper">
          <img src="${logo?logo:"https://videonpro.s3.amazonaws.com/assets/logo.png"}" class="headerImage"/>
          <h1 class="headerH1">Viideon</h1>
          <p class="headerP">Join our movement</p>
        </div>
  
        <a href="${process.env.APP_DOMAIN}/watch/${id && id}">
          <div class="emailTemplatethumbnailWrapper">
            <img style="width: 100%; height: 73vh;" src="${thumbnail}" /> 
          </div>
        </a>
  
      </div>
  
      <div class="footerWrapper w3-row w3-center">
        <div class="w3-third">
            <a href="${process.env.APP_DOMAIN}/watch/${id && id}/cta">
              <button class="btn watchVideoBtn">Watch this Video</button>
            </a>
          <div class="w3-row w3-center copyRightWrapper">
            <span class="w3-third">
              <a href="videonpro.com">
                <img style="width: 45px; height: 45px;" src="${url}">
                <p>${userName}</p>
              </a>
              
            </span>
            <span class="w3-twothird">
              <p>Sent using Viideon</p>
            </span>
          </div>
        </div>
        <div class="w3-twothird w3-center">
          <p style="margin: 1em;">
              
                  
                ${text?text:"Viideon is a video communication platform design for sale and marketing leaders. Learn more at viideon.com"}  
              
          </p>
          <div>
            <a href="https://www.facebook.com/">
              <img width="16px" height="16px" style="    margin: 5px;"
                                          src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
            </a>
            <a href="https://twitter.com/">
              <img width="16px" height="16px" style="    margin: 5px;"
                                          src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
            </a>
            <a href="https://youtube.com/">
              <img width="16px" height="16px" style="    margin: 5px;"
                                          src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
            </a>
            <a href="https://www.linkedin.com/">
              <img width="16px" height="16px" style="    margin: 5px;"
                                          src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </body>
  </html>  
  `
        
        }
module.exports.corporateLight = (id=false, thumbnail=false, logo=false, text=false,userName,url) => {
    console.log("usrName in template",userName)
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
  <html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Style-Type" content="text/css">
    <title></title>
    <meta name="Generator" content="Cocoa HTML Writer">
    <meta name="CocoaVersion" content="1894.6">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <style type="text/css">
      .mainWrapper {
        text-align: -webkit-center;      
        width: 720px;
        background-color: #eff3f4;
        background: #eff3f4;
      }
      .bodyWrapper {
        width: 100%;
        min-width: 80%;
        background-color: #eff3f4;
      }
      .headerWrapper {
        width: 100%;
        min-width: 60%;
        height: 200px;
        display: -webkit-inline-box;
        -webkit-box-align: center;
        -webkit-box-pack: center
      }
      .thumbnailWrapper {
        
        width: 592px;
        min-width: 592px;
        min-height: 399px;
        max-height: 399px;
        background-position: center;
      }
      .headerImage {
        width: 130px;
        height: 130px;
      }
      .headerH1 {
        font-weight: bolder;
        color: #3a94d2;
        font-size: 65px;
        margin: 14px;
        padding-bottom: 0px;
      }
      .whiteBody {
        background-color: #FFFFFF;
        padding-top: 62px;
        border-radius: 8px;
      }
      .footerWrapper {
        background: #FFFFFF;
        padding: 2.5em;
        width: 592px;
        max-width: 592px;
      }
      .watchVideoBtn {
        color: #FFFFFF;
        background-color: #3a94d2;
        border: none;
        border-radius: 23px;
        min-height: 40px;
        min-width: 200px !important;
        width: 225px;
        font-weight: bolder;
        outline: none;
        font-size: 18px;
        cursor: pointer !important;
      }
      a {
        cursor: pointer !important;
        color: transparent;
        text-decoration: none;
      }
      .footer{
        background-color: #FFFFFF;
        margin-top: 40px;
        width: 720px;
      }
      .sender-wrapper {
        width: 320px;
        display: -webkit-box;
        -webkit-box-align: center;
        float: left;
      }
      .footerP {
        margin-left: 10px;
      font-weight: bold;
      }
      .icon-wrapper {
        width: 260px;
        float: right;
      }
      .fa {
        padding: 20px;
        font-size: 20px;
        width: 30px;
        text-align: center;
        text-decoration: none;
        margin: 5px 2px;
        border-radius: 50%;
        color: black;
      }
      .fa:hover {
        opacity: 0.7;
      }
    </style>
  </head>
  <body style="text-align: -webkit-center;">
    <div style="background-color: #eff3f4; width: 960px; padding-bottom: 64px;">
      <div class="mainWrapper">
        <div class="bodyWrapper">
          <div class="headerWrapper">
            <img src="${logo ? logo :"https://videonpro.s3.amazonaws.com/assets/logo.png"}" class="headerImage"/>
            <h1 class="headerH1">Viideon</h1>
          </div>
        </div>
  
        <div class="whiteBody">
          <a href="${process.env.APP_DOMAIN}/watch/${id}">
            <div class="thumbnailWrapper">
              <img style="width: 100%" src="${thumbnail}" /> 
            </div>
          </a>
  
          <div class="footerWrapper w3-row w3-center">
            <div class="">
              <p>Viideon is a video communication platform design for sale and marketing leaders. Learn more at viideon.com</p>
              <a href="videonpro.com">
                <button class="btn watchVideoBtn">Watch this Video</button>
              </a>
          </div>
        </div>
      </div>
      </div>
    </div>
        <div class="footer">
          <div class="sender-wrapper">
            <img style="width: 44px; height: 44px;" src="${url?url:"https://videonpro.s3.amazonaws.com/assets/logo.png"}" />
            <p class="footerP">Sent using Viideon</p>
          </div>
          <div class="icon-wrapper">
            <a href="#" class="fa fa-facebook"></a>
            <a href="#" class="fa fa-twitter"></a>
            <a href="#" class="fa fa-google"></a>
            <a href="#" class="fa fa-linkedin"></a>
          </div>
        </div>
  </body>
  </html>
  
  `
}

module.exports.modernSimple = (id=false, thumbnail=false, logo=false, text=false,userName,url) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
  <html>
  
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta http-equiv="Content-Style-Type" content="text/css">
      <title></title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <meta name="Generator" content="Cocoa HTML Writer">
      <meta name="CocoaVersion" content="1894.6">
      <style type="text/css">
          .thumbnailWrapper {
              background-image: url(${thumbnail});
          }
      </style>
  </head>
  
  <body ">
      <table align=" center" cellpadding="0" cellspacing="0" width="700">
  
      <tr>
          <td align="center" style="background-image: url(images/bg_1.jpg); background-size: cover; ">
              <table align="center" cellpadding="0" cellspacing="0" width="100%">
                  <tr align="left">
                      <td style="
                            padding-left: 20px;
                            background-color: white;
                            display: -webkit-box;
                            -webkit-box-align: center;
                            -webkit-box-pack: center;
                            min-width: 60%;
                            height: 80%;
              
                             border-bottom: 2px solid black;
                          ">
                          <img src=" ${logo ? logo :"https://videonpro.s3.amazonaws.com/assets/logo.png"}"
                              style="width: 40px; height: 40px; opacity: 1;margin-top: 50%;" />
                          <h1 style="
                              padding-bottom: 0px;
                              margin-left: 3%;
                              font-weight: bolder;
                              font-size: 30px;
                              color: black;
                            ">
                              Viideon
                          </h1>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
  
      <tr align="center">
          <p style="color: black;">Be a part of our growing team!</p>
      </tr>
      <tr align="center">
          <td style="background: #4d4d4d;max-width: 400px;width: 100%;">
              <table width="100%" cellspacing="0" cellpadding="0">
                  <tr align="center">
                      <td>
                          <img style="width: 100%"
                              src="${thumbnail}" />
                          <p style="color: white">VIDEO PLACEHOLDER</p>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      <tr align="center">
          <td align="center" style="padding: 30px 0px 30px 0px">
              <p style="margin: 0px;color: black;">
                  ${text? text : "Viideon is a video communication platform design for sale and marketing leaders."}
              </p>
              <p style="margin: 0px;color: black;">
                   Learn more at
                  <a style="
                    text-decoration: none;
                    color: black;
                    font-weight: bold;
                    cursor: pointer;
                  ">viideon.com</a>
              </p>
          </td>
      </tr>
      <tr align="center">
          <td align="center">
  
              <a href="${process.env.APP_DOMAIN}/watch/${id}/cta">
                  <p style="margin: 0px;color: black; font-size: 30px;
                  font-weight: bold;
                  margin-bottom: 5px;
                  max-width: 300px;
                  width: 100%;
                  border-top: 1.5px solid black;
                  border-bottom: 1.5px solid black;
                  cursor: pointer;">Watch this Video!</p>
              </a>
          </td>
      </tr>
      <tr align="center">
          <td align="center" style="padding: 15px 0px 15px 0px">
  
              <img style="vertical-align: middle;
              width: 50px;
              height: 50px;
              border-radius: 50%;" src="${url?url:"http://placeimg.com/80/80/sport"}">
              <p style="margin-bottom: 0;
              font-size: 16px;
              font-weight: bold;color: black;">${userName ? userName :"Chris Cullen"}</p>
              <p style=" margin-top: 0;
              font-size: 14px;color: black;">Nature Lover</p>
          </td>
      </tr>
      <tr align="center">
          <td style="padding: 10px 0px 20px 0px;">
              <table width="180px" cellspacing="0" cellpadding="0">
                  <tr>
                      <td width="25%" align="center" style="border-right: 1.5px solid">
                          <img width="24px" height="24px"
                              src="https://videonpro.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" />
                      </td>
                      <td style="border-right: 1.5px solid" width="25%" align="center"><img width="24px" height="24px"
                              src="https://videonpro.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" /></td>
                      <td style="border-right: 1.5px solid" width="25%" align="center">
                          <img width="24px" height="24px"
                              src="https://videonpro.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" />
                      </td>
                      <td width="25%" align="center">
                          <img width="24px" height="24px"
                              src="https://videonpro.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" />
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      <tr>
          <td style="padding: 20px 0px 20px 0px;border-top: 2px solid black;">
              <table width="100%" cellspacing="0" cellpadding="0">
                  <tr>
                      <td width="33%" align="center">
                          <p style=" font-size: 12px; padding-left: 5px;color: black;">
                              &copy; 2020 VideonPro All Rights Reserved
                          </p>
                      </td>
                      <td width="33%" align="center"></td>
                      <td width="33%" align="center">
                          <img src="${ logo ? logo :"https://videonpro.s3.amazonaws.com/assets/logo.png"}" style="
                  width: 20px;
                  opacity: 1;
                  height: 20px;
                  margin-right: 5px;
                " />
                          <span style="color: black;">Sent with Viideon</span>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
  
  
  
  
      </table>
  </body>
  
  </html>
  `
}

module.exports.classic_dark = (id=false, thumbnail=false, logo=false, text=false) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Style-Type" content="text/css">
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="Generator" content="Cocoa HTML Writer">
    <meta name="CocoaVersion" content="1894.6">
    <style type="text/css">
        .emailTemplatethumbnailWrapper {
            ${thumbnail && "background-image: url(${thumbnail});"}
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            width: 100%;
            background: #000000;
            z-index: -1;
            opacity: .3;
        }
        .wrapper {
            width: 700px;
            height: 150px;
            background: #333333;
            position: relative;
            overflow: hidden;
        }
        a {
            color: black;
            font-weight: bold;
            text-decoration: none;
        }
        a.left {
            padding: 10px;
            float: left;
        }
        div.right {
            float: right;
            z-index: 1;
            padding: 10px;
            position: relative;
        }
        div.right a {
            color: #FFF
        }
        .inner {
            width: 0;
            position: absolute;
            z-index: 0;
            height: 0;
            border-style: solid;
            border-width: 150px 700px 0 0;
            border-color: transparent #1a1a1a transparent transparent;
            bottom: 0;
            right: 0
        }
    </style>
</head>
<body>
    <table align=" center" cellpadding="0" cellspacing="0" width="700" style="background-color: #1a1a1a;">
        <tr>
            <div class="wrapper">
                <a class="left" href="#1"
                    style=" 
            background-position: center;padding-left: 20px;background-color: #333333;display: -webkit-box;-webkit-box-align: center;-webkit-box-pack: center;    margin-top: 5%;">
                    <img src=" ${logo? logo :"https://videonpro.s3.amazonaws.com/assets/logo.png"}"
                        style="width: 30px; height: 30px; opacity: 1;margin-top: 10%;" />
                    <p style="color: white; margin: 0px;
                                    margin-left: 3%;
                                    font-weight: bolder;
                                    font-size: 30px;">Viideon</p>
                </a>
                <div class="right"> </div>
                <div class="inner"></div>
            </div>
        </tr>
        <tr align="left" style="margin-left:100px">
            <p style="font-size: 30px;margin-left: 150px;">Hello John!</p>
        </tr>
        <tr align="center">
            <td>
                <table class="emailTemplatethumbnailWrapper" width="70%" cellspacing="0" cellpadding="0"
                    style="max-width: 400px;">
                    <tr align="center">
                        <td>
                            
                            <img style="width: 100%"
                                src="${thumbnail}" />
                            <p style="color: white">VIDEO PLACEHOLDER</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr align="center">
            <td align="center">
                <a href="${process.env.APP_DOMAIN}/watch/${id}/cta" style="text-decoration: none;">
                    <p style="    border: 2px solid white;
                width: 180px;
                color: white;
                font-size: 20px;
                border-radius: 20px;">Watch this Video!</p>
                </a>
            </td>
        </tr>
        <tr align="center">
            <td align="center" style="padding: 30px 0px 30px 0px">
                <p style="margin: 0px;color: white;">
                ${ text ? text : 
                    "Viideon is a video communication platform design for sale and marketing leaders."
                }
                </p>
                <p style="margin: 0px;color: white;">
                     Learn more at
                    <a style="
                  text-decoration: none;
                  color: white;
                  font-weight: bold;
                  cursor: pointer;
                ">viideon.com</a>
                </p>
            </td>
        </tr>
        <tr>
            <td style="padding: 20px 0px 20px 0px;border-top: 2px solid black;">
                <table width="100%" cellspacing="0" cellpadding="0">
                    <tr>
                        <td width="40%" align="center">
                            <table width="220px" cellspacing="10px" cellpadding="0">
                                <tr>
                                    <td width="25%" align="center" style="border-radius: 50%;">
                                        <img width="24px" height="24px" style="    margin: 5px;"
                                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                                    </td>
                                    <td style="border-radius: 50%;" width="25%" align="center"><img width="24px"
                                            height="24px"
                                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                                    </td>
                                    <td style="border-radius: 50%;" width="25%" align="center">
                                        <img width="24px" height="24px" style="    margin: 5px;"
                                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                                    </td>
                                    <td width="25%" align="center" style="border-radius: 50%;">
                                        <img width="24px" height="24px"
                                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td width="20%" align="center"></td>
                        <td width="40%" align="center">
                            <img src="${logo ? logo : "https://videonpro.s3.us-west-1.amazonaws.com/1610430702841"}" style="
                width: 20px;
                opacity: 1;
                height: 20px;
                margin-right: 5px;
                margin-top: 5%;
              " />
                            <span style="color: white;margin-bottom: 5%;">Sent with Viideon</span>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    </table>
</body>

</html>
  `
}

module.exports.sleek = (id=false, thumbnail=false, logo=false, text=false,userName,url) => {
    // console.log("thumbnail",thumbnail)
    // console.log("logo",logo)
    console.log("usrName in template",userName)
    // console.log("avatar",url)
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Style-Type" content="text/css">
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="Generator" content="Cocoa HTML Writer">
    <meta name="CocoaVersion" content="1894.6">
    <style type="text/css">
        .emailTemplatethumbnailWrapper {
            ${thumbnail && "background-image: url(${thumbnail});"}
        }
    </style>
</head>

<body ">
    <table align=" center" cellpadding="0" cellspacing="0" width="700">
    <tr>
        <td>
            <table align="center" cellpadding="0" cellspacing="0" width="100%">
                <tr align="left">
                    <td style="
                          padding-left: 20px;
                          background-color: white;
                          display: -webkit-box;
                          -webkit-box-align: center;
                          -webkit-box-pack: center;
                          min-width: 60%;
            height: 80%;
            border-bottom: 2px solid black;
                        ">
                        <img src="${logo ? logo : "https://videonpro.s3.amazonaws.com/assets/logo.png"}"
                            style="width: 40px; height: 40px; opacity: 1;margin-top: 50%;" />
                        <h1 style="
                            padding-bottom: 0px;
                            margin-left: 3%;
                            font-weight: bolder;
                            font-size: 30px;
                            color: black;
                          ">
                            Viideon
                        </h1>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr align="center">
        <p style="color: black;">Be a part of our growing team!</p>
    </tr>
    <tr align="center">
        <td>
            <table class="emailTemplatethumbnailWrapper" width=" 100%" cellspacing="0" cellpadding="0" width="70%"
                style="background: #4d4d4d;max-width: 400px;">
                <tr align="center">
                    <td>
                        <img style="width: 100%; height:30vh"
                            src="${thumbnail}" />
                        <p style="color: white">VIDEO PLACEHOLDER</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr align="center">
        <td align="center" style="padding: 30px 0px 30px 0px">
            <p style="margin: 0px;color: black;">
                ${text ? text :"Viideon is a video communication platform design for sale and marketing leaders."}
            </p>
            <p style="margin: 0px;color: black;">
                 Learn more at
                <a style="
                  text-decoration: none;
                  color: black;
                  font-weight: bold;
                  cursor: pointer;
                ">viideon.com</a>
            </p>
        </td>
    </tr>
    <tr align="center">
        <td align="center">

            <a href="${process.env.APP_DOMAIN}/watch/${id}/cta">
                <p style="margin: 0px;color: black; font-size: 30px;
                font-weight: bold;
                margin-bottom: 5px;
                max-width: 300px;
                width: 100%;
                border-top: 1.5px solid black;
                border-bottom: 1.5px solid black;
                cursor: pointer;">Watch this Video!</p>
            </a>
        </td>
    </tr>
    <tr align="center">
        <td align="center" style="padding: 15px 0px 15px 0px">

            <img style="vertical-align: middle;
            width: 50px;
            height: 50px;
            border-radius: 50%;" src="${url}">
            <p style="margin-bottom: 0;
            font-size: 16px;
            font-weight: bold;color: black;">${userName}</p>
            <p style=" margin-top: 0;
            font-size: 14px;color: black;">Nature Lover</p>
        </td>
    </tr>
    <tr align="center">
        <td style="padding: 10px 0px 20px 0px;">
            <table width="180px" cellspacing="0" cellpadding="0">
                <tr>
                    <td width="25%" align="center" style="border-right: 1.5px solid">
                        <img width="24px" height="24px"
                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" />
                    </td>
                    <td style="border-right: 1.5px solid" width="25%" align="center"><img width="24px" height="24px"
                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" /></td>
                    <td style="border-right: 1.5px solid" width="25%" align="center">
                        <img width="24px" height="24px"
                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" />
                    </td>
                    <td width="25%" align="center">
                        <img width="24px" height="24px"
                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" />
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style="padding: 20px 0px 20px 0px;border-top: 2px solid black;">
            <table width="100%" cellspacing="0" cellpadding="0">
                <tr>
                    <td width="33%" align="center">
                        <p style=" font-size: 12px; padding-left: 5px;color: black;">
                            &copy; 2020 VideonPro All Rights Reserved
                        </p>
                    </td>
                    <td width="33%" align="center"></td>
                    <td width="33%" align="center">
                        <img src="${logo ? logo :"https://videonpro.s3.amazonaws.com/assets/logo.png"}" style="
                width: 20px;
                opacity: 1;
                height: 20px;
                margin-right: 5px;
              " />
                        <span style="color: black;">Sent with VideonPro</span>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    </table>
</body>

</html>
  `
}

module.exports.social_business = (id=false, thumbnail=false, logo=false, text=false,userName,url) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Style-Type" content="text/css">
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="Generator" content="Cocoa HTML Writer">
    <meta name="CocoaVersion" content="1894.6">
    <style type="text/css">
        .emailTemplatethumbnailWrapper {
            ${thumbnail && 'background-image: url(${thumbnail});'}
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            width: 100%;
            background: #000000;
            z-index: -1;
            opacity: .3;
        }
    </style>
</head>
<body>
    <table align=" center" cellpadding="0" cellspacing="0" width="700" style="background-color: white;">
        <tr>
            <td>
            <div class=" overlay">
                </div>
                <table align="center" cellpadding="0" cellspacing="0" width="100%">
                    <tr align="left">
                        <td align="middle" class="hero bg_white">
                        <table>
                            <tr>
                                <td style=" padding-left: 20px; display: -webkit-box; -webkit-box-align: center; -webkit-box-pack: center; min-width: 60%; height: 80%; ">
                                    <img src=" ${logo? logo :"https://videonpro.s3.amazonaws.com/assets/logo.png"}"
                                        style="width: 60px; height: 60px; opacity: 1;margin-top: 95%;" />
                                    <p style="color: #3b93d2; padding-bottom: 0px;
                                    margin-left: 3%;
                                    font-weight: bolder;
                                    font-size: 50px;">Viideon</p>
                                </td>
                            </tr>
                        </table>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    <tr align="center">
        <td width=100%>
            <table style="background-color: #3b93d2;" width="80%">
                <tr align="left" style="margin-left:100px">
                    <p style="color: white;font-size: 30px;margin-left: 150px;">Welcome to Viideon</p>
                </tr>
                <tr align="center">
                    <td>
                        <table class="emailTemplatethumbnailWrapper" width="100%" style="background: #999999; padding: 100px 0px 100px 0px;max-width: 350px;"
                            cellspacing="0" cellpadding="0">
                            <tr align="center">
                                <td>
                                    
                                    <img style="width: 100%"
                                        src="${thumbnail}" />
                                    <p style="color: white">VIDEO PLACEHOLDER</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr align="center" ;">
                    <td align="center" style="padding: 30px 0px 30px 0px">
                        <p style="margin: 0px;color: white;">
                        ${ text ? text :
                            "Viideon is a video communication platform design for sale and marketing leaders. Learn more at viideon.com"
                        }
                        </p>
                    </td>
                </tr>
                <tr align="center">
                    <td align="center">
                        <a href="${process.env.APP_DOMAIN}/watch/${id}/cta" style="text-decoration: none;">
                            <p style="    border: 2px solid white;
                            width: 180px;
                            color: white;
                            font-size: 20px;
                            border-radius: 20px;">Watch this Video!</p>
                        </a>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr align="center">
        <td style="padding: 20px 0px 10px 0px;">
            <table width="300px" cellspacing="0" cellpadding="0">
                <tr align="center">
                    <td width="30%" align="right">
                        
                        <img style="vertical-align: middle; width: 50px; height: 50px; border-radius: 50%;" src="${url}">
                    </td>
                    <td width="50%" align="center">
                        <p style="font-size: 20px; margin: 0;color: #3b93d2;">${userName}</p>
                        <p style="font-size: 13px;margin: 0; color: #3b93d2;">Fitness Enthusiast</p>
                        <table width="120px" cellspacing="10px" cellpadding="0">
                            <tr>
                                <td width="25%" align="center" style="background-color:#3b93d2;border-radius: 50%;">
                                    <img width="16px" height="16px" style="    margin: 5px;"
                                        src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                                </td>
                                <td style="background-color:#3b93d2;border-radius: 50%;" width="25%" align="center"><img
                                        width="16px" height="16px" style="    margin: 5px;"
                                        src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                                </td>
                                <td style="background-color:#3b93d2;border-radius: 50%;" width="25%" align="center">
                                    <img width="16px" height="16px" style="    margin: 5px;" style="    margin: 5px;"
                                        src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                                </td>
                                <td width="25%" align="center" style="border-radius: 50%;background-color:#3b93d2">
                                    <img width="16px" height="16px" style="    margin: 5px;"
                                        src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td style="padding: 20px 0px 10px 0px;" align="center">
            <table width="250px" cellspacing="0" cellpadding="0">
                <tr>
                    <td width="20%" align="right">
                        <img src="${logo ? logo : 'https://videonpro.s3.amazonaws.com/assets/logo.png'}" style="width: 30px;opacity: 1;height: 30px;" />
                    </td>
                    <td width="50%" align="center">
                        <span style="color: #3b93d2;">Sent using Viideon</span>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center">
            <p style="color: #3b93d2;font-size: 10px;">&copy;2020 Viideo All Rights Reserved</p>
        </td>
    </tr>
    </table>
</body>

</html>
 
  `
}

module.exports.streamlined = (id=false, thumbnail=false, logo=false, text=false,userName,url) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>

<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="Content-Style-Type" content="text/css">
    <title></title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <meta name="Generator" content="Cocoa HTML Writer">
    <meta name="CocoaVersion" content="1894.6">
    <style type="text/css">
        .emailTemplatethumbnailWrapper {
            ${thumbnail && 'background-image: url(${thumbnail});'}
        }
        .overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            width: 100%;
            background: #000000;
            z-index: -1;
            opacity: .3;
        }
    </style>
</head>
<body ">
    <table align=" center" cellpadding="0" cellspacing="0" width="700" style="width:75%;margin-left: auto;margin-right: auto;">
        <tbody align="center">
    <tr>
        <td style="background-image: url(https://videonpro.s3.amazonaws.com/assets/IntelicaCRE-BlogPhoto-office-social-gathering.jpg); background-size: cover; height: 200px;box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5);
            border-color: rgba(255, 255, 255, 1);">
            <div class="overlay"></div>
            <table align="center" cellpadding="0" cellspacing="0" width="100%">
                <tr align="left">
                    <td align="middle" class="hero bg_white" ">
                        <table>
                            <tr>
                                <td style=" padding-left: 20px; display: -webkit-box; -webkit-box-align: center; -webkit-box-pack: center; min-width: 60%; height: 80%; ">
                                    <img src="${logo?logo:"https://videonpro.s3.amazonaws.com/assets/logo.png"}" style="width: 60px; height: 60px; opacity: 1;margin-top: 95%;" />
                                    <p style="color: #3b93d2; padding-bottom: 0px;margin-left: 3%;font-weight: bolder;font-size: 50px;">
                                        Viideon
                                    </p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr align="center">
        <td style="background: #dad5cb; padding: 5px 0px 5px ;max-width: 400px;width: 100%;">
            <table class="emailTemplatethumbnailWrapper" width="100%" cellspacing="0" cellpadding="0">
                <tr align="center">
                    <td>
                        <img style="width: 60%"
                            src="${thumbnail}" />
                        <p style="color: white"></p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr align="center" style="background-color: #3b93d2;">
        <td align="center" style="padding: 30px 0px 30px 0px">
            <p style="margin: 0px;color: white;">
                ${text ? text : 
                    "Viideon is a video communication platform design for sale and marketing leaders. Learn more at viideon.com"
                }
            </p>
        </td>
    </tr>
    <tr align="center" style="background-color: #3b93d2;">
        <td align="center">
            <a href="${process.env.APP_DOMAIN}/watch/${id}/cta" style="text-decoration: none;">
                <p style="    border: 2px solid white;
                width: 180px;
                color: white;
                font-size: 20px;
                border-radius: 20px;">Watch this Video!</p>
            </a>
        </td>
    </tr>
    <tr align="center">
        <p style="color: #3b93d2;font-size: 30px; text-align: center;">Get To Know Us!</p>
    </tr>
    <tr align="center">
        <td align="center" style="padding: 30px 0px 30px 0px">
            <p style="margin: 0px;color: #3b93d2;">
            ${text ? text : 
                "Viideon is a video communication platform design for sale and marketing leaders. Learn more at viideon.com"
            }
            </p>
        </td>
    </tr>
    <tr align="center">
        <td style="padding: 10px 0px 20px 0px;">
            <table width="220px" cellspacing="10px" cellpadding="0">
                <tr>
                    <td width="25%" align="center" style="background-color:#3b93d2;border-radius: 50%;">
                        <img width="24px" height="24px" style="    margin: 5px;"
                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                    </td>
                    <td style="background-color:#3b93d2;border-radius: 50%;" width="25%" align="center"><img
                            width="24px" height="24px"
                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" /></td>
                    <td style="background-color:#3b93d2;border-radius: 50%;" width="25%" align="center">
                        <img width="24px" height="24px" style="    margin: 5px;"
                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                    </td>
                    <td width="25%" align="center" style="border-radius: 50%;background-color:#3b93d2">
                        <img width="24px" height="24px"
                            src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                    </td>
                </tr>
            </table>
        </td>
    </tr>
</tbody>
    </table>
</body>

</html>
  `
}

module.exports.simple_blue = (id=false, thumbnail=false, logo=false, text=false,userName,url) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
  <html>
  
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta http-equiv="Content-Style-Type" content="text/css">
      <title></title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <meta name="Generator" content="Cocoa HTML Writer">
      <meta name="CocoaVersion" content="1894.6">
      <style type="text/css">
          .thumbnailWrapper {
              background-image: url(${thumbnail});
          }
  
          .overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              content: '';
              width: 100%;
              background: #000000;
              z-index: -1;
              opacity: .3;
          }
      </style>
  </head>
  
  <body ">
      <table align=" center" cellpadding="0" cellspacing="0" width="700" style="width: 70%; margin-right: auto;margin-left: auto;">
  
      <tr>
          <td style="background-image: url(https://videonpro.s3.amazonaws.com/assets/IntelicaCRE-BlogPhoto-office-social-gathering.jpg); background-size: cover; height: 200px;box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5);
              border-color: rgba(255, 255, 255, 1);">
              <div class="overlay"></div>
              <table align="center" cellpadding="0" cellspacing="0" width="100%">
                  <tr align="left">
  
                      <td align="middle" class="hero bg_white" ">
  
                          <table>
                              <tr>
                                  <td style=" padding-left: 20px; display: -webkit-box; -webkit-box-align: center;
                          -webkit-box-pack: center; min-width: 60%; height: 80%; ">
  
                                      <img src="${logo ?logo:"https://videonpro.s3.amazonaws.com/assets/logo.png"}"
                          style="width: 60px; height: 60px; opacity: 1;margin-top: 95%;" />
                      <p style="color: white; padding-bottom: 0px;
                                      margin-left: 3%;
                                      font-weight: bolder;
                                      font-size: 50px;">VideonPRO</p>
  
  
          </td>
      </tr>
      </table>
      </td>
      </tr>
      </table>
      </td>
      </tr>
  
      <tr align="center">
          <p style="color: #3b93d2;font-size: 20px;font-weight: bold; text-align: center;">BE A PART OF OUR GROWING TEAM!</p>
      </tr>
  
      <tr align="center">
          <td>
              <table width="70%" style=" padding: 45px 0px 100px 0px;width: 100%;"
                  cellspacing="0" cellpadding="0">
                  <tr align="center">
                      <td>
                          <img style="width: 60%"
                              src="${thumbnail}" />
                          <p style="color: white">VIDEO Title</p>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      <tr align="center" ">
          <td align=" center" style="padding: 30px 0px 30px 0px">
          <p style="margin: 0px;color: #3b93d2;">
              ${text?text:"Viideon is a video communication platform design for sale and marketing leaders. "}
          </p>
          <p style="margin: 0px;color: #3b93d2;">
              Learn more at
              <a style="
                    text-decoration: none;
                    color: #3b93d2;
                    font-weight: bold;
                    cursor: pointer;
                  ">viideon.com</a>
          </p>
          </td>
      </tr>
  
  
  
  
      <tr>
          <td style="padding: 20px 0px 20px 0px;" align="center">
              <table width="250px" cellspacing="0" cellpadding="0">
                  <tr>
                      <td width="20%" align="center">
                          <img src="https://videonpro.s3.amazonaws.com/assets/logo.png" style="
                  width: 30px;
                  opacity: 1;
                  height: 30px;
                " />
                      </td>
  
                      <td width="50%" align="center">
  
                          <span style="color: #3b93d2;">Sent using Viideon</span>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      <tr align="center">
          <td style="padding: 10px 0px 20px 0px;">
              <table width="220px" cellspacing="10px" cellpadding="0">
                  <tr>
                      <td width="25%" align="center" style="background-color:#3b93d2;border-radius: 50%;">
                          <img width="24px" height="24px" style="    margin: 5px;"
                              src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                      </td>
                      <td style="background-color:#3b93d2;border-radius: 50%;" width="25%" align="center"><img
                              width="24px" height="24px"
                              src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" /></td>
                      <td style="background-color:#3b93d2;border-radius: 50%;" width="25%" align="center">
                          <img width="24px" height="24px" style="    margin: 5px;"
                              src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                      </td>
                      <td width="25%" align="center" style="border-radius: 50%;background-color:#3b93d2">
                          <img width="24px" height="24px"
                              src="https://videonpro.s3.us-west-1.amazonaws.com/1600688680432logo.jpeg" />
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
  
  
  
      </table>
  </body>
  
  </html>
  `
}

module.exports.social_impact = (id=false, thumbnail=false, logo=false, text=false,userName,url) => {
    return `
    <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
    <html>
    ​
    <head>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
        <meta http-equiv="Content-Style-Type" content="text/css">
        <title></title>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <meta name="Generator" content="Cocoa HTML Writer">
        <meta name="CocoaVersion" content="1894.6">
        <style type="text/css">
            .thumbnailWrapper {
                background-image: url(${thumbnail});
            }
            
            .overlay {
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                content: '';
                width: 100%;
                background: #000000;
                z-index: -1;
                opacity: .3;
            }
        </style>
    </head>
    ​
    <body>
        <table align="center" cellpadding="0" cellspacing="0" width="700">
    ​
            <tr align="center">
                <td align="center" style="background-image: url(https://videonpro.s3.amazonaws.com/assets/IntelicaCRE-BlogPhoto-office-social-gathering.jpg); background-size: cover; height: 200px;box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5); border-color:
        rgba(255, 255, 255, 1); max-width: 200px;">
    ​
                    <table align="center" cellpadding="0" cellspacing="0" width="100%">
                        <tr align="center">
                            <td style=" padding-left: 20px; display: -webkit-box; -webkit-box-align: center; -webkit-box-pack: center; min-width: 60%; height: 80%; ">
                                
                                <img src=" ${logo?logo:"https://videonpro.s3.amazonaws.com/assets/logo.png"} " style=" width: 60px; height: 60px; opacity: 1;margin-top: 50px; margin-left: 100px;" />
                                <p style=" color: #f6b415; padding-bottom: 0px; margin-left: 3%; font-weight: bolder; font-size: 50px; ">
                                    Viideon</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr align="center" >
                <p style=" color: #f6b415;font-size: 20px;font-weight: bold;text-align: center; ">Watch this Video!</p>
            </tr>
            <tr align="center">
                <td>
                    <table width=" 70% " style="  padding: 25px 0px 0px 0px;max-width: 400px;width: 100%; " cellspacing=" 0 " cellpadding=" 0 ">
                        <tr align=" center ">
                            <td>
                                
                                <img style=" width: 100% " src="${thumbnail}" />
                                <p style=" color: white ">VIDEO PLACEHOLDER</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
            <tr align="center">
                <td align=" center " style=" padding: 30px 0px 30px 0px ">
                    <p style=" margin: 0px;color: #f6b415; ">
                       ${text ? text:"Viideon is a video communication platform design for sale and marketing leaders."} 
                    </p>
                    <p style=" margin: 0px;color: #f6b415; ">
                         Learn more at
                        <a style=" text-decoration: none; color: #f6b415; font-weight: bold; cursor: pointer; ">viideon.com</a>
                    </p>
                </td>
            </tr>
    ​
    ​
    ​
            <tr align="center">
                <td align=" center " style=" padding: 15px 0px 15px 0px ">
    
                    <img style=" vertical-align: middle; width: 50px; height: 50px; border-radius: 50%; " src="${url ?url :"https://videonpro.s3.us-west-1.amazonaws.com/1610430702841"}">
                    <p style=" margin-bottom: 0; font-size: 16px; font-weight: bold;color: #f6b415; ">${userName}
                    </p>
                    <p style=" margin-top: 0; font-size: 14px;color: #f6b415; ">Nature Lover</p>
                </td>
            </tr>
            <tr>
                <td style="padding: 20px 0px 20px 0px;">
                    <table width="100% " cellspacing="0" cellpadding="0">
                        <tr>
                            <td width="33% " align="center ">
                                <p style=" font-size: 12px; padding-left: 5px;color: #f6b415; ">
                                    &copy; 2020 Viideon All Rights Reserved
                                </p>
                            </td>
                            <td width="33% " align="center"></td>
                            <td width="33% " align="center">
                                <img src="${logo? logo:"https://videonpro.s3.amazonaws.com/assets/logo.png"} " style=" width: 20px; opacity: 1; height: 20px; margin-right: 5px; margin-top: 10px; " />
                                <span style="color: #f6b415; ">Sent with Viideon</span>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
    ​
    ​
        </table>
    </body>
    ​
    </html>
    `
}

module.exports.ocean = (id=false, thumbnail=false, logo=false, text=false) => {
  return `
  <!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
  <html>
  ​
  <head>
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
      <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
      <meta http-equiv="Content-Style-Type" content="text/css">
      <title></title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
      <meta name="Generator" content="Cocoa HTML Writer">
      <meta name="CocoaVersion" content="1894.6">
      <style type="text/css">
          .emailTemplatethumbnailWrapper {
              ${thumbnail && 'background-image: url(${thumbnail});'}
          }
  ​
          .overlay {
              position: absolute;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              content: '';
              width: 100%;
              background: #000000;
              z-index: -1;
              opacity: .3;
          }
      </style>
  </head>
  <body>
      <table align=" center" cellpadding="0" cellspacing="0" width="700" style="background-color: #3b93d2;">
          <tr>
              <td>
                  <table align="center" cellpadding="0" cellspacing="0" style="background-color: #ffffff;border-top-right-radius: 10px; border-top-left-radius: 10px;margin-bottom: 10px;margin-top: 5%;" width="80%">
                      <tr align="left">
                          <td align="center">
                              <img src="${logo ? logo :"https://videonpro.s3.amazonaws.com/assets/logo.png"}" style="width: 60px; height: 60px; opacity: 1;margin-top: 5%; margin-bottom: 20px;" />
                          </td>
                      </tr>
                      <tr align="center">
                          <p style=" padding-bottom: 0px;font-weight: bolder;margin: 0 0 0 3%;font-size: 50px; text-align: center;">Viideon</p>
                      </tr>
                      <tr align="center">
                          <p style="color: black; margin-bottom: 10px;font-size: 14px;text-align: center;">Newsletter Bundle</p>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr align="center">
              <td width=100%>
                  <table style="" width="80%">
                      <tr align="center" style="margin-left:100px">
                          <p style="font-size: 24px;margin-left: 10px;">Create & Send Campaigns Simplified
                          </p>
                      </tr>
                      <tr align="center">
                          <td>
                              <table width="100%" class="emailTemplatethumbnailWrapper" style="background: #4d4d4d;max-width: 350px;"cellspacing="0" cellpadding="0">
                                  <tr align="center">
                                      <td>
                                          
                                          <img style="width: 100%"
                                              src="${thumbnail}" />
                                          <p style="color: white">VIDEO PLACEHOLDER</p>
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr align="center">
                          <td align="center">
                              <a href="${process.env.APP_DOMAIN}/watch/${id}/cta" style="text-decoration: none;">
                                  <p style="width: 190px;
                              color: white;
                              font-size: 20px;
                              border-radius: 20px;
                              background-color: #3b93d2;
                              padding: 5px;">Watch this Video!</p>
                              </a>
                          </td>
                      </tr>
                      <tr align="center">
                          <p style="color: black;margin-top: 0;font-size: 12px;">*Promotion ends next month</p>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr align="center">
              <td width="100%">
                  <table style="background-color: #ffffff;margin-top: 10px;margin-bottom: 5%;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;" width="80%">
                      <tr align="center">
                          <td align=" center" style="padding: 30px 0px 10px 0px">
                              <p style="margin: 0px;color: #3b93d2;margin: 0;">
                              ${text ? text : 
                                  "Viideon is a video communication platform design for sale and marketing leaders. Learn more at viideon.com"
                              }
                              </p>
                          </td>
                      </tr>
                      <tr align="center">
                          <td align=" center" style="padding: 5px 0px 10px 0px">
                              <p style="margin: 0px;color: black;">
                                  Try view on your <span style="color: #3b93d2;"><i>browser</i></span> or <span
                                      style="color: #3b93d2;"><i>unsubscribe</i></span>
                              </p>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
      </table>
  </body>
  ​
  </html>
  `
}