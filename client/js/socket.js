require('../style/socket.scss');

var io = require('socket.io-client');
var socket = io.connect();

document.querySelector('#chat-talk').addEventListener('keyup', function(event) {
    if (event.keyCode !== 13) {
        return;
    }

    var name = document.querySelector('#chat-name').value;
    var msg = this.value;

    socket.emit('hello', {
        name: name,
        msg: msg
    });
    this.value = '';
});

socket.on('msg', function(data) {
    var html = document.querySelector('#chat-box').innerHTML;
    var template = require('../template/chat-msg.hbs');
    var msgHtml = template(data);

    document.querySelector('#chat-box').innerHTML = msgHtml + html;
});
