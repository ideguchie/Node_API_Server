'use strict';

var fs = require('fs');
var mongoose = require('mongoose'),
  Property = mongoose.model('testament'),
  Files = mongoose.model('files');

exports.search = function(req, res) {
  Property.find({text:req.params.text, folder:req.params.folder}, function(err, property) {
    if (err) res.send(err);
    res.json(property);
  });
};

exports.download_file = function(req, res) {
  Files.find({fileName: req.query.fileName, who: req.query.who}, function(err, filedata) {
    if(err) res.send(err);
    res.json(filedata)
  });
};

exports.upload_file = function(req, res) {
  var new_file = new Files({url: req.files.file.file,
                            fileName: req.files.file.filename,
                            folder: req.files.file.uuid,
                            who: "Dr.Who",
                            when: new Date().getTime()});
  new_file.save(function(err, file) {
    if(err) res.send("File upload failed: " + err);
    res.json('File upload successful.');
  });
};

exports.list_all_tasks = function(req, res) {
  Property.find({}, function(err, property) {
    if (err)
      res.send(err);
    res.json(property);
  });
};


exports.create_a_task = function(req, res) {
  var new_task = new Property(req.body);
  new_task.save(function(err, property) {
    if (err)
      res.send(err);
    res.json(property);
  });
};


exports.read_a_task = function(req, res) {
  Property.findById(req.params.taskId, function(err, property) {
    if (err)
      res.send(err);
    res.json(property);
  });
};


exports.update_a_task = function(req, res) {
  Property.findOneAndUpdate(req.params.taskId, req.body, {new: true}, function(err, property) {
    if (err)
      res.send(err);
    res.json(property);
  });
};


exports.delete_a_task = function(req, res) {


  Property.remove({
    _id: req.params.taskId
  }, function(err, property) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};
