var express = require('express');
var router = express.Router();

/* GET coffees listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a :coffee:');
});

module.exports = router;