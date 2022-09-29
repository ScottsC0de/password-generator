// create one function to generate password
// keep it simple
// parameter needs to be users length input

var userInputLength = 0;

function generatePassword(userInputLength) {
    var userInputLength = prompt("How many characters would you like your new password to be? (Enter a number between 8 - 128): ")
    // character length must be 8 - 182
    if (userInputLength < 8 || userInputLength > 128) {
        return alert("Please try again and enter a number between 8 and 128")
    };
    alert("Please follow the prompts to create your new password");
    if (userInputLength >= 8 && userInputLength <= 128);
    var userUpperCaseInput = prompt("Include uppercase letters? (Enter yes or no): ");
    if (userUpperCaseInput === "yes") {
        var upperCaseValues = "";
        var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var upperCaseLength = uppercaseLetters.length;
        for (var i = 0; i < userInputLength; i++) {
            // charAt() returns the character at the specified index in a string
            // random values from uppercase string multiplied by user's length input
            upperCaseValues += uppercaseLetters.charAt(Math.floor(Math.random() * upperCaseLength));
        }
    } else if (userUpperCaseInput === "no") {
        upperCaseValues = "";
    };

    var userLowerCaseInput = prompt("Include lowercase letters? (Enter yes or no): ")
    if (userLowerCaseInput === "yes") {
        var lowerCaseValues = "";
        var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
        var lowerCaseLength = lowercaseLetters.length;
        for (var i = 0; i < userInputLength; i++) {
            lowerCaseValues += lowercaseLetters.charAt(Math.floor(Math.random * lowerCaseLength));
        }
    } else if (userLowerCaseInput === "no") {
        lowerCaseValues = "";
    };
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