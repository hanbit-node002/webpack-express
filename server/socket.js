var socketio = require('socket.io');
var moment = require('moment');
var _ = require('lodash');

function init(server) {
    var io = socketio(server);

    io.sockets.on('connection', function(socket) {
        console.log('someone connected.');
        socket.on('hello', function(data) {
            if (!_.trim(data.msg)) {
                return;
            }

            var name = _.trim(data.name) || 'unknown';
            var msg = data.msg;
            var date = moment().format('YYYY-MM-DD HH:mm:ss');

            io.sockets.emit('msg', {
                name: name,
                msg: msg,
                date: date
            });
        });
        socket.on('disconnect', function(reason) {
            console.log('disconnected ' + reason);
        });
    });
}

module.exports = init;