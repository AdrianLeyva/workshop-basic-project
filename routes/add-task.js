'use strict';

module.exports = function (app, taskArray) {
    app.post('/add-task', function (req, res) {
        var taskObject = '';

        req.on('data', function (data) {
            taskObject += data;
        });

        req.on('end', function () {
            taskArray.push(taskObject);
            res.end('Tarea registrada');
        });
    });
};