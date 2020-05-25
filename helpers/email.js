const nodemailer = require('nodemailer')
require('dotenv').config()
const dateFormat = require('dateformat');

exports.send = (newIp)=>{
    console.log('\t- Sending email.......')
    const currDateTime = dateFormat(new Date(), "yyyy-mm-dd h:MM:ss")
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASSWORD 
        }
    })

    const mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: process.env.TO_EMAIL,
        subject: `${currDateTime} IP CHANGED`,
        text: `YOUR NEW PUBLIC IP IS: ${newIp}`
    }

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(`\t// error: ${error}`);
        } else {
            console.log('\t- Email sent: ' + info.response);
        }
    })
}