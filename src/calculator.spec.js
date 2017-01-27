import calculator from './calculator';

describe('calculator', () => {

    it('1+1=2', () => {
        expect(calculator.add(1,1)).toBe(2);
    });

    it('2+2=4', () => {
        expect(calculator.add(2,2)).toBe(4);
    });

    it('2+2+2=6', () => {
        expect(calculator.add(2,2,2)).toBe(6);
    });

    it('no arguments should result in zero', () => {
        expect(calculator.add()).toBe(0);
    });

    it('4+5+6+7+2=24', () => {
        expect(calculator.add(4,5,6,7,2)).toBe(24);
    });

});
