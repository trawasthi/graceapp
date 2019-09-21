'use strict';
const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
// Configure the email transport using the default SMTP transport and a GMail account.
const gmailEmail = functions.config().gmail.email;
const gmailPassword = functions.config().gmail.password;
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: gmailEmail,
    pass: gmailPassword
  }
});

// company name to include in the emails
const APP_NAME = 'Grace Consultancy';

/**
 * Sends a booking confirmation email to user.
 */
exports.sendConfirmationEmail = functions.https.onRequest((req, res) => {
  // getting destination email by query string
  const email = req.query.email;
  const displayName = req.query.name;
  const time = req.query.time;
  return sendWelcomeEmail(email, displayName, time);
});

// Sends a welcome email to the given user.
async function sendWelcomeEmail(email, displayName, time) {
  const mailOptions = {
    from: `${APP_NAME} <noreply@firebase.com>`,
    to: email
  };

  // The user subscribed to the newsletter.
  mailOptions.subject = `Appointment with ${APP_NAME}!`;
  mailOptions.text = `Hey ${displayName ||
    ''}! Welcome to ${APP_NAME}. Your appointment is confirmed and is scheduled to ${time}.`;
  await mailTransport.sendMail(mailOptions);
  return null;
}
