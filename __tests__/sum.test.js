const sum = require('../src/sum');
// import { sum } from "../src/sum.js";

// test('adds 1 + 2 to equal 3', () => {
//     const result = sum(1, 2);
//     expect(result.toBe(3);
// })

xdescribe('sum tests', () => {
    it('sum 1+2 to equal 3', () => {
        const result = sum(1,2);
        expect(result).toBe(3);
    }),
        it('sum 10+10 to equal 20', () => {
            const result = sum(10, 10);
            expect(result).toBe(20);
        });
});

xdescribe('sum tests 2', () => {
    it('sum 1+2 to equal 3', () => {
        const result = sum(1,2);
        expect(result).toBe(3);
    }),
        xit('sum 10+10 to equal 20', () => {
            const result = sum(10, 10);
            expect(result).toBe(20);
        });
});