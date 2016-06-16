var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('BOARDS');
});


router.get('/pets', function(req, res, next) {
  res.send('pets');
});


router.get('/parents', function(req, res, next) {
  res.send('parents');
});

router.get('/events', function(req, res, next) {
  res.send('events');
});


module.exports = router;
