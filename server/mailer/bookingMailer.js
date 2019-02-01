const nodemailer = require('nodemailer')

function bookingMailer(req, res){
    console.log('booking mailer', req.body)

    const { name, email, phone, message, emailTo, date, time, am_Pm, timeSlot, start, end } = req.body
    let title = 'Booking%20' + name.split(' ').shift() || 'New Booking'
    const startDate = start.replace(/-/g,'')
    const endDate = end.replace(/-/g,'')

    const nzTimeZone = 130000
    let startTime = 0 + nzTimeZone

    if (!time === ''){
        const formatTime = time.replace(':','')+'00'
        startTime = Number(formatTime) + nzTimeZone
    }

    let endTime = startTime + 10000
    
    console.log(name, email)
    console.log('startTime', startTime, 'endTime', endTime )

    
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
            <h2>Booking Request for ${time === '' ? 'a flexable time' : time }${am_Pm} on ${date}</h2>
            <h5>You have the following booking request <br /> from: ${name} <br /> email: ${email} <br/> constact number: ${phone}</h5>
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