import { specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters } from './script.js';
// const { specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters } = require('./script');
 
 function passwordTest() {
    return "password";
  }

  function passwordLength(password) {
    if (password.length < 8) 
      return false;

    if (password.length > 128) 
      return false;

    return true;
  }

function isValidPassword(password) {

  // debugger;

  const hasSpecialCharacter = specialCharacters.some(character => password.includes(character));
  const hasNumericCharacter = numericCharacters.some(character => password.includes(character));
  const hasLowerCasedCharacter = lowerCasedCharacters.some(character => password.includes(character));
  const hasUpperCasedCharacter = upperCasedCharacters.some(character => password.includes(character));
  
  // Check all conditions are true
  return hasSpecialCharacter && hasNumericCharacter && hasLowerCasedCharacter && hasUpperCasedCharacter;
}

// module.exports = { passwordTest, passwordLength, isValidPassword };
export { passwordTest, passwordLength, isValidPassword };