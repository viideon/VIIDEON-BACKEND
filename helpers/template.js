module.exports.generateStringTemplate = (id, thumbnail) => {
  return `<!DOCTYPE html>
  <html lang="en" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml"
    xmlns:o="urn:schemas-microsoft-com:office:office">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="x-apple-disable-message-reformatting" />
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet">
  </head>
 <style> @media (min-width: 320px)and (max-width: 374px) { u~div .email-container { min-width: 320px !important; } } @media only screen and (min-device-width: 320px) and (max-device-width: 374px) { u~div .email-container { min-width: 320px !important; } } /* iPhone 6, 6S, 7, 8, and X */ @media only screen and (min-device-width: 375px) and (max-device-width: 413px) { u~div .email-container { min-width: 375px !important; } } /* iPhone 6+, 7+, and 8+ */ @media only screen and (min-device-width: 414px) { u~div .email-container { min-width: 414px !important; } } body { font-family: 'Montserrat', Georgia, sans-serif; } </style> <body width="100%" style="margin: 0; font-family: 'Montserrat',Georgia, sans-serif; padding: 0 !important; mso-line-height-rule: exactly; background-color: #F2F2F1;"> <center style="width: 100%; background-color: #F2F2F1;"> <div style="max-width: 600px; margin: 0 auto;padding: 5px" class="email-container"> <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;"> <tr> <td> <h5 style="font-size:16px">vidionPro</h5> </td> <td> <h5 style="text-align: end;font-size: 16px" align="end"> Hello </h5> </td> </tr> </table> </div> <div style="max-width: 600px; margin-top: 0px;margin-bottom: 50px; margin-left: auto; margin-right: auto;background-color: #fff;padding: 10px 10px 30px 10px" class="email-container"> <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;"> <tr> <td> <a href="https://vidionpro.000webhostapp.com/watch/${id}"> <div style="width: 100%;background-color:#000;"> <div style="height:280px;background-image:url(${thumbnail});object-fit:contain;background-size: contain;background-repeat:no-repeat;background-position: center"> <img style="width: 80px;margin-left: 44%;margin-top: 18%" src="http://clipart-library.com/images/6Tp5aga7c.png" /> </div> </div> </td> </tr> <tr> <td> <h5 style="text-align: center;color: #76827F;padding:0px 30px;font-weight: 800" align="center"> Video powered by vidionPro </h5> </td> </tr> <tr> <td style="text-align: center;" align="center"> <a style="cursor: pointer;background-color: #19AF8F;color: #fff;padding:10px 14px;border-radius: 3px;font-weight: 400;text-decoration: none; margin-bottom: 30px" href="https://vidionpro.000webhostapp.com/watch/${id}">WATCH VIDEO</a> </td> </tr> </table> </div> </center> <center style="width: 100%; background-color: #fff;"> <div style="max-width: 600px; margin: 0 auto;padding: 5px" class="email-container"> <table align="center" role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto;"> <tr> <h5 style="text-align: end;color: #75827E" align="end"> Sent using <span><a href="https://vidionpro.000webhostapp.com" style="color: #75827E">vidionPro</a></span> </h5> </td> </tr> </table> </div> </center> <center style="width: 100%; background-color: #F2F2F1;"> <div style="max-width: 600px; margin: 0 auto;padding: 5px" class="email-container"> <table role="presentation" cellspacing="0" cellpadding="0" border="0" width="100%" style="margin: auto; background: #F2F2F1"> <tr> <td> <h5 style="text-align: center; color: #A0A09F" align="center"> Vidion Pro &copy All Rights reserved </h5> </td> </tr> </table> </div> </center> </body> </html>`;
};