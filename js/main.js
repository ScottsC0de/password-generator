// create one function to generate password
// keep it simple
// parameter needs to be users length input

var userInputLength = 0;

function generatePassword(userInputLength) {
    var userInputLength = prompt("How many characters would you like your password to be? (Enter a number between 8 - 128): ")
    // character length must be 8 - 182
    if (userInputLength < 8 || userInputLength > 128) {
        return alert("Please try again and enter a number between 8 and 128")
    };
    alert("Please follow the prompts to create your new password");
    if (userInputLength >= 8 && userInputLength > 128);
}






/* Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword); */