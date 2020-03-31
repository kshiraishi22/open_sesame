// Variables
var lowerChar = "abcdefghijklmnopqrstuvwxyz"
var upperChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var charNum = "0123456789";
var specialChar = "!#$%&'()*+,-./:;<=>?@^`|~";

// Calling All Needed Elements from DOM
// var lengthEl = document.getElementById("length");
var lowerCharEl = document.getElementById("lowerCase");
var upperCharEl = document.getElementById("upperCase");
var numbersEl = document.getElementById("numbers");
var specialCharEl = document.getElementById("specialCharacters");
var passwordEl = document.getElementById("password");
var generateBtn = document.getElementById("generate");
var slider = document.getElementById("slider");
var passLength = document.getElementById("passLength");
var copyBtn = document.getElementById("copy");

// Syncing Password Length Input and Slider
slider.addEventListener("input", syncInputSlider);
passLength.addEventListener("input", syncInputSlider);

function syncInputSlider (event) {
  var value = event.target.value
  slider.value = value
  passLength.value = value
}

var handleSubmit = function(event) {
  event.preventDefault();
  var charInventory = "";
  var numOfChars = passLength.value;

  if(lowerCharEl.checked === true) {
    charInventory += lowerChar;
    // console.log(charInventory);
  }

  if(upperCharEl.checked === true) {
    charInventory += upperChar;
    // console.log(charInventory);
  }

  if(numbersEl.checked === true) {
    charInventory += charNum;
    // console.log(charInventory);
  }

  if(specialCharEl.checked === true) {
    charInventory += specialChar;
    // console.log(charInventory);
  }

  var newPass = generatePassword(numOfChars, charInventory);
  // console.log(newPass);

  // Adding generated password into DOM
  passwordEl.value = newPass;
  passwordEl.setAttribute("value", newPass)
}

generateBtn.addEventListener("click", handleSubmit);

function generatePassword(length, charInventory) {
  var newPassword = "";

  for(var i = 0; i < length; i++){
  var randomNum = Math.floor(Math.random() * charInventory.length);
  // console.log(randomNum)
  newPassword += charInventory.charAt(randomNum)
}
return newPassword;
}

function copyPassword() {
  document.getElementById("password").select();
  document.execCommand("Copy");
  alert("Password has been copied to Clipboard!");
}

copyBtn.addEventListener("click", copyPassword);

