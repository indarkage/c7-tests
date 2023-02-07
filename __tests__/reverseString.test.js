const reverseString = require('../src/reverseString');

describe('tests for reverseString function', () => {
    it('reverse string', () => {
        const result = reverseString('monkey');
        expect(result).toBe('yeknom');
    });
});