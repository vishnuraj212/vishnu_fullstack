var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/view', function(req, res, next) {
  res.render('viewbook');
});

module.exports = router;
