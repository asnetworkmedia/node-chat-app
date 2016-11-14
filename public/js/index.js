var socket = io();	

socket.on('connect', function() {
	console.log('Connected to server');

	socket.on('disconnect', function() {
		console.log('Disconnected form server');
	});

	socket.emit('createMessage', {
		from: 'hamid',
		text: 'Not much dude'	
	});
});

socket.on('newMessage', function(message) {
	console.log('newMessage', message);
});