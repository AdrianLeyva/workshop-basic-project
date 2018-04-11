'use strict';

module.exports = function (app, taskArray) {
    app.get('/get-all-tasks', function (req, res) {
        res.end(JSON.stringify(taskArray));
    });
};