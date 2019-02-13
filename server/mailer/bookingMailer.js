const nodemailer = require('nodemailer')
var moment = require('moment-timezone');

function bookingMailer(req, res){
    console.log('booking mailer', req.body)

    const { subject, name, email, phone, message, emailTo, date, time, am_Pm, timeSlot, start, end, dailySessionsRemaining, initialSessions } = req.body
    let title = 'Booking%20' + subject +'%20for%20' + name.split(' ').shift() || 'New Booking'
    const eventDate = start.replace(/-/g,'')

    let nzTimeZone = ''
    let nzZone = ''
    let gmtStartDate = 'undefined'
    let gmtEndDate = 'undefined'
    let gmtTimeStart = '000000'
    let gmtTimeEnd = '000000'

    let startTime = '000000'
    let endTime = '000000'
    //  + nzTimeZone

    
    if (time){
        
        const formatTime = time.replace(':','')+'00'
        console.log('format time', formatTime)
        startTime = Number(formatTime) 
        // + nzTimeZone
        endTime = startTime + 10000

        nzTimeZone = moment.tz(`${start} ${time}`, 'pacific/Auckland');
        console.log('nzTimeZone', nzTimeZone)
        nzZone = nzTimeZone.valueOf();
        console.log('nzZone', nzZone)
        gmtStartDate = moment(nzZone).tz('Europe/London').format('YYYYMMDD');
        console.log('gmtStartDate', gmtStartDate)
        gmtEndDate = moment(nzZone).tz('Europe/London').add(1, 'h').format('YYYYMMDD');
        console.log('gmtEndDate', gmtEndDate)
        gmtTimeStart = moment(nzZone).tz('Europe/London').format('HHmmss');
        console.log('gmtTimeStart', gmtTimeStart)
        gmtTimeEnd = moment(nzZone).tz('Europe/London').add(1, 'h').format('HHmmss');
        console.log('gmtTimeEnd', gmtTimeEnd)

    
    }


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
        subject: `Booking ${subject} request on ${date} from ${name}`, 
        html: `
            <h2>Booking ${subject} Request for ${time === '' ? 'a flexable time' : time } on ${date}</h2>
            <h4>Add the booking to Calendar..</h4>
            <p>http://www.google.com/calendar/event?action=TEMPLATE&dates=${gmtStartDate}T${gmtTimeStart}Z%2F${gmtEndDate}T${gmtTimeEnd}Z&text=${title}&location=&details=${title}%20contact%20email%20${email}</p>
            <h5>${!timeSlot ? 'This day began with ' : 'This timeslot began with '}${initialSessions} bookings available, currently ${dailySessionsRemaining} bookings remain</h5>
            <h4>You have the following booking request..</h4>
            <h5>From: ${name}</h5>
            <h5>Email: ${email}</h5>
            <h5>Contact number: ${phone}</h5>
            <h5>Message:</h5>
            <h5><i>${message}</i></h5>
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