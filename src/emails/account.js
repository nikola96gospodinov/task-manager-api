const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nikola96gospodinov@gmail.com',
        subject: 'Thank you for joining!',
        text: `Welcome to the app, ${name}! Let me know how you get along.`
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'nikola96gospodinov@gmail.com',
        subject: 'So sorry to see you go',
        text: `Sorry to see you go, ${name}. Is there something that we could have done better?`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}