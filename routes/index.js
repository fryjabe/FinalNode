var express = require('express');
var router = express.Router();
var ejs = require('ejs');
var fs= require('fs');
var nodemailer = require('nodemailer');


router.get('/kontakt', function(req,res,next){
  res.render('kontakt')
});



router.get('/materialy-prasowe', function(req,res,next){
  res.render('materialy-prasowe')
});
router.get('/regulamin', function(req,res,next){
  res.render('regulamin')
});

router.get('/biznes', function(req, res, next) {
  res.render('biznes');
});

router.get('/app', function(req, res, next) {
  res.render('app.html');
});

/* GET home page. */
router.post('/send', function(req, res, next) {
  var templateString=fs.readFileSync('./views/email.ejs','utf-8');
  var compiled= ejs.compile(templateString);
  var templateNowy=fs.readFileSync('./views/nowyKlientEmail.ejs','utf-8');
  var compiledNowy= ejs.compile(templateNowy);

  var mailOptions = {
    from : '"noreply@foodsi.pl"',
    to   : req.body.adresEmail,
    subject : 'Witaj w naszym zespole '+req.body.nazwaRestauracji,
    html : compiled({
      nazwaRestauracji: req.body.nazwaRestauracji,
      imie: req.body.imie,
      nazwisko: req.body.nazwisko,
      liczbaLokalizacji: req.body.liczbaLokalizacji,
      rodzajKuchni: req.body.rodzajKuchni,
      numerTelefonu: req.body.numerTelefonu,
      adresEmail: req.body.adresEmail
    })
  };
  var transporter = nodemailer.createTransport({
    host: 'mail.foodsi.pl',
    port: 587,
    auth: { user : "restauracje@foodsi.pl", pass : "Savethefood321" },
    tls: { rejectUnauthorized: false }});

  transporter.sendMail(mailOptions,function (error, success) {
    if(error){
      console.log({msg : "coulnd sent mail",
        error : error})
    }
    console.log({msg: "email sent",
      success: success});



  });

  var mailOptions = {
    from : '"noreply@foodsi.pl"',
    to   : 'restauracje@foodsi.pl',
    subject : 'Nowy klient',
    html : compiledNowy({
      nazwaRestauracji: req.body.nazwaRestauracji,
      imie: req.body.imie,
      nazwisko: req.body.nazwisko,
      liczbaLokalizacji: req.body.liczbaLokalizacji,
      rodzajKuchni: req.body.rodzajKuchni,
      numerTelefonu: req.body.numerTelefonu,
      adresEmail: req.body.adresEmail,
    })
  };
  var transporter = nodemailer.createTransport({
    host: 'mail.foodsi.pl',
    port: 587,
    auth: { user : "restauracje@foodsi.pl", pass : "Savethefood321" },
    tls: { rejectUnauthorized: false }});

  transporter.sendMail(mailOptions,function (error, success) {
    if(error){
      res.status(400).send({msg : "coulnd sent mail",
        error : error});
      return ;
    }
    res.status(200).send({msg: "email sent",
      success: success});



  });


});


router.post('/nowysubskrybent', function(req, res, next) {
  var templateString=fs.readFileSync('./views/doSubskrybenta.ejs','utf-8');
  var compiled= ejs.compile(templateString);
  var templateNowy=fs.readFileSync('./views/odSubskrybenta.ejs','utf-8');
  var compiledNowy= ejs.compile(templateNowy);

  var mailOptions = {
    from : '"noreply@foodsi.pl"',
    to   : req.body.email,
    subject : 'Dziękujemy za zainteresowanie naszą aplikacją!',
    html : templateString
  };
  var transporter = nodemailer.createTransport({
    host: 'mail.foodsi.pl',
    port: 587,
    auth: { user : "info@foodsi.pl", pass : "Savethefood321" },
    tls: { rejectUnauthorized: false }});

  transporter.sendMail(mailOptions,function (error, success) {
    if(error){
      console.log({msg : "coulnd sent mail",
        error : error})
    }
    console.log({msg: "email sent",
      success: success});



  });
  var mailOptions = {
    from : '"noreply@foodsi.pl"',
    to   : 'release@foodsi.pl',
    subject : 'Nowy subskrybent',
    html : compiledNowy({email: req.body.email})
  };
  var transporter = nodemailer.createTransport({
    host: 'mail.foodsi.pl',
    port: 587,
    auth: { user : "info@foodsi.pl", pass : "Savethefood321" },
    tls: { rejectUnauthorized: false }});

  transporter.sendMail(mailOptions,function (error, success) {
    if(error){
      res.status(400).send({msg : "coulnd sent mail",
        error : error});
      return ;
    }
    res.status(200).send({msg: "email sent",
      success: success});



  });

});



router.get('/', function(req, res, next) {
  res.render('index');
});



module.exports = router;
