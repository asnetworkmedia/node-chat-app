var expect = require('expect');


var {generateMessage} = require('./message');

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