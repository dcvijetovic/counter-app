const { encoder } = require('../utils/encoder')

describe('encoder', () => {
  it('should encode "XXXYYYYZZQXX" to "X3Y4Z2Q1X2"', () => {
    expect(encoder('XXXYYYYZZQXX')).toBe('X3Y4Z2Q1X2');
  });

  it('should encode "DOMINIK" to "D1O1M1I1N1I1K1"', () => {
    expect(encoder('DOMINIK')).toBe('D1O1M1I1N1I1K1');
  });

  it('should encode "" to ""', () => {
    expect(encoder('')).toBe('');
  });
});
