var generateMessage = (from, text) => {
	return {
		from,
		text,
		createAt: new Date().getTime()
	};
};

var generateLocationMessage = (from, latitiude, longitude) => {
	return {
		from,
		url: `https://www.google.com/maps?q=${latitiude},${longitude}`,
		createAt: new Date().getTime()
	};
};

module.exports = {generateMessage, generateLocationMessage};