require('../style/socket.scss');

var io = require('socket.io-client');
var socket = io.connect();

document.querySelector('#chat-talk').addEventListener('keyup', function(event) {
    if (event.keyCode !== 13) {
        return;
    }

    socket.emit('hello', this.value);
    this.value = '';
});

socket.on('msg', function(data) {
    var html = document.querySelector('#chat-box').innerHTML;
    document.querySelector('#chat-box').innerHTML = data + '<br>' + html;
});
