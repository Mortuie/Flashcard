var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

var User = require('../models/User');

var jwt = require('jsonwebtoken');
var bcrypt = require('bcryptjs');

var VerifyToken = require('./VerifyToken');

User.remove();

router.post('/register', (req, res) => {
    var hashedPassword = bcrypt.hashSync(req.body.password, 10);

    User.create({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
    }, (err, user) => {
        if (err) return res.status(500).send('There was a problem registering the user.');

        var token = jwt.sign({id: user.id}, process.env.SECRET_KEY, {
            expiresIn: 86400,
        });
        console.log(req.body.name);
        res.status(200).send({auth: true, token: token});
    });


});

router.get('/me', VerifyToken, (req, res) => {

    User.findById(req.userId, { password: 0 }, function (err, user) {
      if (err) return res.status(500).send("There was a problem finding the user.");
      if (!user) return res.status(404).send("No user found.");
      res.status(200).send(user);
    });
  
  });

router.get('/all', (req, res) => {
    User.find({}, (err, user) => {
        if (err) return res.status(400).send('Error');
        res.json(user);
    });
});
  
router.post('/login', (req, res) => {

    User.findOne({username: req.body.username}, (err, user) => {
        if (err) return res.status(500).send('Error on the server.');
        if (!user) return res.status(404).send('No user found.');

        var passwordValid = bcrypt.compareSync(req.body.password, user.password);
        if (!passwordValid) return res.status(401).send({auth: false, token: null});

        var token = jwt.sign({id: user._id}, process.env.SECRET_KEY, {
            expiresIn: 86400,
        });

        res.status(200).send({auth: true, token});


    });
});


module.exports = router;
