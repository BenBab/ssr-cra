const nodemailer = require('nodemailer')

function serverMailer(req, res){
    console.log('server mailer', req.body)

    const { subject, name, email, phone, message, emailTo } = req.body

    console.log(name, email)

    var smtpTransport = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: process.env.REACT_APP_NODEMAILER_EMAIL,
          pass: process.env.REACT_APP_NODEMAILER_PASS
        }
    });

    var mailOptions = {
        to: emailTo,
        from: email,
        subject: `Contact request: Subject - ${subject} from - ${name}`, 
        html: `
            <h2>Contact Us Request</h2>
            <h5>You have a contact request; <br/> Subject: ${subject} <br/> From: ${name} <br/> Email: ${email} <br/> Phone: ${phone}</h5>
            <h5>Message:</h5>
            <p>${message}</p>
            `
    };

    smtpTransport.sendMail(mailOptions, function(err, info) {
        if (err) {
          console.log(err);
          throw new Error('There was an issue with sending the email - please try again later'); 
        } else {
          console.log('Email sent: ' + info.response);
          res.send(info.response)
        }
    });
    
}

module.exports = serverMailer