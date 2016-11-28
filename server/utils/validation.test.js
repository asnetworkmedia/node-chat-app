const expect = require('expect');
const {isRealString} = require('./validation');


describe('isRealString test', () =>{
	it('should reject non-string values', () => {
		var res = isRealString(123245);
		expect(res).toBeA('boolean').toBe(false);
	});

	it('should reject string with only space', () => {
		var res = isRealString('  ');		
		expect(res).toBeA('boolean').toBe(false);
	});

	it('shoud allow string with non-space character', () => {
		var res = isRealString('  Hamid ');		
		expect(res).toBeA('boolean').toBe(true);
	});
});