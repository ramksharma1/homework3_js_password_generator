// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input

function generatePassword() {
  // 1. prompted for password criteria
  //    a. Password length would be 8 < 128 characters 
  var length = window.parseInt(prompt("Enter the intended length of your password.!Must be between 8 to 128 characters long!"))
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
  var password = writePassword(length, lowercase, uppercase, numbers, symbols);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);


function writePassword(length, lowercase, uppercase, numbers, symbols) { 
  // 4. Display password to the page 
  var password = ""
  
 
  // 2. Validate the input
  if (lowercase == "No" && uppercase == "No" && numbers == "No" && symbols == "No") {       //Results if only 0 "YES" was chosen; needs to choose atleast one criteria
    choices = alert("You need to choose atleast one criteria");

  }
  else if (lowercase == "Yes" && uppercase == "No" && numbers == "No" && symbols == "No"){  // Results if only 1 "YES" was chosen
    var characters = 'abcdefghijklmnopqrstuvwxyz'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "No" && uppercase == "Yes" && numbers == "No" && symbols == "No"){  // Results if only 1 "YES" was chosen
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "No" && uppercase == "No" && numbers == "Yes" && symbols == "No"){  // Results if only 1 "YES" was chosen
    var characters = '1234567890'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "No" && uppercase == "No" && numbers == "No" && symbols == "Yes"){  // Results if only 1 "YES" was chosen
    var characters = '"!#$%&()*+,-./:;<=>?@^_`{|}~'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "Yes" && uppercase == "Yes" && numbers == "No" && symbols == "No"){  //Results if only 2 "YES" was chosen
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "No" && uppercase == "No" && numbers == "Yes" && symbols == "Yes"){  //Results if only 2 "YES" was chosen
    var characters = '"!#$%&()*+,-./:;<=>?@^_`{|}~1234567890'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  } 
  else if (lowercase == "Yes" && uppercase == "No" && numbers == "No" && symbols == "Yes"){  //Results if only 2 "YES" was chosen
    var characters = 'abcdefghijklmnopqrstuvwxyz"!#$%&()*+,-./:;<=>?@^_`{|}~'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "No" && uppercase == "Yes" && numbers == "Yes" && symbols == "No"){  //Results if only 2 "YES" was chosen
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "Yes" && uppercase == "No" && numbers == "Yes" && symbols == "No"){  //Results if only 2 "YES" was chosen
    var characters = 'abcdefghijklmnopqrstuvwxyz1234567890'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "No" && uppercase == "Yes" && numbers == "No" && symbols == "Yes"){  //Results if only 2 "YES" was chosen
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ"!#$%&()*+,-./:;<=>?@^_`{|}~'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "No" && uppercase == "Yes" && numbers == "Yes" && symbols == "Yes"){ //Results if only 3 "YES" was chosen
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ"!#$%&()*+,-./:;<=>?@^_`{|}~1234567890'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "Yes" && uppercase == "No" && numbers == "Yes" && symbols == "Yes"){ //Results if only 3 "YES" was chosen
    var characters = 'abcdefghijklmnopqrstuvwxyz"!#$%&()*+,-./:;<=>?@^_`{|}~1234567890'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "Yes" && uppercase == "Yes" && numbers == "No" && symbols == "Yes"){ //Results if only 3 "YES" was chosen
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"!#$%&()*+,-./:;<=>?@^_`{|}~'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "Yes" && uppercase == "Yes" && numbers == "Yes" && symbols == "No"){ //Results if only 3 "YES" was chosen
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
  else if (lowercase == "Yes" && uppercase == "Yes" && numbers == "Yes" && symbols == "Yes"){//Results if only 4 "YES" was chosen
    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"!#$%&()*+,-./:;<=>?@^_`{|}~1234567890'

    for ( i = 0; i < length; i++){
      password += characters[Math.floor(Math.random() * characters.length)]

    }
  return password
  }
}
