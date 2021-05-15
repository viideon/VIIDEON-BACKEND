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
  title = false,
  description = false
) => {
  console.log(description)
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
                    <td>
                        <div>
                            <h4 style="color:#000000; font-size:24px; font-weight:600; text-align: center; padding-top:10px; padding-bottom:10px; margin: 0;">${title}</h4>
                        </div>
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
                                    ${ description ? 
                                       description : 
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
  title = false,
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
            background: #eff3f4;
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
            color:#eff3f4;
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
            <table class="outer" align="center" width="100%" style="border-spacing: 0; border-collapse: unset;">
                <tr>
                    <td style="background: #eff3f4; text-align: center; padding-top:30px; padding-bottom:30px;" align="center">
                        <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/corporate-light/logo.jpg" alt="" width="250" style="width:100%; max-width:250px;"></a>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background: #eff3f4; padding:20px 0;">
                        <table width="100%" style="max-width:468px; background-color: #ffffff; border-spacing: 0;border-collapse: unset;">
                            <tr>
                                <td>
                                    <div>
                                        <h4 style="color:#3a94d2; font-size:24px; font-weight:600; text-align: center; padding-top:10px; padding-bottom:10px; margin: 0;">${title}</h4>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 15px 30px;">
                                    <a href="">
                                        <img src="${ thumbnail ?
                                                     thumbnail :
                                                     'https://viideon.s3-us-west-1.amazonaws.com/email-templates/corporate-light/video.jpg' }" alt="" width="408" style="max-width:408px; width:100%;" >
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding: 0 30px;">
                                    <p style="font-size:12px; color:#333333; text-align: center; padding-bottom:30px;">
                                        ${ description ?
                                           description :
                                           "Viideon is a video communication platform designed for sale and marketing leaders. Learn more at viideon.com"
                                        }
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="text-align: center; padding:0 30px 15px">
                                    <a href="${process.env.APP_DOMAIN}/watch/${id}/cta"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/corporate-light/watch-btn.jpg" alt=""></a>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td width="100%" align="center" style="background: #eff3f4; padding-bottom:30px; width:100%" >
                        <table width="100%" style="border-spacing:0;border-collapse: unset;" >
                            <tr>
                                <td>
                                    <p style="font-size:10px; color:#333333; text-align: center; padding-bottom:10px;">Connect with me on</p>
                                </td>
                            </tr>
                            <tr>
                            <td style="padding-bottom:50px;" align="center">
                                <table align="center" style="border-spacing: 0; display: inline-block; border-collapse: unset;" >
                                    <tr>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${fbUrl ? fbUrl : "https://www.facebook.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/corporate-light/facebook.jpg" alt="facebook"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${twitterUrl ? twitterUrl : "https://twitter.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/corporate-light/twitter.jpg" alt="twitter"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${youtubeUrl ? youtubeUrl : "https://youtube.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/corporate-light/youtube.jpg" alt="youtube"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${linkedinUrl ? linkedinUrl : "https://www.linkedin.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/corporate-light/linkedin.jpg" alt="linkedin"></a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            </tr>
                            <tr>
                                <td style="text-align: center; padding-bottom:6px;">
                                    <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/corporate-light/logo-footer.jpg" alt=""></a>
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
  title = false,
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
            background-color: #ffffff;
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
            <table class="outer" align="center" width="100%" style="border-spacing: 0;border-collapse:unset;">
                <tr>
                    <td style="background: #fff;" align="center">
                        <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/modern-simple/header.jpg" alt="" width="100%" style="width:100%; max-width:100%;"></a>
                    </td>
                </tr>
                <tr>
                    <td>
                        <div>
                            <h4 style="color:#ffffff; background: #333333; font-size:24px; font-weight:600; text-align: center; padding-top:10px; padding-bottom:10px; margin: 0;">${title}</h4>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>
                        <a href="">
                            <img src="${ thumbnail ?
                                         thumbnail :
                                         'https://viideon.s3-us-west-1.amazonaws.com/email-templates/modern-simple/video.jpg' }" alt="" width="600" style="max-width:600px; width:100%;" >
                        </a>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background: #ffffff;">
                        <table width="100%" style=" border-spacing: 0;border-collapse:unset;" class="padding">
                            <tr>
                                <td>
                                    <table width="100%" style="max-width:100%; border-spacing: 0; border-collapse:unset;">
                                        <tr>
                                            <td>
                                                <p style="font-size:12px; color:#333333; text-align: center; padding-bottom:30px;">
                                                    ${ description ?
                                                       description :
                                                       "Viideon is a video communication platform designed for sale and marketing leaders."
                                                    }
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="text-align: center; padding-bottom:30px;">
                                                <a href="${process.env.APP_DOMAIN}/watch/${id}/cta"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/modern-simple/watch-btn.jpg" alt=""></a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" height="2" width="100%" style="border-top:2px solid #4d4d4d "></td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td width="100%" align="center" style="background: #ffffff; padding-bottom:30px; width:100%" >
                        <table width="100%" style="border-spacing:0; border-collapse:unset;" >
                            <tr>
                                <td>
                                    <p style="font-size:11px; color:#333333; text-align: center; padding-bottom:10px; font-weight:bold;">Connect with me on</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom:50px;" align="center">
                                    <table align="center" style="border-spacing: 0; display: inline-block; border-collapse:unset;">
                                        <tr>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${ fbUrl ? fbUrl : "https://www.facebook.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/modern-simple/facebook.jpg" alt="facebook"></a>
                                            </td>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${ twitterUrl ? twitterUrl : "https://twitter.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/modern-simple/twitter.jpg" alt="twitter"></a>
                                            </td>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${ youtubeUrl ? youtubeUrl : "https://youtube.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/modern-simple/youtube.jpg" alt="youtube"></a>
                                            </td>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${ linkedinUrl ? linkedinUrl : "https://www.linkedin.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/modern-simple/linkedin.jpg" alt="linkedin"></a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center; padding-bottom:6px;">
                                    <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/modern-simple/logo-footer.jpg" alt=""></a>
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
  title = false,
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
        }
        table{
            border-spacing: 0;
        }
        td{
            padding:0;
        }
        img{
            border:0;
        }
        .wrapper{
            width: 100%;
            table-layout: fixed;
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
            color:#444444;
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
            <table class="outer" align="center" width="100%" style="border-spacing: 0;border-collapse: unset; background: #1a1a1a;">
                <tr>
                    <td>
                        <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/classic-dark/header.jpg" alt="" width="600" style="width:100%; max-width:600px;"></a>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background: #1a1a1a; padding-bottom:30px;">
                        <table width="" style="max-width:408px;border-collapse: unset;">
                            <tr>
                                <td>
                                    <div>
                                        <h4 style="color:#ffffff; font-size:24px; font-weight:600; text-align: center; padding-top:10px; padding-bottom:10px; margin: 0;">${title}</h4>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom:13px">
                                    <a href="">
                                        <img src="${ thumbnail ?
                                                     thumbnail :
                                                     'https://viideon.s3-us-west-1.amazonaws.com/email-templates/classic-dark/video.jpg' }" alt="" width="408" style="max-width:408px; width:100%;" >
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td class="padding">
                                    <p style="font-size:12px; color:#ffffff; text-align: center; padding-bottom:30px;">
                                        ${ description ?
                                           description :
                                           "Viideon is a video communication platform designed for sale and marketing leaders."
                                        }
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td  style="text-align: center; padding-bottom:24px;">
                                    <a href="${process.env.APP_DOMAIN}/watch/${id}/cta"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/classic-dark/watch-btn.jpg" alt=""></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="font-size:10px; color:#ffffff; text-align: center; padding-bottom:10px;">Connect with me on</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom:50px;" align="center">
                                    <table align="center" style="border-spacing: 0; display: inline-block;border-collapse: unset;">
                                        <tr>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${fbUrl ? fbUrl : "https://www.facebook.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/classic-dark/facebook.jpg" alt="facebook"></a>
                                            </td>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${twitterUrl ? twitterUrl : "https://twitter.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/classic-dark/twitter.jpg" alt="twitter"></a>
                                            </td>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${youtubeUrl ? youtubeUrl : "https://youtube.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/classic-dark/youtube.jpg" alt="youtube"></a>
                                            </td>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${linkedinUrl ? linkedinUrl : "https://www.linkedin.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/classic-dark/linkedin.jpg" alt="linkedin"></a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center; padding-bottom:6px;">
                                    <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/classic-dark/logo-footer.jpg" alt=""></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="font-size:9px; color:#ffffff; text-align: center;">© 2021 VideonPro All Rights Reserved</p>
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
  title = false,
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
                                <td>
                                    <div>
                                    <h4 style="color:#000000; font-size:24px; font-weight:600; text-align: center; padding-top:10px; padding-bottom:10px; margin: 0;">${title}</h4>
                                    </div>
                                </td>
                            </tr>
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
                                        ${ description ?
                                           description :
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
                                            <a href="${fbUrl ? fbUrl : "https://www.facebook.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/sleek/facebook.jpg" alt="facebook"></a>
                                        </td>
                                        <td style="width:22px; height:22px; padding-left:5px; padding-right:5px; border-right:1px solid #000;" width="38" height="22">
                                            <a href="${twitterUrl ? twitterUrl : "https://twitter.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/sleek/twitter.jpg" alt="twitter"></a>
                                        </td>
                                        <td style="width:22px; height:22px; padding-left:5px; padding-right:5px;" width="38" height="22">
                                            <a href="${linkedinUrl ? linkedinUrl : "https://www.linkedin.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/sleek/linkedin.jpg" alt="linkedin"></a>
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
  title = false,
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
                                <td align="center" style="background:#3a94d2; border-left:2px solid #999999; border-right:2px solid #999999; padding: 0 40px 20px;">
                                    <table width="100%" style="max-width:408px; border-spacing: 0; border-collapse: unset;">
                                        <tr>
                                            <td>
                                                <div>
                                                    <h4 style="color:#ffffff; font-size:24px; font-weight:600; text-align: center; padding-top:10px; padding-bottom:10px; margin: 0;">${title}</h4>
                                                </div>
                                            </td>
                                        </tr>
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
                                                    ${ description ? 
                                                       description :
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
  title = false,
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
                        <div>
                            <h4 style="color:#ffffff; font-size:24px; font-weight:600; text-align: center; padding-top:10px; padding-bottom:10px; margin: 0; background: #3a94d2;">${title}</h4>
                        </div>
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
                                        ${ description ?
                                           description :
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
                                                <a href="${ fbUrl ? fbUrl : "https://www.facebook.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/streamlined/facebook.jpg" alt="facebook"></a>
                                            </td>
                                            <td style="width:22px; height:22px; padding-left:5px; padding-right:5px;" width="38" height="22">
                                                <a href="${ twitterUrl ? twitterUrl : "https://twitter.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/streamlined/twitter.jpg" alt="twitter"></a>
                                            </td>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${ youtubeUrl ? youtubeUrl : "https://youtube.com/" }"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/streamlined/youtube.jpg" alt="youtube"></a>
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
  title = false,
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
                    <td align="center" style="background: #ffffff; padding: 0 40px 40px;">
                        <table width="100%" style="max-width:408px; background-color: #ffffff; border-spacing: 0;border-collapse: unset;">
                            <tr>
                                <td>
                                    <div>
                                        <h4 style="color:#3a94d2; font-size:24px; font-weight: 600; text-align: center; padding-top:10px; padding-bottom:10px; margin: 0;">${title}</h4>
                                    </div>
                                </td>
                            </tr>
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
                                        ${ description ?
                                           description : 
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
                                            <a href="${fbUrl ? fbUrl : "https://www.facebook.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/simple-blue/facebook.jpg" alt="facebook"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${twitterUrl ? twitterUrl : "https://twitter.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/simple-blue/twitter.jpg" alt="twitter"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${youtubeUrl ? youtubeUrl : "https://youtube.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/simple-blue/youtube.jpg" alt="youtube"></a>
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
  title = false,
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
                        <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-impact/header.jpg" alt="" width="100%" style="width:100%; max-width:100%;"></a>
                    </td>
                </tr>
                <tr>
                    <td align="center" style="background: #ffffff;padding:20px 0;">
                        <table width="100%" style="max-width:408px; background-color: #ffffff; border-spacing: 0;border-collapse: unset;">
                            <tr>
                                <td width="100%" align="center" style="padding-bottom: 10px">
                                    <table width="" style="border-spacing: 0;border-collapse: unset;">
                                        <tr>
                                            <td>
                                                <img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-impact/person.jpg" alt="" width="83" style="width:83px; max-width:83px;">
                                            </td>
                                            <td align="left" valign="middle" style="padding-left:10px;">
                                                <h3 style="color:#fdb415; font-size:24px; margin:0px;">${userName}</h3>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <div>
                                        <h4 style="color:#fdb515; font-size:24px; font-weight:600; text-align: center; padding-top:10px; padding-bottom:10px; margin: 0;">${title}</h4>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom:13px">
                                    <a href="">
                                        <img src="${ thumbnail ?
                                                     thumbnail :
                                                     'https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-impact/video.jpg' }" alt="" width="408" style="max-width:408px; width:100%;" >
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="font-size:12px; color:#fdb415; text-align: center; padding-bottom:30px; font-weight:bold;">
                                        ${ description ? 
                                           description :
                                           "Viideon is a video communication platform designed for sale and marketing leaders."
                                        }
                                    </p>
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="text-align: center;">
                                    <a href="${process.env.APP_DOMAIN}/watch/${id}/cta"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-impact/watch-btn.jpg" alt=""></a>
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
                                    <p style="font-size:10px; color:#fdb415; text-align: center; padding-top:1rem;">Connect with me on</p>
                                </td>
                            </tr>
                            <tr>
                                <td style="padding-bottom:50px;" align="center">
                                    <table align="center" style="border-spacing: 0; display: inline-block;border-collapse: unset;">
                                        <tr>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${fbUrl ? fbUrl : "https://www.facebook.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-impact/facebook.jpg" alt="facebook"></a>
                                            </td>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${twitterUrl ? twitterUrl : "https://twitter.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-impact/twitter.jpg" alt="twitter"></a>
                                            </td>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${youtubeUrl ? youtubeUrl : "https://youtube.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-impact/youtube.jpg" alt="youtube"></a>
                                            </td>
                                            <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                                <a href="${linkedinUrl ? linkedinUrl : "https://www.linkedin.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-impact/linkedin.jpg" alt="linkedin"></a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td style="text-align: center; padding-bottom:6px;">
                                    <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/social-impact/logo-footer.jpg" alt=""></a>
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
  title = false,
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
            background: #0096bb;

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
            padding-bottom:0px;
        }
        .webkit{
            max-width:600px;
            background-color: #0096bb;
        }
        .outer{
            Margin:0 auto;
            width:100%;
            max-width:600px;
            border-spacing: 0;
            font-family:sans-serif;
            color:#0096bb;
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
                    <td align="center" class="padding">
                        <table width="100%" style="max-width:490px; border-spacing:0;border-collapse: unset;">
                            <tr>
                                <td>
                                    <img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/ocean/top-curve.jpg" alt="" width="100%" style='max-width:100%;'>
                                </td>
                            </tr>
                            <tr>
                                <td style="background: #ffffff; text-align: center; padding-top:30px; padding-bottom:30px;" align="center">
                                    <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/ocean/logo.jpg" alt="" width="250" style="width:100%; max-width:250px;"></a>
                                </td>
                            </tr>
                            <tr>
                                <td height="20" style="background: #0096bb; " align="center">
                                   &nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td align="center" style="background:#e6e6e6; padding: 0 40px;">
                                    <table width="100%" style="max-width:408px; border-spacing: 0;border-collapse: unset;">
                                        <tr>
                                            <td>
                                                <div>
                                                    <h4 style="color:#0096bb; font-size:24px; font-weight:600; text-align: center; padding-top:10px; padding-bottom:10px; margin: 0;">${title}</h4>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td style="padding-bottom:13px">
                                                <a href="">
                                                    <img src="${ thumbnail ?
                                                                 thumbnail :
                                                                 'https://viideon.s3-us-west-1.amazonaws.com/email-templates/ocean/video.jpg' }" alt="" width="408" style="max-width:408px; width:100%;">
                                                </a>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p style="font-size:12px; color:#333333; text-align: center; padding-bottom:30px;">
                                                    ${ description ?
                                                       description :
                                                       "Viideon is a video communication platform designed for sale and marketing leaders. Learn more at viideon.com"
                                                  }
                                                </p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td align="center" style="text-align: center; padding-bottom:20px;">
                                                <a href="${process.env.APP_DOMAIN}/watch/${id}/cta"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/ocean/watch-btn.jpg" alt=""></a>
                                            </td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/ocean/bottom-curve.jpg" alt="" width="100%" style='max-width:100%;'>
                                </td>
                            </tr>
                        </table>
                    </td>
                </tr>

                <tr>
                    <td width="100%" align="center" style="background: #0096bb; padding-bottom:30px; width:100%" >
                        <table width="100%" style="border-spacing:0;border-collapse: unset;">
                            <tr>
                                <td>
                                    <p style="font-size:10px; color:#ffffff; text-align: center; padding-bottom:10px;">Connect with me on</p>
                                </td>
                            </tr>
                            <tr>
                            <td style="padding-bottom:30px;" align="center">
                                <table align="center" style="border-spacing: 0; display: inline-block;border-collapse: unset;">
                                    <tr>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${fbUrl ? fbUrl : "https://www.facebook.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/ocean/facebook.jpg" alt="facebook"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${twitterUrl ? twitterUrl : "https://twitter.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/ocean/twitter.jpg" alt="twitter"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${youtubeUrl ? youtubeUrl : "https://youtube.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/ocean/youtube.jpg" alt="youtube"></a>
                                        </td>
                                        <td style="width:28px; height:28px; padding-left:5px; padding-right:5px;" width="38" height="28">
                                            <a href="${linkedinUrl ? linkedinUrl : "https://www.linkedin.com/"}"><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/ocean/linkedin.jpg" alt="linkedin"></a>
                                        </td>
                                    </tr>
                                </table>
                            </td>
                            </tr>
                            <tr>
                                <td style="text-align: center; padding-bottom:6px;">
                                    <a href=""><img src="https://viideon.s3-us-west-1.amazonaws.com/email-templates/ocean/logo-footer.jpg" alt=""></a>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <p style="font-size:9px; color:#ffffff; text-align: center;">© 2021 VideonPro All Rights Reserved</p>
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
