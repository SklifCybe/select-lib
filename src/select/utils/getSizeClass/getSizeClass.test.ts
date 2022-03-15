import { getSizeClass, Classes } from '.';

describe('get css classes', () => {
  it('should return currectly classes', () => {
    expect(getSizeClass('s')).toBe(Classes.s);
    expect(getSizeClass('m')).toBe(Classes.m);
    expect(getSizeClass('l')).toBe(Classes.l);
    expect(getSizeClass('xl')).toBe(Classes.xl);
  });
});
