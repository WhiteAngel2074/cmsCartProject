var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  console.log('home page ');
  res.render('index', {
    title:'Acceuil'
  })
});

module.exports = router;
