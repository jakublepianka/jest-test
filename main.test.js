import { capitalize, reverseString, calculator, caesarCipher, analyzeArray} from "./main.js";

test('capitalize first letter', () => {
  expect(capitalize('hablaba')).toBe('Hablaba');
});

test('reverse string', () => {
  expect(reverseString('string')).toBe('gnirts');
});

test('calculate', () => {
  expect(calculator.add(1,3)).toBe(4);
  expect(calculator.subtract(3,1)).toBe(2);
  expect(calculator.divide(12,12)).toBe(1);
  expect(calculator.multiply(3,7)).toBe(21);
});

test('encrypt by caesarCipher', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});

test('analyze array', () => {
  expect(analyzeArray([1,8,3,4,2,6]).average).toBe(4);
  expect(analyzeArray([1,8,3,4,2,6]).min).toBe(1);
  expect(analyzeArray([1,8,3,4,2,6]).max).toBe(8);
  expect(analyzeArray([1,8,3,4,2,6]).length).toBe(6);

});