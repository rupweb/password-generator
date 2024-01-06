/**
 * @jest-environment jsdom
 */

import { passwordTest, passwordLength, isValidPassword } from '../js/password.js';

describe('password tests', () => {
  test('run a test', () => {
    expect(passwordTest()).toBe("password");
  });

  test('check password length', () => {
    expect(passwordLength("password")).toBe(true);
    expect(passwordLength("pass")).toBe(false);
    expect(passwordLength("passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword")).toBe(true);
    expect(passwordLength("passwordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpasswordpassword1")).toBe(false);
  });

  test('check special characters', () => {
    expect(isValidPassword("password")).toBe(false);
    expect(isValidPassword("Password!")).toBe(false);
    expect(isValidPassword("Password12!")).toBe(true);
    expect(isValidPassword("password12")).toBe(false);
    expect(isValidPassword("12345")).toBe(false);
    expect(isValidPassword("12345!")).toBe(false);
  });
});