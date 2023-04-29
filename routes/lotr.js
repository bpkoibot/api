var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var lotrModel = require('../models/lotrModel.js');

/* GET characters listing. */
router.get('/', function (req, res, next) {
    lotrModel.find(function (err, characters) {
        if (err) return next(err);
        else {
            //Om inget fel -> skicka karaktärer i jsonformat
            res.json(characters);
        }
    });
});

module.exports = router;
