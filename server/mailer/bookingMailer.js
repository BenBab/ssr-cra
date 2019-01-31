const nodemailer = require('nodemailer')

function bookingMailer(req, res){
    console.log('booking mailer', req.body)

    const { name, email, message, emailTo, date, time, timeSlot, start, end } = req.body
    let title = 'Booking%20' + name.split(' ').shift() || 'New Booking'
    const startDate = start.replace(/-/g,'')
    const endDate = end.replace(/-/g,'')

    let startTime = 000000
    let endTime = 000000

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
        subject: `Booking request on ${date} from ${name}`, 
        html: `
            <h2>Booking Request at ${time} on ${date}</h2>
            <h5>You have a booking request from ${name} at ${email}</h5>
            <h5>Message:</h5>
            <p>${message}</p>
            <h5>Add the booking to Calendar</h5>
            <p>http://www.google.com/calendar/event?action=TEMPLATE&dates=${startDate}T${startTime}Z%2F${endDate}T${endTime}Z&text=${title}&location=&details=</p>

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

module.exports = bookingMailer