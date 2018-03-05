var express = require('express');
var router = express.Router();
var Page = require('../models/page');
/* GET home page. */
router.get('/pages', function(req, res, next) {
  console.log('admin page ');
  res.send('All pages');
  //res.render('headerr')

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
//POST
router.post('/add-page', function(req, res, next) {
  // Verification notEmpty
  req.checkBody('title', 'Title must have a value').notEmpty();
  req.checkBody('content', 'Content must have a value').notEmpty();

  var title = req.body.title;
  var slug = req.body.slug.replace(/\s+/g, '-').toLowerCase();
  if (slug == "") {
    title.replace(/\s+/g, '-').toLowerCase();
  }
  var content = req.body.content;

  var errors = req.validationErrors();

  if (errors) {
    res.render('admin/add_page', {
      errors: errors,
      title: title,
      slug: slug,
      content: content
    })
  } else {
    console.log('success');
    Page.findOne({
      slug: slug
    }, function(err, page) {
      if (page) {
        req.flash('danger', 'Page slug exists, choose another');
        res.render('admin/add_page', {
          title: title,
          slug: slug,
          content: content
        });
      } else {
        var page = new Page({
          title: title,
          slug: slug,
          content: content,
          sorting: 0
        });
        page.save(function(err) {
          if (err) {
            return console.log(err);
            req.flash('success', 'Page added !');
            res.redirect('/admin/pages');
          }
        });
      }
    });

  }
});

module.exports = router;
