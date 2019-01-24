var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'FLM' });
});

router.get('/indexeddb', function(req, res) {
  res.render('Indexeddb');
});

router.get('/indexeddb2', function(req, res) {
  res.render('Indexeddb2');
});

router.get('/sec', function(req, res) {
  res.render('sec', { title: 'FLM' });
});

router.get('/grammer', function(req, res) {
  res.render('grammer');
});

module.exports = router;
