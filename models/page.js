var mongoose = require('mongoose');

// Page Schema
var PageSchema = mongoose.schema({
  title: {
    type: String,
    required: true
  },
  slug: {
    type: String
  },
  content: {
    type: String,
    required: true
  },
  sorting: {
    type: Number
  }
})

var Page = module.export = mongoose.model('Page',PageSchema);
