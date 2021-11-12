
import Calculator from "../src/js/Calculator.js";

describe('Calculator', () => {
  let age1;

  beforeEach(() => {
    age1 = new Calculator(35);
  });

  test('It should return 35', () => {
    expect(age1.humanAge).toEqual(35);
  });

  test('mercuryAge rounded up should return 8', () => {
    expect(age1.mercuryAge).toEqual(8);
  });

  test('venusAge rounded up should return 22', () => {
    expect(age1.mercuryAge).toEqual(22);
  });

});