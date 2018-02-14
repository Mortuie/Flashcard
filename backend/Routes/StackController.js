var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

var Stack = require('../Models/Stack');
var VerifyToken = require('../authentication/VerifyToken');

router.get('/all', (req, res) => {
    Stack.find({}, (err, stack) => {
        if (err) return res.status(400).send('Error');
        res.json(stack);
    });
});

router.post('/newstack', VerifyToken, (req, res) => {
    console.log(req.body);
    Stack.create({
        name: req.body.name,
        cards: req.body.cards,
        username: req.body.username,
    }, (err, stack) => {
        if (err) return res.status(500).send('Error creating stack');

        res.status(200).json(stack);
    });

});

router.post('/getstacks', VerifyToken, (req, res) => {
    Stack.find({username: req.body.username}, (err, stacks) => {
        if (err) return res.status(400).send('Error finding stacks');
        res.json(stacks);
    });
});


module.exports = router;