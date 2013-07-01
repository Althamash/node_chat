var socketio = require('socket.io');

var io,
	guestNumber = 1;
	nickNames = {},
	namesUsed = [],
	currentroom = {};