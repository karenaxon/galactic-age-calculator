
import Calculator from "../src/js/Calculator.js";

describe('Calculator', () => {
  let age1;

  beforeEach(() => {
    age1 = new Calculator(35);
  });

  test('It should return 35', () => {
    expect(age1.humanAge).toEqual(35);
  });
});