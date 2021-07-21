const { DivisorsCnt } = require('./divisorsCnt');

describe('Test Count the divisors of a number functions', () => {
  it('input 1 output 1', () => {
    const divisorsCnt = new DivisorsCnt();
    expect(divisorsCnt.getDivisorsCnt(1)).toStrictEqual(1);
  });
  it('input 10 output 4', () => {
    const divisorsCnt = new DivisorsCnt();
    expect(divisorsCnt.getDivisorsCnt(10)).toStrictEqual(4);
  });  
});