const { expect } = require('chai');
const { add } = require('../src/calculator');

describe('Calculator utility: add()', () => {
  it('should add two valid numbers correctly', () => {
    expect(add(10, 5)).to.equal(15);
  });

  it('should handle edge case with zero values', () => {
    expect(add(0, 0)).to.equal(0);
  });

  it('should handle negative and decimal values', () => {
    expect(add(-3.5, 1.2)).to.equal(-2.3);
  });

  it('should throw an error for non-numeric input', () => {
    expect(() => add('abc', 2)).to.throw('a must be a valid number');
  });
});
