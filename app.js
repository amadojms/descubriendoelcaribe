// var sender = 'smtps://descubriendoelcaribecun%40gmail.com' // The emailto use in sending the email
var express = require('express');
var app = express();
bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
// var EmailTemplate = require('email-templates').EmailTemplate;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});


var sender = 'descubriendoelcaribecun@gmail.com';
var password = 'D3scubriendo2018'; // password of the email to use

app.get('/test', function (req, res) {
  res.send('Email enviado');
});

app.post('/sendEmail', function (request, response) {
  console.log(request, response);
  // var name = request.body.name;
  // var email = request.body.email;
  // var phone = request.body.phone;
});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: sender,
    pass: password
  },
  tls: {
    rejectUnauthorized: false
  }
});

app.post('/sendEmail', function (req, res) {
  var user_id = req.body.id;
  // const mailOptions = {
  //   from: sender, // sender address
  //   to: 'amadojms@gmail.com', // list of receivers
  //   subject: 'test', // Subject line
  //   html: '<h3>Hey!<small>Como estas?</small></h3><br><p>En horabuena el correo ha llegado a ti! eres el elegido.</p>' // plain text body
  // };
  // transporter.sendMail(mailOptions, function (err, info) {
  //   if (err)
  //     console.log(err)
  //   else
  //     console.log(info);
  // });
  // var token = req.body.token;
  // var geo = req.body.geo;

  // res.send(user_id + ' ' + token + ' ' + geo);
});



app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});