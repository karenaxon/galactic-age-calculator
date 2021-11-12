
import Calculator from "../src/js/Calculator.js";

describe('Calculator', () => {
  let age1, age2;

  beforeEach(() => {
    age1 = new Calculator(35);
  });

  test('It should return 35', () => {
    expect(age1.humanAge).toEqual(35);
  });

  test('mercuryAge rounded should return 8', () => {
    expect(age1.mercuryAge).toEqual(8);
  });

  test('venusAge rounded should return 22', () => {
    expect(age1.venusAge).toEqual(22);
  });

  test('marsAge rounded should return 66', () => {
    expect(age1.marsAge).toEqual(66);
  });

  test('jupiterAge rounded should return 415', () => {
    expect(age1.jupiterAge).toEqual(415);
  });

  beforeEach(() => {
    age2 = new Calculator(40, 77.3);
  });

  test('humanLifeExpectancy should return 77.3', () => {
    expect(age2.humanLifeExpectancy).toEqual(77.3);
  });

});