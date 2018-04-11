'use strict';

module.exports = function (app, taskArray) {
    app.put('/update-task/:id', function (req, res) {
        var taskObject = '';

        req.on('data', function (data) {
            taskObject += data;
        });

        req.on('end', function () {
            taskArray.forEach(function (item, index) {
                item = JSON.parse(item);
                if(item.id === req.params.id){
                    taskArray.splice(index, 1, taskObject);
                    res.end('Tarea actualizada');
                }
            });
        });
    });
};