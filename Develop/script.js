// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input



function writePassword() {
// 1. prompted for password criteria
//    a. Password length would be 8 < 128 characters 
var length = window.parseInt(prompt("Enter the intended length of your password.!Must be between 8 to 128 characters long!"));
while (length <= 7 || length > 128){
  var length = window.prompt("Please choose a length between 8 to 128 characters")

}

//    b. Lowercase, uppercase, numbers, symbols

var lowercase = window.prompt("Would you like lowercases in your password? Type ('Yes' or 'No')")
while (lowercase != "Yes" && lowercase != "No" ) {
  var lowercase = window.prompt("Please type 'Yes or 'No' if you do or not want lowercase")
}

var uppercase = window.prompt("Would you like uppercases in your password? Type ('Yes' or 'No')")
while (uppercase != "Yes" && uppercase != "No" ) {
  var uppercase = window.prompt("Please type 'Yes or 'No' if you do or not want uppercase")
}

var numbers = window.prompt("Would you like numbers in your password? Type ('Yes' or 'No')")
while (numbers != "Yes" && numbers != "No" ) {
  var numbers = window.prompt("Please type 'Yes or 'No' if you do or not want numbers")
}

var symbols = window.prompt("Would you like symbols in your password? Type ('Yes' or 'No')")
while (symbols != "Yes" && symbols != "No" ) {
  var symbols = window.prompt("Please type 'Yes or 'No' if you do or not want symbols")
}
 

}


var password = generatePassword(length, lowercase, uppercase, numbers, symbols);
var passwordText = document.querySelector("#password");

passwordText.value = password;

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(length, lowercase, uppercase, numbers, symbols) {
 // 4. Display password to the page 
  var password = ""
 
// 2. Validate the input

// 3. Generate password based on the input 


}


