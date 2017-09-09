var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('socket', {
        layout: 'layout-socket.hbs'
    });
});

module.exports = router;
