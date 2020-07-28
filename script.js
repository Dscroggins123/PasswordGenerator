// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
 
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  var numbers = [0,1,2,3,4,5,6,7,8,9]
  var symbols =["!","@","#","$","%","^","&","*","(",")","-"]
  var userPassword =[];
  var passwordPrompt = prompt("How many characters would you like your password to be? min: 8 Max :128")
  passwordLength = parseInt(passwordPrompt);  
  if (passwordLength < 8 || passwordLength > 128){
    
    alert("Try Again");
    }

  var addUpperCase = confirm("Would you like Upper Case letters in your password?")
  var addLowerCase = confirm("Would you like lower case letters in your password?")
  var addNumbers = confirm("Would you like numbers in your password ?")
  var addSymbols = confirm("Would you like special symbols in your password?")

  if (addUpperCase === true) {
  //  userPassword.push(upperCase);
  //  console.log(userPassword)
  }
   if (addLowerCase === true) {
    // userPassword.push(lowerCase)
    // console.log(userPassword)
  }
  if (addNumbers === true) {
    // userPassword.push(numbers)
    // console.log(userPassword)
    userPassword = userPassword.concat(numbers)
    console.log(userPassword)
    console.log(userPassword.length)
  }
  if (addSymbols === true){
    // userPassword.push(symbols)
    userPassword = userPassword.concat(symbols)
     console.log(userPassword)
    console.log(userPassword.length)
  }
  
  

  
  

  
  


};
