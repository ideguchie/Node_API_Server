'use strict';
var http = require('http');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var TaskSchema = new Schema({
  text: {
    type: String,
    Default: 'text things'
  },
  folder: {
    type: String
  }
});

module.exports = mongoose.model('testament', TaskSchema);

var FileSchema = new Schema({
  url: {
    type: String
  },
  fileName: {
    type: String
  },
  folder: {
    type: String
  },
  who: {
    type: String
  },
  when: {
    type: Date
  }
});

module.exports = mongoose.model('files', FileSchema);
