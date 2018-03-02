var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/pages', function(req, res, next) {
  console.log('admin page ');
  res.send('Hello Admin');

});

router.get('/add-page', function(req, res, next) {
  var title = "";
  var content = "";
  var slug = "";

  res.render('admin/add_page', {
    title: title,
    slug: slug,
    content: content
  });
});

module.exports = router;
