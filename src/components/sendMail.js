var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');

nodemailer.createTransport({
    host: "gmail.com",
    port: 587,
    auth: {
        user: "kaloyanbodev@gmail.com",
        pass: process.env.REACT_APP_PASS
    }
})

//verify connection configuration
transporter.verify(function (error, success) {
    if (error) {
        console.log(error);
    } else {
        console.log('Server is ready to take our message');
    }
})

router.post('/send', (req, res, next) => {
    let name = req.body.name
    let email = req.body.email
    let subject = req.body.subject
    let message = req.body.message
    let content = `name: ${name} \n email:${email} \n
    subject:${subject} \n message:${message}`

    let mail = {
        from: name,
        to: 'kaloyanbodev@gmail.com',
        subject: subject,
        text: content
    }
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
})


