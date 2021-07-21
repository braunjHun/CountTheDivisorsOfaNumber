const { DivisorsCnt } = require('./divisorsCnt');

describe('Test Count the divisors of a number functions', () => {
  it('Divisors of 1 expected output 1', () => {
    const divisorsCnt = new DivisorsCnt();
    expect(divisorsCnt.getDivisorsCnt(1)).toStrictEqual(1);
  });
  it('Divisors of 10 expected output 4', () => {
    const divisorsCnt = new DivisorsCnt();
    expect(divisorsCnt.getDivisorsCnt(10)).toStrictEqual(4);
  });  
  it('Divisors of 11 expected output 2', () => {
    const divisorsCnt = new DivisorsCnt();
    expect(divisorsCnt.getDivisorsCnt(11)).toStrictEqual(2);
  }); 
  it('Divisors of 54 expected output 8', () => {
    const divisorsCnt = new DivisorsCnt();
    expect(divisorsCnt.getDivisorsCnt(54)).toStrictEqual(8);
  }); 
});