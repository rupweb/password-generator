/**
 * @jest-environment jsdom
 */

import { specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters } from '../js/script.js';
import { createPassword } from '../js/generate.js';

describe('createPassword function', () => {
  // Test for password length
  test('generates a password of correct length', () => {
    const length = 10;
    const password = createPassword(length, true, true, true, true);
    expect(password).toHaveLength(length);
  });

  // Test to include at least one lowercase character
  test('includes lowercase characters if specified', () => {
    const password = createPassword(10, true, false, false, false);
    expect(password).toMatch(new RegExp(`[${lowerCasedCharacters}]`));
  });

  // Test to include at least one uppercase character
  test('includes uppercase characters if specified', () => {
    const password = createPassword(10, false, true, false, false);
    expect(password).toMatch(new RegExp(`[${upperCasedCharacters}]`));
  });

  // Test to include at least one numeric character
  test('includes numeric characters if specified', () => {
    const password = createPassword(10, false, false, true, false);
    expect(password).toMatch(new RegExp(`[${numericCharacters}]`));
  });

  // Test to include at least one special character
  test('includes special characters if specified', () => {
    const password = createPassword(10, false, false, false, true);
    const escapedSpecialChars = escapeRegExp(specialCharacters.join(''));
    expect(password).toMatch(new RegExp(`[${escapedSpecialChars}]`));
  });

  // Test to ensure function handles invalid length gracefully
  test('handles invalid length gracefully', () => {
    const password = createPassword(-1, true, true, true, true);
    expect(password).toBe('');
  });
});

function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')  // $& means the whole matched string
    .replace(/-/g, '\\-'); // Escape hyphen
  }