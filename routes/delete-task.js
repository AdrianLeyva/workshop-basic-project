'use strict';

module.exports = function (app, taskArray) {
    app.delete('/delete-task/:id', function (req, res) {
        taskArray.forEach(function (item, index) {
            item = JSON.parse(item);
            if(item.id === req.params.id){
                taskArray.splice(index, 1);
                res.end('Tarea eliminada');
            }
        });
    });
};