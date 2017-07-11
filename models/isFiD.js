'use strict';
var http = require('http');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var FileDataSchema = new Schema {
  
}

module.exports = mongoose.model('filedata', FileDataSchema);
