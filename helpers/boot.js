'use strict';

module.exports = function (app, taskArray) {
    require('../routes/add-task')(app, taskArray);
    require('../routes/delete-task')(app, taskArray);
    require('../routes/get-all-tasks')(app, taskArray);
    require('../routes/get-task')(app, taskArray);
    require('../routes/update-task')(app, taskArray);

    require('../routes/root')(app);
};