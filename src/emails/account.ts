import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mihailo.milenkovic4@gmail.com",
    subject: "Welcome to the note app",
    text: `Hello ${name}. Thanks for using the application. Please give feedback about the app`,
  });
};

const sendRemovalEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: "mihailo.milenkovic4@gmail.com",
    subject: "Note app account removal",
    text: `${name}, thank you for using the note app. You have successfully removed your account`,
  });
};

export default {
  sendWelcomeEmail,
  sendRemovalEmail,
};
