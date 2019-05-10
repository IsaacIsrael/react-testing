import { capitalize } from '../string';

test('it should return null for null', () => {
  expect(capitalize(null)).toBe(null);
});
test('capitalize should handle empty string', () => {
  expect(capitalize('')).toBe('');
});
test('capitalize should handle one letter string a', () => {
  expect(capitalize('a')).toBe('A');
});
test('capitalize should handle one letter string A', () => {
  expect(capitalize('A')).toBe('A');
});
test('capitalize should handle work for isaac', () => {
  expect(capitalize('isaac')).toBe('Isaac');
});
test('capitalize should handle work for Isaac', () => {
  expect(capitalize('Isaac')).toBe('Isaac');
});
test('capitalize should handle work for ISAAC', () => {
  expect(capitalize('ISAAC')).toBe('Isaac');
});
test('capitalize should handle work for iSaAc', () => {
  expect(capitalize('iSaAc')).toBe('Isaac');
});
