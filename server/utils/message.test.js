var expect = require('expect');


var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {

	it('should generate correct message object', () => {
		var from = 'Hamid';
		var text = 'This is a test';

		var message = generateMessage(from, text);
		
		expect(message).toBeAn('object');
		expect(message.from).toEqual(from);
		expect(message.text).toEqual(text);
		expect(message.createAt).toBeA('number');
		expect(message).toInclude({from, text});
	});

});


describe('generateLocationMessage', () => {

	it('should generate correct location object', () => {
		var from = 'Hamid';
		var lat = 1;
		var lng = 1;
		var url = 'https://www.google.com/maps?q=1,1';
		var message = generateLocationMessage(from, lat, lng);

		expect(message).toBeAn('object');
		expect(message.url).toBeA('string');
		expect(message.createAt).toBeA('number');
		expect(message.from).toEqual(from);
		expect(message.url).toEqual(url);
	});

});