'use strict';

module.exports = function (app, taskArray) {
    app.get('/get-task/:id', function (req, res) {
        taskArray.forEach(function (item) {
            item = JSON.parse(item);
            if(item.id === req.params.id){
                res.end(JSON.stringify(item));
            }
        });
    });
};