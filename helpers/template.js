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

module.exports.spreadTheme = (id, thumbnail) => {
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
      background-image: url('https://videonpro.s3.amazonaws.com/assets/spreadHeader.jpg');
      width: 100%;
      min-width: 60%;
      height: 240px;
      background-position: center;
      opacity: 0.9;
    }
    .thumbnailWrapper {
      background-image: url(${thumbnail});
      width: 100%;
      min-height: 512px;
      max-height: 720px;
      background-position: center;
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
        <img src="https://videonpro.s3.amazonaws.com/assets/logo.png" class="headerImage"/>
        <h1 class="headerH1">VideonPRO</h1>
        <p class="headerP">Join our movement</p>
      </div>

      <a href="${process.env.APP_DOMAIN}/watch/${id}">
        <div class="thumbnailWrapper">
          <img style="width: 80px; margin-top: 29%" src="https://vidionpro-backend.herokuapp.com/video/email/track?id=${id}" /> 
        </div>
      </a>

    </div>

    <div class="footerWrapper w3-row w3-center">
      <div class="w3-third">
          <a href="${process.env.APP_DOMAIN}/watch/${id}/cta">
            <button class="btn watchVideoBtn">Watch this Video</button>
          </a>
        <div class="w3-row w3-center copyRightWrapper">
          <span class="w3-third">
            <a href="videonpro.com">
              <img style="width: 45px; height: 45px;" src="https://videonpro.s3.amazonaws.com/assets/logo.png">
            </a>
          </span>
          <span class="w3-twothird">
            <p>Sent using VideonPRO</p>
          </span>
        </div>
      </div>
      <div class="w3-twothird w3-center">
        <p style="margin: 1em;">VideonPRO is a video communication platform design for sale and marketing leaders. Learn more at videonpro.com</p>
        <div>
          <a href="https://www.facebook.com/">
            <button class="fbBtn socialBtn">F</button>
          </a>
          <a href="https://twitter.com/">
            <button class="twitterBtn socialBtn">T</button>
          </a>
          <a href="https://youtube.com/">
            <button class="youTubBtn socialBtn">Y</button>
          </a>
          <a href="https://www.linkedin.com/">
            <button class="linkedInBtn socialBtn">L</button>
          </a>
        </div>
      </div>
    </div>
  </div>
</body>
</html>  
  `
}

module.exports.corporateLight = (id, thumbnail) => {
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
    a {
      cursor: pointer !important;
      color: transparent;
      text-decoration: none;
    }
  </style>
</head>
<body style="text-align: -webkit-center;">
  <div style="background-color: #eff3f4; width: 960px; padding-bottom: 64px;">
    <div class="mainWrapper" style="text-align: -webkit-center; max-width: 720px; min-width: 512px; background-color: #eff3f4; background: #eff3f4;">
      <div class="bodyWrapper" style="min-width: 480px; max-width: 720px; background-color: #eff3f4;">
        <div class="headerWrapper" style="max-width: 720px; min-width: 480px; height: 100px; margin-top: 10px; display: -webkit-inline-box; -webkit-box-align: center; -webkit-box-pack: center;">
          <img style="width: 80px; height: 80px" src="https://videonpro.s3.amazonaws.com/assets/logo.png" class="headerImage"/>
          <h1 class="headerH1" style="font-weight: bolder; color: #3a94d2; font-size: 55px; margin-left: 14px; padding-bottom: 0px;">VideonPRO</h1>
        </div>
      </div>
      <div class="whiteBody" style="background-color: #FFFFFF; padding-top: 62px; border-radius: 8px; padding-bottom: 20px;">
        <a href="${process.env.APP_DOMAIN}/watch/${id}">
          <div class="thumbnailWrapper" style="background-image: url(${thumbnail}); width: 592px; min-width: 592px; min-height: 399px; max-height: 399px; background-position: center;">
            <img style="width: 80px;margin-top: 29%" src="https://vidionpro-backend.herokuapp.com/video/email/track?id=${id}" /> 
          </div>
        </a>
        <div class="footerWrapper w3-row w3-center">
          <div>
            <p style=" max-width: 512px;">VideonPRO is a video communication platform design for sale and marketing leaders. Learn more at videonpro.com</p>
            <a href="videonpro.com">
              <button class="btn watchVideoBtn" style="color: #FFFFFF; background-color: #3a94d2; border: none; border-radius: 23px; min-height: 40px; min-width: 200px !important; width: 225px; font-weight: bolder; outline: none; font-size: 18px; cursor: pointer !important;">Watch this Video</button>
            </a>
        </div>
      </div>
    </div>
    </div>
  </div>
      <div class="footer" style="background-color: #FFFFFF; margin-top: 40px; max-width: 720px; width: 720px; min-height: 56px;">
        <div class="sender-wrapper" style="max-width: 320px; width: 320px; display: -webkit-box; -webkit-box-align: center; float: left;">
          <img style="width: 44px; height: 44px;" src="https://videonpro.s3.amazonaws.com/assets/logo.png" />
          <p class="footerP" style="margin-left: 10px; font-weight: bold;">Sent using VideonPro</p>
        </div>
        <div class="icon-wrapper" style="max-width: 260px; widht: 260px; float: right;">
          <a href="#" style="padding: 20px; font-size: 20px; width: 30px; text-align: center; text-decoration: none; margin: 5px 2px; border-radius: 50%; color: black;" class="fa fa-facebook"></a>
          <a href="#" style="padding: 20px; font-size: 20px; width: 30px; text-align: center; text-decoration: none; margin: 5px 2px; border-radius: 50%;color: black;" class="fa fa-twitter"></a>
          <a href="#" style="padding: 20px; font-size: 20px; width: 30px; text-align: center; text-decoration: none; margin: 5px 2px; border-radius: 50%; color: black;" class="fa fa-google"></a>
          <a href="#" style="padding: 20px; font-size: 20px; width: 30px; text-align: center; text-decoration: none; margin: 5px 2px; border-radius: 50%; color: black;" class="fa fa-linkedin"></a>
        </div>
      </div>
</body>
</html>
  `
}
module.exports.modernSimple = (id, thumbnail) => {
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
    </style>
</head>
​
<body style="text-align: -webkit-center;">
    <div style="text-align: -webkit-center;width: 720px;">
        <div style="width: 100%;min-width: 80%;background-color: #4d4d4d;">
            <div
                style="padding-left: 20px;background-color: #333333;display: -webkit-box;-webkit-box-align: center;-webkit-box-pack: center;">
                <img src=" https://videonpro.s3.amazonaws.com/assets/logo.png"
                    style='width: 40px;height: 40px;opacity: 1;' />
                <h1 style="padding-bottom: 0px;margin-left: 3%;font-weight: bolder;font-size: 30px;color: white;">
                    VideonPRO</h1>
            </div>
            <a href="${process.env.APP_DOMAIN}/watch/${id}">
                <div class="thumbnailWrapper"
                    style="width: 100%;min-height: 512px;max-height: 720px;background-position: center;">
                    <img style="width: 80px; margin-top: 29%"
                        src="https://vidionpro-backend.herokuapp.com/video/email/track?id=${id}" />
                    <p style="color: white;">VIDEO PLACEHOLDER</p>
                </div>
            </a>
        </div>
​
        <div style="padding-bottom: 10%;">
            <a style=" cursor: pointer !important;text-decoration: none;"
                href="${process.env.APP_DOMAIN}/watch/${id}/cta">
                <p style="cursor: pointer;color:black;margin-bottom: 5px;font-weight: bold;font-size: 30px;">
                    Watch this Video!
                </p>
            </a>
            <hr style="width: 20%;
            border-top: 8px solid #333333;">
            <p style="font-weight: bold;font-size: 25px;margin-top: 0px;">About Us</p>
            <p style="margin: 0px;">VideonPRO is a video communication platform design for sale </p>
            <p style="margin: 0px;">and marketing
                leaders. Learn more at <span
                    style="text-decoration: none;color: black;font-weight: bold;">videonpro.com</span></p>
        </div>
        <div
            style="justify-content: space-between;
            background-color: #333333;
            color: white;
            font-size: 12px;padding: 0 5% 0 5%;display: -webkit-box;-webkit-box-align: center;-webkit-box-pack: justify;-moz-box-pack: justify;-ms-flex-pack: justify;">
            <p>
                &copy; 2020 VideonPro All Rights Reserved
            </p>
​
            <div
                style="background-color: #333333;
                color: white;
                font-size: 12px;display: -webkit-box;-webkit-box-align: center;-webkit-box-pack: justify;-moz-box-pack: justify;-ms-flex-pack: justify;justify-content: space-between;">
​
                <a href="#" class="fa fa-facebook" style="padding: 20px;
                font-size: 20px;
                width: 30px;
                text-align: center;
                text-decoration: none;
                margin: 5px 2px;
                border-radius: 50%;
                color: white;"></a>
                <a href="#" class="fa fa-twitter" style="padding: 20px;
                font-size: 20px;
                width: 30px;
                text-align: center;
                text-decoration: none;
                margin: 5px 2px;
                border-radius: 50%;
                color: white;"></a>
                <a href="#" class="fa fa-google" style="padding: 20px;
                font-size: 20px;
                width: 30px;
                text-align: center;
                text-decoration: none;
                margin: 5px 2px;
                border-radius: 50%;
                color: white;"></a>
​
            </div>
            <div style="display: -webkit-box;-webkit-box-align: center;-webkit-box-pack: center;">
                <img src="https://videonpro.s3.amazonaws.com/assets/logo.png" style="width: 20px;
                opacity: 1;
                height: 20px;
                margin-right: 5px;" />Sent with VideonPro
            </div>
        </div>
    </div>
</body>
​
</html>
  `
}