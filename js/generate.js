import { specialCharacters, numericCharacters, lowerCasedCharacters, upperCasedCharacters } from './script.js';
import { inputLength } from './prompts.js';

// Function to generate password with user input
function generatePassword() {
    console.log('In generatePassword');

    // Get user preferences
    var length = prompt("How long a password would you like?");

    // Validate length
    if (!inputLength(parseInt(length))) {
      alert("Password length must be between 8 and 128 chars");
      return "";
    }

    var includeLower = confirm("Include lowercase letters?");
    var includeUpper = confirm("Include uppercase letters?");
    var includeNumbers = confirm("Include numbers?");
    var includeSymbols = confirm("Include special characters?");

    // Ensure at least one character type is selected
    if (!includeLower && !includeUpper && !includeNumbers && !includeSymbols) {
      alert("At least one character type must be selected");
      return "";
    }

    // Build the character set based on user preferences
    let charSet = "";
    if (includeLower) charSet += lowerCasedCharacters;
    if (includeUpper) charSet += upperCasedCharacters;
    if (includeNumbers) charSet += numericCharacters;
    if (includeSymbols) charSet += specialCharacters;

    // Generate the password
    let password = "";
    for (let i = 0; i < length; i++) {
      password += getRandom(charSet);
    }
    return password;
}

// Function for getting a random element from an array
function getRandom(arr) {
  // Index from 0 to arr.length - 1
  const randomIndex = Math.floor(Math.random() * arr.length);
  return arr[randomIndex];
}

export { generatePassword };