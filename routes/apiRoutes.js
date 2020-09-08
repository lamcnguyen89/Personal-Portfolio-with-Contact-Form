// Source: https://tylerkrys.ca/blog/adding-nodemailer-email-contact-form-node-express-app

//=============================================
// DEPENDENCIES
// include the path module to allow the JS file to move to the correct path to the specified file
//=============================================
const path = require("path");
const nodemailer = require('nodemailer');
require("dotenv").config();

const GMAIL_USER = process.env.GMAIL_USER
const GMAIL_PASS = process.env.GMAIL_PASS

//=============================================
// ROUTING
//=============================================

module.exports = function(app) {

    // POST- for sending form data that the user inputs in the contact form to gmail
    app.post("/contact", function(req,res) {

        // Create the SMTP server for Gmail
        const smtpTrans = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 465,
            secure: true,
            auth: {
                user: GMAIL_USER,
                pass: GMAIL_PASS
            }
        })

        // Specify what the email will look like
        const mailOpts = {
            from: 'Your sender info here', // This is ignored by Gmail
            to: GMAIL_USER,
            subject: 'Message from my Personal Portfolio',
            text: `${req.body.name} (${req.body.email}) says: ${req.body.message}`
        }

        // Attempt to send the email
        smtpTrans.sendMail(mailOpts, (error, response) => {
            if (error) {
                res.render('contact-failure') // Show a page indicating failure
            }
            else {
                res.render('contact-success') // Show a page indicating success
            }
        });

    });
  
};