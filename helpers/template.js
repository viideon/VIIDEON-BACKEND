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
        <td align="center" style="background-image: url(images/bg_1.jpg); background-size: cover; height: 400px;">
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
                        <img src=" https://videonpro.s3.amazonaws.com/assets/logo.png"
                            style="width: 40px; height: 40px; opacity: 1;margin-top: 50%;" />
                        <h1 style="
                            padding-bottom: 0px;
                            margin-left: 3%;
                            font-weight: bolder;
                            font-size: 30px;
                            color: black;
                          ">
                            VideonPRO
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
        <td style="background: #4d4d4d; padding: 100px 0px 100px 0px;max-width: 400px;width: 100%;">
            <table class="thumbnailWrapper" width="100%" cellspacing="0" cellpadding="0">
                <tr align="center">
                    <td>
                        <img style="width: 80px"
                            src="https://vidionpro-backend.herokuapp.com/video/email/track?id=${id}" />
                        <p style="color: white">VIDEO PLACEHOLDER</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr align="center">
        <td align="center" style="padding: 30px 0px 30px 0px">
            <p style="margin: 0px;color: black;">
                VideonPRO is a video communication platform design for sale
            </p>
            <p style="margin: 0px;color: black;">
                and marketing leaders. Learn more at
                <a style="
                  text-decoration: none;
                  color: black;
                  font-weight: bold;
                  cursor: pointer;
                ">videonpro.com</a>
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
            border-radius: 50%;" src="http://placeimg.com/80/80/sport">
            <p style="margin-bottom: 0;
            font-size: 16px;
            font-weight: bold;color: black;">Chris Cullen</p>
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
                        <img src="https://videonpro.s3.amazonaws.com/assets/logo.png" style="
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

module.exports.classic_dark = (id, thumbnail) => {
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
                    <img src=" https://videonpro.s3.amazonaws.com/assets/logo.png"
                        style="width: 30px; height: 30px; opacity: 1;margin-top: 10%;" />
                    <p style="color: white; margin: 0px;
                                    margin-left: 3%;
                                    font-weight: bolder;
                                    font-size: 30px;">VideonPRO</p>
                </a>
                <div class="right"> </div>
                <div class="inner"></div>
            </div>
        </tr>
        <tr align="left" style="margin-left:100px">
            <p style="color: white;font-size: 30px;margin-left: 150px;">Hello John!</p>
        </tr>
        <tr align="center">
            <td>
                <table class="thumbnailWrapper" width="70%" cellspacing="0" cellpadding="0"
                    style="background: #333333; padding: 100px 0px 100px 0px;max-width: 400px;">
                    <tr align="center">
                        <td>
                            <img style="width: 80px"
                                src="https://vidionpro-backend.herokuapp.com/video/email/track?id=${id}" />
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
                    VideonPRO is a video communication platform design for sale
                </p>
                <p style="margin: 0px;color: white;">
                    and marketing leaders. Learn more at
                    <a style="
                  text-decoration: none;
                  color: white;
                  font-weight: bold;
                  cursor: pointer;
                ">videonpro.com</a>
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
                            <img src="https://videonpro.s3.amazonaws.com/assets/logo.png" style="
                width: 20px;
                opacity: 1;
                height: 20px;
                margin-right: 5px;
                margin-top: 5%;
              " />
                            <span style="color: white;margin-bottom: 5%;">Sent with VideonPro</span>
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

module.exports.sleek = (id, thumbnail) => {
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
                        <img src=" https://videonpro.s3.amazonaws.com/assets/logo.png"
                            style="width: 40px; height: 40px; opacity: 1;margin-top: 50%;" />
                        <h1 style="
                            padding-bottom: 0px;
                            margin-left: 3%;
                            font-weight: bolder;
                            font-size: 30px;
                            color: black;
                          ">
                            VideonPRO
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
            <table class="thumbnailWrapper" width=" 100%" cellspacing="0" cellpadding="0" width="70%"
                style="background: #4d4d4d;padding: 100px 0px 100px 0px;max-width: 400px;">
                <tr align="center">
                    <td>
                        <img style="width: 80px"
                            src="https://vidionpro-backend.herokuapp.com/video/email/track?id=${id}" />
                        <p style="color: white">VIDEO PLACEHOLDER</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr align="center">
        <td align="center" style="padding: 30px 0px 30px 0px">
            <p style="margin: 0px;color: black;">
                VideonPRO is a video communication platform design for sale
            </p>
            <p style="margin: 0px;color: black;">
                and marketing leaders. Learn more at
                <a style="
                  text-decoration: none;
                  color: black;
                  font-weight: bold;
                  cursor: pointer;
                ">videonpro.com</a>
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
            border-radius: 50%;" src="http://placeimg.com/80/80/sport">
            <p style="margin-bottom: 0;
            font-size: 16px;
            font-weight: bold;color: black;">Chris Cullen</p>
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
                        <img src="https://videonpro.s3.amazonaws.com/assets/logo.png" style="
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

module.exports.social_business = (id, thumbnail) => {
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

<body>
    <table align=" center" cellpadding="0" cellspacing="0" width="700" style="background-color: white;">
        <tr>
            <td ">
            <div class=" overlay">
                </div>
                <table align="center" cellpadding="0" cellspacing="0" width="100%">
                    <tr align="left">

                        <td align="middle" class="hero bg_white" ">

                        <table>
                            <tr>
                                <td style=" padding-left: 20px; display: -webkit-box; -webkit-box-align: center;
                            -webkit-box-pack: center; min-width: 60%; height: 80%; ">


                                    <img src=" https://videonpro.s3.amazonaws.com/assets/logo.png"
                            style="width: 60px; height: 60px; opacity: 1;margin-top: 95%;" />
                        <p style="color: #3b93d2; padding-bottom: 0px;
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
        <td width=100%>
            <table style="background-color: #3b93d2;" width="80%">
                <tr align="left" style="margin-left:100px">
                    <p style="color: white;font-size: 30px;margin-left: 150px;">Welcome to VideoPro</p>
                </tr>
                <tr align="center">
                    <td>
                        <table class="thumbnailWrapper" width="100%" style="background: #999999; padding: 100px 0px 100px 0px;max-width: 350px;"
                            cellspacing="0" cellpadding="0">
                            <tr align="center">
                                <td>
                                    <img style="width: 80px"
                                        src="https://vidionpro-backend.herokuapp.com/video/email/track?id=${id}" />
                                    <p style="color: white">VIDEO PLACEHOLDER</p>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>
                <tr align="center" ;">
                    <td align="center" style="padding: 30px 0px 30px 0px">
                        <p style="margin: 0px;color: white;">
                            VideonPRO is a video communication platform design for sale
                        </p>
                        <p style="margin: 0px;color: white;">
                            and marketing leaders. Learn more at
                            <a style="
                              text-decoration: none;
                              color: white;
                              font-weight: bold;
                              cursor: pointer;
                            ">videonpro.com</a>
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
                        <img style="vertical-align: middle;
            width: 50px;
            height: 50px;
            border-radius: 50%;" src="http://placeimg.com/80/80/sport">
                    </td>

                    <td width="50%" align="center">
                        <p style="font-size: 20px; margin: 0;color: #3b93d2;">Jenny Willow</p>
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
                        <img src="https://videonpro.s3.amazonaws.com/assets/logo.png" style="
                width: 30px;
                opacity: 1;
                height: 30px;
              " />
                    </td>

                    <td width="50%" align="center">

                        <span style="color: #3b93d2;">Sent using VideonPro</span>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr>
        <td align="center">
            <p style="color: #3b93d2;font-size: 10px;">&copy;2020 VideoPro All Rights Reserved</p>
        </td>
    </tr>
    </table>
</body>

</html>
  `
}

module.exports.streamlined = (id, thumbnail) => {
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
    <table align=" center" cellpadding="0" cellspacing="0" width="700">
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
                                    <img src=" https://videonpro.s3.amazonaws.com/assets/logo.png"
                        style="width: 60px; height: 60px; opacity: 1;margin-top: 95%;" />
                    <p style="color: #3b93d2; padding-bottom: 0px;
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
        <td style="background: #f6b415; padding: 100px 0px 100px 0px;max-width: 400px;width: 100%;">
            <table class="thumbnailWrapper" width="100%" cellspacing="0" cellpadding="0">
                <tr align="center">
                    <td>
                        <img style="width: 80px"
                            src="https://vidionpro-backend.herokuapp.com/video/email/track?id=${id}" />
                        <p style="color: white">VIDEO PLACEHOLDER</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr align="center" style="background-color: #3b93d2;">
        <td align="center" style="padding: 30px 0px 30px 0px">
            <p style="margin: 0px;color: white;">
                VideonPRO is a video communication platform design for sale
            </p>
            <p style="margin: 0px;color: white;">
                and marketing leaders. Learn more at
                <a style="
                  text-decoration: none;
                  color: white;
                  font-weight: bold;
                  cursor: pointer;
                ">videonpro.com</a>
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
        <p style="color: #3b93d2;font-size: 30px;">Get To Know Us!</p>
    </tr>
    <tr align="center">
        <td align="center" style="padding: 30px 0px 30px 0px">
            <p style="margin: 0px;color: #3b93d2;">
                VideonPRO is a video communication platform design for sale
            </p>
            <p style="margin: 0px;color: #3b93d2;">
                and marketing leaders. Learn more at
                <a style="
                  text-decoration: none;
                  color: #3b93d2;
                  font-weight: bold;
                  cursor: pointer;
                ">videonpro.com</a>
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
    </table>
</body>

</html>
  `
}

module.exports.simple_blue = (id, thumbnail) => {
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
    <table align=" center" cellpadding="0" cellspacing="0" width="700">
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
                                    <img src=" https://videonpro.s3.amazonaws.com/assets/logo.png"
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
        <p style="color: #3b93d2;font-size: 20px;font-weight: bold;">BE A PART OF OUR GROWING TEAM!</p>
    </tr>

    <tr align="center">
        <td>
            <table class="thumbnailWrapper" width="70%" style="background: #3b93d2; padding: 100px 0px 100px 0px;max-width: 400px;width: 100%;"
                cellspacing="0" cellpadding="0">
                <tr align="center">
                    <td>
                        <img style="width: 80px"
                            src="https://vidionpro-backend.herokuapp.com/video/email/track?id=${id}" />
                        <p style="color: white">VIDEO PLACEHOLDER</p>
                    </td>
                </tr>
            </table>
        </td>
    </tr>
    <tr align="center" ">
        <td align=" center" style="padding: 30px 0px 30px 0px">
        <p style="margin: 0px;color: #3b93d2;">
            VideonPRO is a video communication platform design for sale
        </p>
        <p style="margin: 0px;color: #3b93d2;">
            and marketing leaders. Learn more at
            <a style="
                  text-decoration: none;
                  color: #3b93d2;
                  font-weight: bold;
                  cursor: pointer;
                ">videonpro.com</a>
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

                        <span style="color: #3b93d2;">Sent using VideonPro</span>
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

module.exports.social_impact = (id, thumbnail) => {
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
​
<body>
    <table align="center" cellpadding="0" cellspacing="0" width="700">
        <tr align="center">
            <td align="center" style="background-image: url(https://videonpro.s3.amazonaws.com/assets/IntelicaCRE-BlogPhoto-office-social-gathering.jpg); background-size: cover; height: 200px;box-shadow: inset 2000px 0 0 0 rgba(255, 255, 255, 0.5); border-color:
    rgba(255, 255, 255, 1); max-width: 200px;">
                <table align="center" cellpadding="0" cellspacing="0" width="100%">
                    <tr align="center">
                        <td style=" padding-left: 20px; display: -webkit-box; -webkit-box-align: center; -webkit-box-pack: center; min-width: 60%; height: 80%; ">
                            <img src=" https://videonpro.s3.amazonaws.com/assets/logo.png " style=" width: 60px; height: 60px; opacity: 1;margin-top: 50px; margin-left: 100px;" />
                            <p style=" color: #f6b415; padding-bottom: 0px; margin-left: 3%; font-weight: bolder; font-size: 50px; ">
                                VideonPRO</p>
                        </td>
                    </tr>
                </table>
            </td>
        </tr>
        <tr align="center">
            <p style=" color: #f6b415;font-size: 20px;font-weight: bold; ">Watch this Video!</p>
        </tr>
        <tr align="center">
            <td>
                <a style="cursor: pointer;text-decoration: none;" href="${process.env.APP_DOMAIN}/watch/${id}">
                    <table width="70%" style="background: #f6b415;background-image: url(${thumbnail});background-size: cover; padding: 100px 0px 100px 0px;max-width: 400px;width: 100%; " cellspacing=" 0 " cellpadding=" 0 ">
                        <tr align=" center ">
                            <td>
                                <img style=" width: 80px " src=" https://vidionpro-backend.herokuapp.com/video/email/track?id=${id} " />
                                <p style=" color: white ">VIDEO PLACEHOLDER</p>
                            </td>
                        </tr>
                    </table>
                </a>
            </td>
        </tr>
        <tr align="center">
            <td align=" center " style=" padding: 30px 0px 30px 0px ">
                <p style=" margin: 0px;color: #f6b415; ">
                    VideonPRO is a video communication platform design for sale
                </p>
                <p style=" margin: 0px;color: #f6b415; ">
                    and marketing leaders. Learn more at
                    <a href="https://app.videonpro.app" style=" text-decoration: none; color: #f6b415; font-weight: bold; cursor: pointer; ">videonpro.com</a>
                </p>
            </td>
        </tr>
        <tr align="center">
            <td align=" center " style=" padding: 15px 0px 15px 0px ">
​
                <img style=" vertical-align: middle; width: 50px; height: 50px; border-radius: 50%; " src=" http://placeimg.com/80/80/sport ">
                <p style=" margin-bottom: 0; font-size: 16px; font-weight: bold;color: #f6b415; ">Chris Cullen
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
                                &copy; 2020 VideonPro All Rights Reserved
                            </p>
                        </td>
                        <td width="33% " align="center"></td>
                        <td width="33% " align="center">
                            <img src="https://videonpro.s3.amazonaws.com/assets/logo.png " style=" width: 20px; opacity: 1; height: 20px; margin-right: 5px; margin-top: 10px; " />
                            <span style="color: #f6b415; ">Sent with VideonPro</span>
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

module.exports.ocean = (id, thumbnail) => {
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
​
<body>
    <table align=" center" cellpadding="0" cellspacing="0" width="700" style="background-color: #3b93d2;">
​
        <tr>
            <td>
​
                <table align="center" cellpadding="0" cellspacing="0" style="background-color: #ffffff;border-top-right-radius: 10px;
                border-top-left-radius: 10px;margin-bottom: 10px;margin-top: 5%;" width="80%">
                    <tr align="left">
​
​
                        <td align="center">
                            <img src=" https://videonpro.s3.amazonaws.com/assets/logo.png"
                                style="width: 60px; height: 60px; opacity: 1;margin-top: 10%;" />
                        </td>
                    </tr>
                    <tr align="center">
                        <p style="color: #3b93d2; padding-bottom: 0px;                            
                                    font-weight: bolder;
                                    margin: 0 0 0 3%;
                                    font-size: 50px;">VideonPRO</p>
                    </tr>
                    <tr align="center">
                        <p style="color: black; margin-bottom: 10px;
                                    font-size: 14px;">Newsletter Bundle</p>
                    </tr>
                </table>
            </td>
        </tr>
        <tr align="center">
            <td width=100%>
                <table style="background-color: #e6e6e6;" width="80%">
                    <tr align="center" style="margin-left:100px">
                        <p style="color: #3b93d2;font-size: 24px;margin-left: 10px;">Create & Send Campaigns Simplified
                        </p>
                    </tr>
                    <tr align="center">
                        <td>
                            <table width="100%"
                                class="thumbnailWrapper"
                                style="background: #4d4d4d; padding: 100px 0px 100px 0px;max-width: 350px;"
                                cellspacing="0" cellpadding="0">
                                <tr align="center">
                                    <td>
                                        <img style="width: 80px"
                                            src="https://vidionpro-backend.herokuapp.com/video/email/track?id=${id}" />
                                        <p style="color: white">VIDEO PLACEHOLDER</p>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
​
                    <tr align="center">
                        <td align="center">
​
                            <a href="${process.env.APP_DOMAIN}/watch/${id}/cta" style="text-decoration: none;">
                                <p style="width: 180px;
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
​
        <tr align="center">
            <td width="100%">
                <table style="    background-color: #ffffff;
                margin-top: 10px;
                margin-bottom: 5%;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;" width="80%">
                    <tr align="center">
                        <td align=" center" style="padding: 30px 0px 10px 0px">
                            <p style="margin: 0px;color: #3b93d2;margin: 0;">
                                VideonPRO is a video communication platform design for sale
                            </p>
                            <p style="margin: 0px;color: #3b93d2; margin: 0;">
                                and marketing leaders. Learn more at
                                <a style="
                          text-decoration: none;
                          color: #3b93d2;
                          font-weight: bold;
                          cursor: pointer;
                        ">videonpro.com</a>
                            </p>
                        </td>
​
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