'use strict';
module.exports = function(app) {
  var control = require('../controls/saCtl');

  app.route('/upload')
    .post(control.upload_file)
    .get(control.download_file);

  app.route('/tasks')
    .get(control.list_all_tasks)
    .post(control.create_a_task);


  app.route('/tasks/:taskId')
    .get(control.read_a_task)
    .put(control.update_a_task)
    .delete(control.delete_a_task);

  app.route('/search/:text')
    .get(control.search);
};
