const Color = require('../utils/Color');

it('converts 3char hex', () => {
    expect(Color.darken('#fff',100)).toBe('#000000');
    expect(Color.lighten('#000',100)).toBe(`#ffffff`);
});

it('converts 6char hex', () => {
    expect(Color.darken('#ffffff',100)).toBe('#000000');
    expect(Color.lighten('#000000',100)).toBe(`#ffffff`);
    expect(Color.lighten('#000000',10)).toBe('#1a1a1a');
    expect(Color.darken('#ffffff',10)).toBe('#e6e6e6');
});

it('converts rgb', () => {
    expect(Color.darken('rgb(255,255,255)',100)).toBe('rgb(0,0,0)');
    expect(Color.lighten('rgb(0,0,0)',100)).toBe(`rgb(255,255,255)`);
});

it('converts rgba', () => {
    expect(Color.darken('rgba(255,255,255,0.5)',100)).toBe('rgba(0,0,0,0.5)');
    expect(Color.lighten('rgba(0,0,0,0.7)',100)).toBe(`rgba(255,255,255,0.7)`);
});

it('returns undefined for not supported colors', ()=> {
    expect((Color.darken('#fffffff',100))).toBe(undefined);
    expect((Color.darken('rgb(a,b,c)',100))).toBe(undefined);
    expect((Color.darken('rgba(1,3,4)',100))).toBe(undefined);
});

