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

var numberOfCharacters = 10;
var special = false;
var numeric = false;
var lower = false;
var upper = false;
var choices = special.concat(numeric, lower, upper)


// run function if button is pressed
var generateBurron = document.querySelector("#generate");
generateButton.addEventListener("click", function () {
  getPasswordOptions();
});


// Function to prompt user for password options
function getPasswordOptions() {
  numberOfCharacters = prompt("How many characters would you like in your password?");
  if (isNaN(numberOfCharacters)) {
    alert("Please enter a valid number between 10 and 64")
    getPasswordOptions()}
    else if (numberOfCharacters < 10) {
      alert("Password length must be at least 10 characters")
      getPasswordOptions()}
    else if (numberOfCharacters > 65) {
      alert("Password length can be no more than 64 characters")
      getPasswordOptions()
    }
    else {characterOptions()}
    function characterOptions() {
    lower = confirm("Would you like to include lowercase characters in your password?")
    upper = confirm("Would you like to include uppercase characters in your password?")
    numeric = confirm("Would you like to include numerical characters in your password?")
    special = confirm("Would you like to include special characters in your password?")

    if (!lower && !upper && !numeric && !special) {
      alert("Please select at least one type of character for inclusion")
      characterOptions()
    }}
  }
  







// Function for getting a random element from an array
function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);
  const item = arr[randomIndex];
  return item;
}



// Function to generate password with user input
function generatePassword() {
  for (var i = 0; i <= length; i++) {
    var randomNumber = Math.floor(Math.random() * length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }


}

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