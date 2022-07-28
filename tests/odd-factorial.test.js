const oddFactorial = require('../problems/05-odd-factorial');

describe('oddFactorial', () => {
  xit('should return a number if the input is positive', () => {
    const answer = oddFactorial(5);
    expect(typeof answer).toBe('number');
  });

  xit('should return the odd factorial of the input number (stoppingPoint)', () => {
    expect(oddFactorial(5)).toBe(15);
    expect(oddFactorial(6)).toBe(15);
    expect(oddFactorial(7)).toBe(105);
  });

  xit('should return the odd factorial if the input is 0', () => {
    expect(oddFactorial(0)).toBe(1);
  });

  xit('should return null if the stoppingPoint is a negative number', () => {
    expect(oddFactorial(-5)).toBe(null);
  });
});
