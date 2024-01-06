/**
 * @jest-environment jsdom
 */

import { inputLength } from '../js/prompts.js';

describe('prompt tests', () => {
  test('check password length', () => {
    expect(inputLength(1)).toBe(false);
    expect(inputLength(9)).toBe(true);
    expect(inputLength(100)).toBe(true);
    expect(inputLength(200)).toBe(false);

    expect(inputLength("hello")).toBe(false);
  });
});