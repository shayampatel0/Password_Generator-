// Assignment Code
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
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}
function generatePassword() {
  //Ask the User's input for charater length--further clarify password must between 8-128 characters
  var password_length;
  var isNumeric;
  var isSpecial;
  var isUppercase;
  var isLowercase;
  //After getting input, validate the choices that are not blank 
  password_length = prompt("How long is your desired password? Must between 8-128 characters!");
  isNumeric = confirm("Would you like to include numbers?");
  isSpecial = confirm("Would you like to include special characters?");
  isUppercase = confirm("Would you like to include uppercase?");
  isLowercase = confirm("Would you like to include lowercase?");

  var isValid = validateUser(password_length, isNumeric, isSpecial, isUppercase, isLowercase);
  console.log(isValid);
  if (!isValid){
    alert("Please try again!")
    return;
  }
 const pass = passwordMaker(password_length, isNumeric, isSpecial, isUppercase, isLowercase);
 console.log('pass', pass)
 return pass;
}

function validateUser(password_length, isNumeric, isSpecial, isUppercase, isLowercase) {
  var parsedLength = parseInt(password_length);
  console.log(parsedLength);
  if (parsedLength < 8 || parsedLength > 128 || parsedLength === NaN) {
    alert("Please enter a number from 8-128!");
    console.log("Triggered if");
    return false;
  }
  var isUserchoices = [isNumeric, isSpecial, isUppercase, isLowercase].indexOf(true);
  if (isUserchoices < 0) {
    alert("Please select atleast one option for password generation!");
    return false;
  }
  return true;
}

function passwordMaker (password_length, isNumeric, isSpecial, isUppercase, isLowercase){
  var currentCharacter;
  var currentPassword = [];
  var possibleCharacters =[];

  if (isNumeric){
    possibleCharacters= possibleCharacters.concat(numericCharacters);
    console.log("num arr", numericCharacters)
    console.log("Nums in Poss ARr", possibleCharacters)
  }
  if (isSpecial){
    possibleCharacters= possibleCharacters.concat(specialCharacters);
  }
  if (isUppercase){
    possibleCharacters= possibleCharacters.concat(upperCasedCharacters);
  }
  if(isLowercase){
    possibleCharacters= possibleCharacters.concat(lowerCasedCharacters);
  }
  console.log("possibleChar", possibleCharacters)
  for(let i=0; i<password_length; i++){
    let arrayIndex = Math.floor(Math.random()* Math.floor(password_length));
    console.log("arraay Index,",arrayIndex)

    currentPassword.push(possibleCharacters[arrayIndex]);

  }
  console.log("currentPass", currentPassword);
  return currentPassword.join("");
}
// // For loop to iterate over the password length from the options object, selecting random indices from the array of possible characters and concatenating those characters into the result variable
// for (var i = 0; i < options.length; i++) {
//   var possibleCharacter = getRandom(possibleCharacters);

//   result.push(possibleCharacter);
// }

// // Mix in at least one of each guaranteed character in the result
// for (var i = 0; i < guaranteedCharacters.length; i++) {
//   result[i] = guaranteedCharacters[i];
// }

// // Transform the result into a string and pass into writePassword
// return result.join('');
// }

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);