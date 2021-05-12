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

module.exports.spreadTheme = (
  id = false,
  thumbnail = false,
  logo = false,
  text = false,
  userName,
  url,
  fbUrl,
  twitterUrl,
  youtubeUrl,
  linkedinUrl,
  description = false
) => {
  
  return `
<!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Trransitional//EN”   “http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>
<html xmlns=”http://www.w3.org/1999/xhtml”>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin:0;
            padding:0;
            background: #ffffff;

        }
        table{
            border-spacing: 0;
        }
        td{
            padding:0;
            font-size: 0px;
        }
        a{
            font-size: 0px;
        }
        img{
            border:0;
        }
        .wrapper{
            width: 100%;
            table-layout: fixed;
            background-color: #ffffff;
            padding-bottom:0px;
        }
        .webkit{
            max-width:600px;
            background-color: #ffffff;
        }
        .outer{
            Margin:0 auto;
            width:100%;
            max-width:600px;
            border-spacing: 0;
            font-family:sans-serif;
            color:#ffffff;
        }
        .paddingleft{
            padding-left:40px;
        }
        .paddingright{
            padding-right:40px;
        }

        @media screen and (max-width:600px){

        }
        @media screen and (max-width:400px){
            
            .paddingleft{
                padding-left:10px!important;
            }
            .paddingright{
                padding-right:10px!important;
            }
        }
    </style>
</head>
<body>
    <center class="wrapper">
        <div class="webkit">
            <table class="outer" align="center" width="100%" style="border-spacing: 0;border-collapse: unset;">
                <tr>
                    <td align="center">
                        <a href="javascript:;">
                            <img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/spread/header.jpg" alt="" width="100%" style="width:100%; max-width:100%;">
                        </a>                     
                    </td>
                </tr>
                <tr>
                    <td style="padding-bottom:13px">
                        <a href="javascript:;">
                            <img src="${ thumbnail ? 
                                         thumbnail :
                                         'https://viideon.s3-us-west-1.amazonaws.com/email-templates/spread/video.jpg'}" alt="" width="600" style="max-width:600px; width:100%;" >
                        </a>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background: #ffffff;" class="paddingleft paddingright">
                        <table width="100%" style="max-width:500px; background-color: #ffffff; border-spacing: 0;border-collapse: unset;">
                           <tr>
                                <td>
                                    <p style="font-size:12px; color:#333333; text-align: center; padding-bottom:30px;">
                                    ${ text ? 
                                       text : 
                                       "Viideon is a video communication platform designed for sale and marketing leaders. Learn more at viideon.com"
                                    }
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="text-align: center; padding-bottom:30px;">
                                    <a href="${process.env.APP_DOMAIN}/watch/${id}/cta">
                                        <img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/spread/watch-btn.jpg" alt="">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td width="100%" align="center" style="background: #ffffff; padding-bottom:30px; width:100%" >
                        <table width="100%" style="border-spacing:0;border-collapse: unset;" >
                            <tr>
                                <td>
                                    <p style="font-size:10px; color:#333333; text-align: center; padding-bottom:10px; font-weight:bold;">Connect with me on</p>
                                </td>
                            </tr>
                            <tr>
                            <td style="padding-bottom:50px;" align="center">
                                <table align="center" style="border-spacing: 0;border-collapse: unset;display: inline-block;">
                                    <tr>
                                        <td style="width:22px; height:22px; padding-left:5px; padding-right:5px; " width="38" height="22">
                                            <a href="${fbUrl ? fbUrl : "https://www.facebook.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/spread/facebook.jpg" alt="facebook"></a>
                                        </td>
                                        <td style="width:22px; height:22px; padding-left:5px; padding-right:5px; " width="38" height="22">
                                            <a href="${twitterUrl ? twitterUrl : "https://twitter.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/spread/twitter.jpg" alt="twitter"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${youtubeUrl ? youtubeUrl : "https://youtube.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/spread/youtube.jpg" alt="youtube"></a>
                                        </td>
                                        <td style="width:22px; height:22px; padding-left:5px; padding-right:5px;" width="38" height="22">
                                            <a href="${linkedinUrl ? linkedinUrl : "https://www.linkedin.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/spread/linkedin.jpg" alt="linkedin"></a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            </tr>
                            <tr>
                                <td style="text-align: center; padding-bottom:6px;">
                                    <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/spread/logo-footer.jpg" alt=""></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="font-size:9px; color:#fdb415; text-align: center;">© 2021 VideonPro All Rights Reserved</p>
                                    
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>
</html> 
  `;
};
module.exports.corporateLight = (
  id = false,
  thumbnail = false,
  logo = false,
  text = false,
  userName,
  url,
  fbUrl,
  twitterUrl,
  youtubeUrl,
  linkedinUrl,
  description = false
) => {
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
        position: relative;
        background-color: white;
        width: 592px;
        min-width: 592px;
        min-height: 399px;
        max-height: 399px;
        background-position: center;
      }
      .headerImage {
        width: 60px;
        height: 60px;
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
        margin-left: 25px;
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
            <!-- add logo here -->
            <img src="${
              logo ? logo : "https://viideon.s3.us-west-1.amazonaws.com/1617972064558logo.jpeg"
            }" class="headerImage"/>
            <h1 class="headerH1">Viideon</h1>
          </div>
        </div>
  
        <div class="whiteBody">
          <a href="${process.env.APP_DOMAIN}/watch/${id}">
            <div class="thumbnailWrapper">
              <!-- add video thumbnail -->
              
              <img style="width: 100%" src="${
                thumbnail
                  ? thumbnail
                  : "https://d33v4339jhl8k0.cloudfront.net/docs/assets/591c8a010428634b4a33375c/images/5ab4866b2c7d3a56d8873f4c/file-MrylO8jADD.png"
              }" />
            </div>
          </a>
  
          <div class="footerWrapper w3-row w3-center">
            <div class="">
              <p>${
                text
                  ? text
                  : "Viideon is a video communication platform designed for sale and marketing leaders. Learn more at viideon.com"
              }</p>
              
              <a href="viideon.com">
                <button class="btn watchVideoBtn">${description}</button>
              </a>
          </div>
        </div>
      </div>
      </div>
    </div>
        <div class="footer">
          <div class="sender-wrapper">
            <img style="width: 44px; height: 44px;" src="https://viideon.s3.us-west-1.amazonaws.com/1617972064558logo.jpeg" />
            <p class="footerP">Sent using Viideon</p>
          </div>
          <div class="icon-wrapper">
            <a href="${fbUrl ? fbUrl : "https://www.facebook.com/"}">
              <img width="16px" height="16px" style="    margin: 5px;"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"/>
            </a>
            <a href="${twitterUrl ? twitterUrl : "https://twitter.com/"}">
              <img width="16px" height="16px" style="    margin: 5px;"
                                          src="https://cdn2.iconfinder.com/data/icons/metro-uinvert-dock/256/Twitter_NEW.png" />
            </a>
            <a href="${youtubeUrl ? youtubeUrl : "https://youtube.com/"}">
              <img width="16px" height="16px" style="    margin: 5px;"
                                          src="https://cdn.iconscout.com/icon/free/png-64/youtube-85-226402.png" />
            </a>
            <a href="${
              linkedinUrl ? linkedinUrl : "https://www.linkedin.com/"
            }">
              <img width="16px" height="16px" style="    margin: 5px;"
                            src="https://viideon.s3.us-west-1.amazonaws.com/1617967455922logo.jpeg" />
            </a>
          </div>
        </div>
  </body>
  </html>
    
  `;
};

module.exports.modernSimple = (
  id = false,
  thumbnail = false,
  logo = false,
  text = false,
  userName,
  url,
  fbUrl,
  twitterUrl,
  youtubeUrl,
  linkedinUrl,
  description = false
) => {
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
          table{
              border-collapse: unset;
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
                          <img src="${
                            logo
                              ? logo
                              : "https://viideon.s3.us-west-1.amazonaws.com/1617972064558logo.jpeg"
                          }"
                              style="width: 40px; height: 40px; opacity: 1;" />
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
                          
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      <tr align="center">
          <td align="center" style="padding: 30px 0px 30px 0px">
              <p style="margin: 0px;color: black;">
                  ${
                    text
                      ? text
                      : "Viideon is a video communication platform designed for sale and marketing leaders."
                  }
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
                  cursor: pointer;">${description}</p>
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
              
          </td>
      </tr>
      <tr align="center">
          <td style="padding: 10px 0px 20px 0px;">
              <table width="180px" cellspacing="0" cellpadding="0">
                  <tr>
                      <td width="25%" align="center" style="border-right: 1.5px solid">
                          <a href="${
                            youtubeUrl ? youtubeUrl : "https://youtube.com/"
                          }">
                              <img width="24px" height="24px"
                              src="https://cdn.iconscout.com/icon/free/png-64/youtube-85-226402.png" />
                          </a>
  
                      </td>
                      <td style="border-right: 1.5px solid" width="25%" align="center">
                          <a href="${
                            fbUrl ? fbUrl : "https://www.facebook.com/"
                          }">
                          <img width="24px" height="24px"
                          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"/>
                      </a>
                              </td>
                      <td style="border-right: 1.5px solid" width="25%" align="center">
                          <a href="${
                            twitterUrl ? twitterUrl : "https://twitter.com/"
                          }">
                          <img width="24px" height="24px"
                              src="https://viideon.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" /></a>
                      </td>
                      <td width="25%" align="center">
                          <a href="${
                            linkedinUrl
                              ? linkedinUrl
                              : "https://www.linkedin.com/"
                          }">
                          <img width="24px" height="24px"
                              src="https://viideon.s3.us-west-1.amazonaws.com/1617967455922logo.jpeg" /></a>
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
                              &copy; 2021 Viideon All Rights Reserved
                          </p>
                      </td>
                      <td width="33%" align="center"></td>
                      <td width="33%" align="center">
                          <img src="${
                            logo
                              ? logo
                              : "https://viideon.s3.us-west-1.amazonaws.com/1617972064558logo.jpeg"
                          }" style="
                  width: 20px;
                  opacity: 1;
                  height: 20px;
                  margin-right: 5px;
                " />
                          <span style="color: black;">Sent with Videon</span>
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
      </table>
  </body>
  
  </html>
  `;
};

module.exports.classic_dark = (
  id = false,
  thumbnail = false,
  logo = false,
  text = false,
  userName = false,
  url = false,
  fbUrl = false,
  twitterUrl = false,
  youtubeUrl = false,
  linkedinUrl = false,
  description = false
) => {
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
              margin: auto;
          }
          table{
              border-collapse: unset;
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
          .heAd{
              font-size: 30px;
      text-align: center;
      width: 700px;
      background: black;
      color: white;
      
      padding: 20px;
      margin: auto;
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
      <table align=" center" cellpadding="0" cellspacing="0" width="700" style="background-color: #1a1a1a; margin: auto;">
          <tr>
              <div class="wrapper">
                  <a class="left" href="#1"
                      style=" 
              background-position: center;padding-left: 20px;background-color: #333333;display: -webkit-box;-webkit-box-align: center;-webkit-box-pack: center;    margin-top: 5%;">
                      <img src=" ${
                        logo
                          ? logo
                          : "https://viideon.s3.us-west-1.amazonaws.com/1617972064558logo.jpeg"
                      }"
                          style="width: 30px; height: 30px; opacity: 1;margin: 10px;" />
                      <p style="color: white; margin: 0px;
                                      margin-left: 3%;
                                      margin: auto;
                                      text-align: center;
                                      font-weight: bolder;
                                      font-size: 30px;">Viideon</p>
                  </a>
                  <div class="right"> </div>
                  <div class="inner"></div>
              </div>
          </tr>
          <tr align="left" style="margin-left:100px">
              <p class="heAd" style="font-size: 30px;text-align: center;">Hello ${
                userName ? userName : "John!"
              }</p>
          </tr>
          <tr align="center">
              <td>
                  <table class="emailTemplatethumbnailWrapper" width="70%" cellspacing="0" cellpadding="0"
                      style="max-width: 400px;margin:12px">
                      <tr align="center">
                          <td>
                              
                              <img style="width: 100%"
                                  src="${thumbnail}" />
                              
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          <tr align="center">
              <td align="center">
                  <a href="${
                    process.env.APP_DOMAIN
                  }/watch/${id}/cta" style="text-decoration: none;">
                      <p style="    border: 2px solid white;
                  width: 180px;
                  color: white;
                  font-size: 20px;
                  border-radius: 20px;">${description}</p>
                  </a>
              </td>
          </tr>
          <tr align="center">
              <td align="center" style="padding: 30px 0px 30px 0px">
                  <p style="margin: 0px;color: white;">
                  ${
                    text
                      ? text
                      : "Viideon is a video communication platform designed for sale and marketing leaders."
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
                              <table width="120px" cellspacing="10px" cellpadding="0">
                                  <tr>
                                  <td  width="25%" align="center">
                                  <a href="${
                                    fbUrl ? fbUrl : "https://www.facebook.com/"
                                  }">
                                  <img width="24px" height="24px"
                                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"/>
                              </a>
                                      </td>
                                      <td width="25%" align="center">
                                          <a href="${
                                            linkedinUrl
                                              ? linkedinUrl
                                              : "https://www.linkedin.com/"
                                          }">
                                          <img width="24px" height="24px"
                                              src="https://viideon.s3.us-west-1.amazonaws.com/1617967455922logo.jpeg" /></a>
                                      </td>
                                      
                              <td  width="25%" align="center">
                                  <a href="${
                                    twitterUrl
                                      ? twitterUrl
                                      : "https://twitter.com/"
                                  }">
                                  <img width="24px" height="24px"
                                      src="https://viideon.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" /></a>
                              </td>
                              <td width="25%" align="center">
                                  <a href="${
                                    youtubeUrl
                                      ? youtubeUrl
                                      : "https://youtube.com/"
                                  }">
                                      <img width="24px" height="24px"
                                      src="https://cdn.iconscout.com/icon/free/png-64/youtube-85-226402.png" />
                                  </a>
          
                              </td>
                                  </tr>
                              </table>
                          </td>
                          <td width="20%" align="center"></td>
                          <td width="40%" align="center" style="padding: 5px;">
                              <img src="${
                                logo
                                  ? logo
                                  : "https://viideon.s3.us-west-1.amazonaws.com/1617972064558logo.jpeg"
                              }" style="
                  width: 20px;
                  opacity: 1;
                  height: 20px;
                  margin-right: 5px;
                  
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
  `;
};

module.exports.sleek = (
  id = false,
  thumbnail = false,
  logo = false,
  text = false,
  userName,
  url,
  fbUrl,
  twitterUrl,
  youtubeUrl,
  linkedinUrl,
  description = false,
) => {
 
  return `
<!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Trransitional//EN”   “http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>
<html xmlns=”http://www.w3.org/1999/xhtml”>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin:0;
            padding:0;
            background: #ffffff;

        }
        table{
            border-spacing: 0;
        }
        td{
            padding:0;
            font-size: 0px;
        }
        a{
            font-size: 0px;
        }
        img{
            border:0;
        }
        .wrapper{
            width: 100%;
            table-layout: fixed;
            background-color: #ffffff;
            padding-bottom:0px;
        }
        .webkit{
            max-width:600px;
            background-color: #ffffff;
        }
        .outer{
            Margin:0 auto;
            width:100%;
            max-width:600px;
            border-spacing: 0;
            font-family:sans-serif;
            color:#ffffff;
        }
        .padding{
            padding:40px;
        }

        @media screen and (max-width:600px){

        }
        @media screen and (max-width:400px){
            .padding{
                padding-left:10px!important;
                padding-right:10px!important;
            }
        }
    </style>
</head>
<body>
    <center class="wrapper">
        <div class="webkit">
            <table class="outer" align="center" width="100%" style="border-spacing: 0;border-collapse: unset;">
                <tr>
                    <td align="center">
                        <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/sleek/top.jpg" alt="" width="100%" style="width:100%; max-width:100%;"></a>
                    </td>
                </tr>
                <tr>
                    <td width="100%" align="center">
                        <table width="" style="border-spacing: 0;border-collapse: unset;">
                            <tr>
                                <td>
                                    <img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/sleek/person.jpg" alt="" width="61" style="width:61px; max-width:61px;">
                                </td>
                                <td align="left" valign="middle" style="padding-left:10px;">
                                    <h3 style="color:#000000; font-size:20px; margin:0px;">${userName}</h3>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td style="padding:15px 20px;">
                        <table width="100%;">
                            <tr>
                                <td height="1" style="background:#000000;"></td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background: #ffffff;">
                        <table align="center" style="max-width:408px; background-color: #ffffff; border-spacing: 0; border-collapse: unset;">
                            <tr>
                                <td style="padding-bottom:13px">
                                    <a href="javascript:;">
                                        <img src="${ thumbnail ?
                                                     thumbnail :
                                                     'https://viideon.s3-us-west-1.amazonaws.com/email-templates/sleek/video.jpg' }" alt="" width="408" style="max-width:408px; width:100%;" >
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="font-size:12px; color:#333333; text-align: center; padding-bottom:30px;">
                                        ${ text ?
                                           text :
                                           "Viideon is a video communication platform designed for sale and marketing leaders."
                                        }
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="text-align: center;">
                                    <a href="${process.env.APP_DOMAIN}/watch/${id}/cta"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/sleek/watch-btn.jpg" alt=""></a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td width="100%" align="center" style="background: #ffffff; padding-bottom:30px; width:100%" >
                        <table width="100%" style="border-spacing:0;border-collapse: unset;">
                            <tr>
                                <td>
                                    <p style="font-size:10px; color:#333333; text-align: center; padding-top:1rem;">Connect with me on</p>
                                </td>
                            </tr>
                            <tr>
                            <td style="padding-bottom:50px;" align="center">
                                <table align="center" style="border-spacing: 0; border-collapse: unset; display: inline-block;">
                                    <tr>
                                        <td style="width:22px; height:22px; padding-left:5px; padding-right:5px; border-right:1px solid #000;" width="38" height="22">
                                            <a href="${youtubeUrl ? youtubeUrl : "https://youtube.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/sleek/facebook.jpg" alt="facebook"></a>
                                        </td>
                                        <td style="width:22px; height:22px; padding-left:5px; padding-right:5px; border-right:1px solid #000;" width="38" height="22">
                                            <a href="${fbUrl ? fbUrl : "https://www.facebook.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/sleek/twitter.jpg" alt="twitter"></a>
                                        </td>
                                        <td style="width:22px; height:22px; padding-left:5px; padding-right:5px;" width="38" height="22">
                                            <a href="${twitterUrl ? twitterUrl : "https://twitter.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/sleek/linkedin.jpg" alt="linkedin"></a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            </tr>
                            <tr>
                                <td style="text-align: center; padding-bottom:6px;">
                                    <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/sleek/logo-footer.jpg" alt=""></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="font-size:9px; color:#333333; text-align: center;">© 2021 VideonPro All Rights Reserved</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>
</html>
  `;
};
module.exports.sleek2 = (
  id = false,
  thumbnail = false,
  logo = false,
  text = false,
  userName,
  url,
  fbUrl,
  twitterUrl,
  youtubeUrl,
  linkedinUrl
) => {
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

<body>
    <table align="center" cellpadding="0" cellspacing="0" width="600">
        <tr align="center">
            <td>
                <table class="emailTemplatethumbnailWrapper" width=" 100%" cellspacing="0" cellpadding="0" width="70%"
                    style="background: #4d4d4d;max-width: 400px;">
                    <tr align="center">
                        <td>
                            <img style="width: 50%; height:30vh" src="https://viideon.s3.us-west-1.amazonaws.com/1617884192165logo.jpeg" />
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
    
        <tr align="center">
            <td align="center">
                <a href="${process.env.APP_DOMAIN}/watch/${id}/cta">
                    <p style="margin: 0px;color: black; font-size: 30px; font-weight: bold; margin-bottom: 5px; max-width: 300px; width: 100%; cursor: pointer;">Watch this Video!</p>
                </a>
            </td>
        </tr>
    </table>
</body>
</html>
    `;
};

module.exports.social_business = (
  id = false,
  thumbnail = false,
  logo = false,
  text = false,
  userName,
  url,
  fbUrl,
  twitterUrl,
  youtubeUrl,
  linkedinUrl,
  description = false
) => {
  return `
<!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Trransitional//EN”   “http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>
<html xmlns=”http://www.w3.org/1999/xhtml”>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin:0;
            padding:0;
            background: #ffffff;

        }
        table{
            border-spacing: 0;
        }
        td{
            padding:0;
            font-size: 0px;
        }
        a{
            font-size: 0px;
        }
        img{
            border:0;
        }
        .wrapper{
            width: 100%;
            table-layout: fixed;
            background-color: #ffffff;
            padding-bottom:0px;
        }
        .webkit{
            max-width:600px;
            background-color: #ffffff;
        }
        .outer{
            Margin:0 auto;
            width:100%;
            max-width:600px;
            border-spacing: 0;
            font-family:sans-serif;
        }
        .padding{
            padding:40px;
        }
        .paddingtop{
            padding-top: 15px;
        }
        .paddingbottom{
            padding-bottom: 40px;
        }

        @media screen and (max-width:600px){

        }
        @media screen and (max-width:400px){
            .padding{
                padding-left:10px!important;
                padding-right:10px!important;
            }
        }
    </style>
</head>
<body>
    <center class="wrapper">
        <div class="webkit">
            <table class="outer" align="center" width="100%" style="border-spacing: 0;border-collapse: unset;">
                <tr>
                    <td align="center">
                        <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-business/top.jpg" alt="" width="100%" style="width:100%; max-width:100%;"></a>
                    </td>
                </tr>
                <tr>
                    <td width="100%" align="center">
                        <table width="" style="border-spacing: 0;border-collapse: unset;">
                            <tr>
                                <td>
                                    <img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-business/person.jpg" alt="" width="77" style="width:77px; max-width:77px;">
                                </td>
                                <td align="left" valign="middle" style="padding-left:10px;">
                                    <h3 style="color:#3a94d2; font-size:24px; margin:0px;">${userName}</h3>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td align="center" class="paddingtop paddingbottom">
                        <table width="100%" style="max-width:450px; border-spacing:0; border-collapse: unset;">
                            <tr>
                                <td>
                                    <img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-business/top-curve.jpg" alt="" width="100%" style='max-width:100%;'>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="background:#3a94d2; border-left:2px solid #999999; border-right:2px solid #999999;" class="padding">
                                    <table width="100%" style="max-width:408px; border-spacing: 0; border-collapse: unset;">
                                        <tr>
                                            <td style="padding-bottom:13px">
                                                <a href="">
                                                    <img src="${ thumbnail ?
                                                                 thumbnail :
                                                                 'https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-business/video.jpg' }" alt="" width="408" style="max-width:408px; width:100%;" >
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="font-size:12px; color:#ffffff; text-align: center; padding-bottom:30px;">
                                                    ${ text ? 
                                                       text :
                                                       "Viideon is a video communication platform designed for sale and marketing leaders. Learn more at viideon.com"
                                                    }
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="text-align: center;">
                                                <a href="${process.env.APP_DOMAIN}/watch/${id}/cta"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-business/watch-btn.jpg" alt=""></a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-business/bottom-curve.jpg" alt="" width="100%" style='max-width:100%;'>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td width="100%" align="center" style="background: #ffffff; padding-bottom:30px; width:100%" >
                        <table width="100%" style="border-spacing:0;border-collapse: unset;">
                            <tr>
                                <td>
                                    <p style="font-size:10px; color:#3a94d2; text-align: center; padding-bottom:11px; font-weight:bold;">Connect with me on</p>
                                </td>
                            </tr>
                            <tr>
                            <td style="padding-bottom:30px;" align="center">
                                <table align="center" style="border-spacing: 0; display: inline-block; border-collapse: unset;">
                                    <tr>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${ fbUrl ? fbUrl : "https://www.facebook.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-business/facebook.jpg" alt="facebook"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${ twitterUrl ? twitterUrl : "https://twitter.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-business/twitter.jpg" alt="twitter"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${ youtubeUrl ? youtubeUrl : "https://youtube.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-business/youtube.jpg" alt="youtube"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${ linkedinUrl ? linkedinUrl : "https://www.linkedin.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-business/linkedin.jpg" alt="linkedin"></a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            </tr>
                            <tr>
                                <td style="text-align: center; padding-bottom:6px;">
                                    <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-business/logo-footer.jpg" alt=""></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="font-size:9px; color:#3a94d2; text-align: center;">© 2021 VideonPro All Rights Reserved</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>
</html>
  `;
};

module.exports.streamlined = (
  id = false,
  thumbnail = false,
  logo = false,
  text = false,
  userName,
  url,
  fbUrl,
  twitterUrl,
  youtubeUrl,
  linkedinUrl,
  description = false
) => {
  return `
<!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Trransitional//EN”   “http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>
<html xmlns=”http://www.w3.org/1999/xhtml”>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin:0;
            padding:0;
            background: #ffffff;

        }
        table{
            border-spacing: 0;
        }
        td{
            padding:0;
            font-size: 0px;
        }
        a{
            font-size: 0px;
        }
        img{
            border:0;
        }
        .wrapper{
            width: 100%;
            table-layout: fixed;
            background-color: #ffffff;
            padding-bottom:0px;
        }
        .webkit{
            max-width:600px;
            background-color: #ffffff;
        }
        .outer{
            Margin:0 auto;
            width:100%;
            max-width:600px;
            border-spacing: 0;
            font-family:sans-serif;
            color:#ffffff;
        }
        .paddingleft{
            padding-left:40px;
        }
        .paddingright{
            padding-right:40px;
        }

        @media screen and (max-width:600px){

        }
        @media screen and (max-width:400px){
            
            .paddingleft{
                padding-left:10px!important;
            }
            .paddingright{
                padding-right:10px!important;
            }
        }
    </style>
</head>
<body>
    <center class="wrapper">
        <div class="webkit">
            <table class="outer" align="center" width="100%" style="border-spacing: 0;border-collapse: unset;">
                <tr>
                    <td align="center">
                        <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/streamlined/header.jpg" alt="" width="100%" style="width:100%; max-width:100%;"></a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="javascript:;">
                            <img src="${ thumbnail ?
                                         thumbnail :
                                         'https://viideon.s3-us-west-1.amazonaws.com/email-templates/streamlined/video.jpg'}" alt="" width="600" style="max-width:600px; width:100%;" >
                        </a>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background: #3a94d2; padding-top:20px; padding-bottom:20px;" class="paddingleft paddingright">
                        <table width="100%" style="max-width:500px; border-spacing: 0;border-collapse: unset;">
                           <tr>
                                <td>
                                    <p style="font-size:12px; color:#ffffff; text-align: center; padding-bottom:30px;">
                                        ${ text ?
                                           text :
                                           "Viideon is a video communication platform designed for sale and marketing leaders. Learn more at viideon.com."
                                        }
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="text-align: center;">
                                    <a href="${process.env.APP_DOMAIN}/watch/${id}/cta">
                                        <img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/streamlined/watch-btn.jpg" alt="">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr>
                    <td width="100%" align="center" style="background: #ffffff; padding-bottom:30px; padding-top:30px; width:100%" >
                        <table width="100%" style="border-spacing:0;border-collapse: unset;">
                            <tr>
                                <td>
                                    <p style="font-size:10px; color:#333333; text-align: center; padding-bottom:10px; font-weight:bold;">Connect with me on</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom:50px;" align="center">
                                    <table align="center" style="border-spacing: 0; display: inline-block;border-collapse: unset;">
                                        <tr>
                                            <td style="width:22px; height:22px; padding-left:5px; padding-right:5px;" width="38" height="22">
                                                <a href="${ youtubeUrl ? youtubeUrl : "https://youtube.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/streamlined/facebook.jpg" alt="facebook"></a>
                                            </td>
                                            <td style="width:22px; height:22px; padding-left:5px; padding-right:5px;" width="38" height="22">
                                                <a href="${ fbUrl ? fbUrl : "https://www.facebook.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/streamlined/twitter.jpg" alt="twitter"></a>
                                            </td>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${ twitterUrl ? twitterUrl : "https://twitter.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/streamlined/youtube.jpg" alt="youtube"></a>
                                            </td>
                                            <td style="width:22px; height:22px; padding-left:5px; padding-right:5px;" width="38" height="22">
                                                <a href="${ linkedinUrl ? linkedinUrl : "https://www.linkedin.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/streamlined/linkedin.jpg" alt="linkedin"></a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center; padding-bottom:6px;">
                                    <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/streamlined/logo-footer.jpg" alt=""></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="font-size:9px; color:#3a94d2; text-align: center;">© 2021 VideonPro All Rights Reserved</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>
</html>
  `;
};

module.exports.simple_blue = (
  id = false,
  thumbnail = false,
  logo = false,
  text = false,
  userName,
  url,
  fbUrl,
  twitterUrl,
  youtubeUrl,
  linkedinUrl,
  description = false
) => {
  return `
<!DOCTYPE html PUBLIC “-//W3C//DTD XHTML 1.0 Trransitional//EN”   “http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd”>
<html xmlns=”http://www.w3.org/1999/xhtml”>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            margin:0;
            padding:0;
            background: #ffffff;

        }
        table{
            border-spacing: 0;
        }
        td{
            padding:0;
            font-size: 0px;
        }
        a{
            font-size: 0px;
        }
        img{
            border:0;
        }
        .wrapper{
            width: 100%;
            table-layout: fixed;
            background-color: #ffffff;
            padding-bottom:0px;
        }
        .webkit{
            max-width:600px;
            background-color: #ffffff;
        }
        .outer{
            Margin:0 auto;
            width:100%;
            max-width:600px;
            border-spacing: 0;
            font-family:sans-serif;
            color:#ffffff;
        }
        .padding{
            padding:40px;
        }

        @media screen and (max-width:600px){

        }
        @media screen and (max-width:400px){
            .padding{
                padding-left:10px!important;
                padding-right:10px!important;
            }
        }
    </style>
</head>
<body>
    <center class="wrapper">
        <div class="webkit">
            <table class="outer" align="center" width="100%" style="border-spacing: 0;border-collapse: unset;">
                <tr>
                    <td align="center">
                        <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/simple-blue/header.jpg" alt="" width="100%" style="width:100%; max-width:100%;"></a>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background: #ffffff; padding: 40px;">
                        <table width="100%" style="max-width:408px; background-color: #ffffff; border-spacing: 0;border-collapse: unset;">
                            <tr>
                                <td style="padding-bottom:13px">
                                    <a href="javascript:;">
                                        <img src="${ thumbnail ?
                                                     thumbnail :
                                                     'https://viideon.s3-us-west-1.amazonaws.com/email-templates/simple-blue/video.jpg' }" alt="" width="408" style="max-width:408px; width:100%;" >
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="font-size:12px; color:#333333; text-align: center; padding-bottom:30px;">
                                        ${ text ?
                                           text : 
                                           "Viideon is a video communication platform designed for sale and marketing leaders. Learn more at viideon.com"
                                        }
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="text-align: center;">
                                    <a href="${process.env.APP_DOMAIN}/watch/${id}/cta">
                                        <img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/simple-blue/watch-btn.jpg" alt="">
                                    </a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td width="100%" align="center" style="background: #ffffff; padding-bottom:30px; width:100%" >
                        <table width="100%" style="border-spacing:0;border-collapse: unset;" >
                            <tr>
                                <td>
                                    <p style="font-size:10px; color:#333333; text-align: center; padding-bottom:10px;">Connect with me on</p>
                                </td>
                            </tr>
                            <tr>
                            <td style="padding-bottom:50px;" align="center">
                                <table align="center" style="border-spacing: 0;border-collapse: unset;display: inline-block;">
                                    <tr>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${youtubeUrl ? youtubeUrl : "https://youtube.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/simple-blue/facebook.jpg" alt="facebook"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${fbUrl ? fbUrl : "https://www.facebook.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/simple-blue/twitter.jpg" alt="twitter"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${twitterUrl ? twitterUrl : "https://twitter.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/simple-blue/youtube.jpg" alt="youtube"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${linkedinUrl ? linkedinUrl : "https://www.linkedin.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/simple-blue/linkedin.jpg" alt="linkedin"></a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            </tr>
                            <tr>
                                <td style="text-align: center; padding-bottom:6px;">
                                    <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/simple-blue/logo-footer.jpg" alt=""></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="font-size:9px; color:#333333; text-align: center;">© 2021 VideonPro All Rights Reserved</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
            </table>
        </div>
    </center>
</body>
</html>
  `;
};

module.exports.social_impact = (
  id = false,
  thumbnail = false,
  logo = false,
  text = false,
  userName,
  url,
  fbUrl,
  twitterUrl,
  youtubeUrl,
  linkedinUrl,
  description = false
) => {
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
          table{border-collapse: unset;}
      </style>
  </head>
  ​
  <body>
      <table align="center" cellpadding="0" cellspacing="0" width="700">
  ​
          <tr align="center">
              <td align="center" style="background-image: url(https://viideon.s3.amazonaws.com/assets/IntelicaCRE-BlogPhoto-office-social-gathering.jpg); background-size: cover; height: 200px;box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5); border-color:
      rgba(255, 255, 255, 1); max-width: 200px;">
  ​
                  <table align="center" cellpadding="0" cellspacing="0" width="100%">
                      <tr align="center">
                          <td style="  display: -webkit-box; -webkit-box-align: center; -webkit-box-pack: center; min-width: 60%; height: 80%; ">
                              
                              <img src=" ${
                                logo
                                  ? logo
                                  : "https://viideon.s3.us-west-1.amazonaws.com/1617972064558logo.jpeg"
                              } " style=" width: 60px; height: 60px; opacity: 1; " />
                              <p style=" color: #f6b415; padding-bottom: 0px; margin-left: 3%; font-weight: bolder; font-size: 50px; ">
                                  Viideon</p>
                          </td>
                      </tr>
                  </table>
              </td>
          </tr>
          
          <tr align="center "; >
              <td>
                  
                  <table width=" 70% " style="  padding: 25px 0px 0px 0px;max-width: 400px;width: 100%; margin: auto;" cellspacing=" 0 " cellpadding=" 0 ">
                      <tr align=" center" >
                          <td>
                              
                              <img style=" width: 100% " src="${thumbnail}" />
                              
                          </td>
                          
                      </tr>
                      ​<tr align="center" >
                          <td align="center">
                              <a href="${
                                process.env.APP_DOMAIN
                              }/watch/${id}/cta" style="text-decoration: none;">
                                  <p style="    border: 2px solid white;
                                  width: 180px;
                                  margin:10px;
                                  color: rgb(8, 8, 8);
                                  font-size: 20px;
                                  border-radius: 20px;">${description}</p>
                              </a>
                          </td>
                      </tr>
                      
                  </table>
              </td>
          </tr>
          
          
          <tr align="center">
              <td align=" center " style=" padding: 30px 0px 30px 0px ">
                  <p style=" margin: 0px;color: #f6b415; ">
                     ${
                       text
                         ? text
                         : "Viideon is a video communication platform designed for sale and marketing leaders."
                     } 
                  </p>
                  <p style=" margin: 0px;color: #f6b415; ">
                       Learn more at
                      <a style=" text-decoration: none; color: #f6b415; font-weight: bold; cursor: pointer; ">viideon.com</a>
                  </p>
              </td>
          </tr>
  ​​        
          <tr align="center">
              <td align=" center " style=" padding: 15px 0px 15px 0px ">
  
                  <img style=" vertical-align: middle; width: 50px; height: 50px; border-radius: 50%; " src="${
                    url
                      ? url
                      : "https://viideon.s3.us-west-1.amazonaws.com/1610430702841"
                  }">
                  <p style=" margin-bottom: 0; font-size: 16px; font-weight: bold;color: #f6b415; ">${userName}
                  </p>
                 
              </td>
          </tr>
          
          <tr>
              <td style="padding: 20px 0px 20px 0px;">
                  <table width="100% " cellspacing="0" cellpadding="0">
                      <tr>
                          <td width="33% " align="center ">
                              <p style=" font-size: 12px; padding-left: 5px;color: #f6b415; ">
                                  &copy; 2021 Viideon All Rights Reserved
                              </p>
                          </td>
                          <td width="33% " align="center"></td>
                          <td width="33% " align="center">
                              <img src="${
                                logo
                                  ? logo
                                  : "https://viideon.s3.us-west-1.amazonaws.com/1617972064558logo.jpeg"
                              } " style=" width: 20px; opacity: 1; height: 20px; margin-right: 5px; margin-top: 10px; " />
                              <span style="color: #f6b415; ">Sent with Viideon</span>
                          </td>
                          <td style="padding: 10px" width="25%" align="center">
                        <a href="${
                          youtubeUrl ? youtubeUrl : "https://youtube.com/"
                        }">
                            <img width="24px" height="24px"
                            src="https://cdn.iconscout.com/icon/free/png-64/youtube-85-226402.png" />
                        </a>

                    </td>
                    <td style="padding: 10px" width="25%" align="center">
                        <a href="${
                          fbUrl ? fbUrl : "https://www.facebook.com/"
                        }">
                        <img width="24px" height="24px"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"/>
                    </a>
                            </td>
                    <td style="padding: 10px" width="25%" align="center">
                        <a href="${
                          twitterUrl ? twitterUrl : "https://twitter.com/"
                        }">
                        <img width="24px" height="24px"
                            src="https://viideon.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" /></a>
                    </td>
                    <td style="padding: 10px" width="25%" align="center">
                        <a href="${
                          linkedinUrl
                            ? linkedinUrl
                            : "https://www.linkedin.com/"
                        }">
                        <img width="24px" height="24px"
                            src="https://viideon.s3.us-west-1.amazonaws.com/1617967455922logo.jpeg" /></a>
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
    `;
};

module.exports.ocean = (
  id = false,
  thumbnail = false,
  logo = false,
  text = false,
  userName,
  url,
  fbUrl,
  twitterUrl,
  youtubeUrl,
  linkedinUrl,
  description = false
) => {
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
              ${thumbnail && "background-image: url(${thumbnail});"}
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
          table{
            border-collapse: unset;
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
                              <img src="${
                                logo
                                  ? logo
                                  : "https://viideon.s3.us-west-1.amazonaws.com/1617972064558logo.jpeg"
                              }" style="width: 60px; height: 60px; opacity: 1;margin-top: 5%; margin-bottom: 20px;" />
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
                  <table  width="80%">
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
                                          <!-- <p style="color: white">VIDEO PLACEHOLDER</p> -->
                                      </td>
                                  </tr>
                              </table>
                          </td>
                      </tr>
                      <tr align="center">
                          <td align="center">
                              <a href="${
                                process.env.APP_DOMAIN
                              }/watch/${id}/cta" style="text-decoration: none;">
                                  <p style="width: 190px;
                              color: white;
                              font-size: 20px;
                              border-radius: 20px;
                              background-color: #3b93d2;
                              padding: 5px;">${description}</p>
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
                              ${
                                text
                                  ? text
                                  : "Viideon is a video communication platform designed for sale and marketing leaders. Learn more at viideon.com"
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
          <table style="margin:auto" width="220px" cellspacing="10px" cellpadding="0">
                <tr>
                    <td width="25%" align="center" style="border-right: 1.5px solid">
                        <a href="${
                          youtubeUrl ? youtubeUrl : "https://youtube.com/"
                        }">
                            <img width="24px" height="24px"
                            src="https://cdn.iconscout.com/icon/free/png-64/youtube-85-226402.png" />
                        </a>

                    </td>
                    <td style="border-right: 1.5px solid" width="25%" align="center">
                        <a href="${
                          fbUrl ? fbUrl : "https://www.facebook.com/"
                        }">
                        <img width="24px" height="24px"
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Facebook_icon.svg/1200px-Facebook_icon.svg.png"/>
                    </a>
                            </td>
                    <td style="border-right: 1.5px solid" width="25%" align="center">
                        <a href="${
                          twitterUrl ? twitterUrl : "https://twitter.com/"
                        }">
                        <img width="24px" height="24px"
                            src="https://viideon.s3.us-west-1.amazonaws.com/1600681828680logo.jpeg" /></a>
                    </td>
                    <td width="25%" align="center">
                        <a href="${
                          linkedinUrl
                            ? linkedinUrl
                            : "https://www.linkedin.com/"
                        }">
                        <img width="24px" height="24px"
                            src="https://viideon.s3.us-west-1.amazonaws.com/1617967455922logo.jpeg" /></a>
                    </td>
                </tr>
            </table>
      </table>
  </body>
  ​
  </html>
  `;
};
