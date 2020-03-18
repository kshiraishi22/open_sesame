// Variables
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@^`|~";

// Calling All Elements from DOM
var 

// Generate a random number between 0 and 9
  // var randNum = Math.floor(Math.random() * 10) + 1;
  // console.log(randNum)

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lengthInput = document.querySelector("#length");

generateBtn.addEventListener("click", function() {
  if (lengthInput < 8) {
    // alert("The password will be too short. Try again.")
  };
  
  if (lengthInput > 128) {
    // alert("The password will be too long. Try again.")
  };
});

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword) 

