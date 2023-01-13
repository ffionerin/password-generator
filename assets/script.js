// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

var numberOfCharacters;
var special;
var numeric;
var lower;
var upper;

// Add an event listener to the button
var generateButton = document.querySelector("#generate");

generateButton.addEventListener("click", function () {
  getPasswordOptions()
  console.log("working")
})


// Function to prompt user for password options
function getPasswordOptions() {
  numberOfCharacters = prompt("How many characters would you like in your password?");
  console.log(numberOfCharacters)
  if (isNaN(numberOfCharacters)) {
    alert("Please enter a valid number between 10 and 64")
    getPasswordOptions()
  }
  else if (numberOfCharacters < 10) {
    alert("Password length must be at least 10 characters")
    getPasswordOptions()
  }
  else if (numberOfCharacters > 65) {
    alert("Password length can be no more than 64 characters")
    getPasswordOptions()
  }
  else { characterOptions() }
  function characterOptions() {
    lower = confirm("Would you like to include lowercase characters in your password?")
    upper = confirm("Would you like to include uppercase characters in your password?")
    numeric = confirm("Would you like to include numerical characters in your password?")
    special = confirm("Would you like to include special characters in your password?")

    if (!lower && !upper && !numeric && !special) {
      alert("Please select at least one type of character for inclusion")
      characterOptions()
    }
  }
  createArray()
  return;
}

// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}

// create array of the selected characters
var whichCharacters = [];
function createArray() {
  if (lower) {
    whichCharacters = whichCharacters.concat(lowerCasedCharacters);
  }
  if (upper) {
    whichCharacters = whichCharacters.concat(upperCasedCharacters);
  }
  if (numeric) {
    whichCharacters = whichCharacters.concat(numericCharacters);
  }
  if (special) {
    whichCharacters = whichCharacters.concat(specialCharacters);
  }
  console.log(whichCharacters)
}

// Function to generate password with user input
function generatePassword() {
  var password = "";
  for (var i = 0; i < numberOfCharacters; i++) {
      password = password + getRandom(whichCharacters)};
      return password
      console.log(password)
}

generatePassword()

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

