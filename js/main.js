// create one function to generate password
// keep it simple
// parameter needs to be users length input

var userInputLength = 0;

function generatePassword(userInputLength) {
    var userInputLength = prompt("How many characters would you like your new password to be? (Enter a number between 8 - 128): ")
    // character length must be 8 - 128
    if (userInputLength < 8 || userInputLength > 128) {
        return alert("Please try again and enter a number between 8 and 128")
    };

    alert("Please follow the prompts to create your new password!");

    if (userInputLength >= 8 && userInputLength <= 128);
    var userUpperCaseInput = prompt("Include uppercase letters? (Please enter yes or no): ");
    // user can input upper or lowercase answer
    userUpperCaseInput = userUpperCaseInput.toLowerCase();
    if (userUpperCaseInput === "yes") {
        var upperCaseValues = "";
        var uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var upperCaseLength = uppercaseLetters.length;
        for (var i = 0; i < userInputLength; i++) {
            // charAt() returns a character at specified index in a string
            // random values from uppercase string multiplied by user's length input
            upperCaseValues += uppercaseLetters.charAt(Math.floor(Math.random() * upperCaseLength));
        }
    } else if (userUpperCaseInput === "no") {
        userUpperCaseInput = userUpperCaseInput.toLowerCase();
        upperCaseValues = "";
        // if user decides to hit cancel or misspells yes or no
    } else {
        alert("Please try again and enter yes or no")
        return
    };

    // apply same alogorithm for all password criteria prompts
    var userLowerCaseInput = prompt("Include lowercase letters? (Please enter yes or no): ")
    userLowerCaseInput = userLowerCaseInput.toLowerCase();
    if (userLowerCaseInput === "yes") {
        var lowerCaseValues = "";
        var lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
        var lowerCaseLength = lowercaseLetters.length;
        for (var i = 0; i < userInputLength; i++) {
            lowerCaseValues += lowercaseLetters.charAt(Math.floor(Math.random() * lowerCaseLength));
        }
    } else if (userLowerCaseInput === "no") {
        userLowerCaseInput = userLowerCaseInput.toLowerCase();
        lowerCaseValues = "";
    } else {
        alert("Please try again and enter yes or no")
        return
    };

    var userNumberInput = prompt("Include numbers? (Please yes or no): ")
    userNumberInput = userNumberInput.toLowerCase();
    if (userNumberInput === "yes") {
        var numberValues = "";
        var numbers = "0123456789";
        var numberLength = numbers.length;
        for (var i = 0; i < userInputLength; i++) {
            numberValues += numbers.charAt(Math.floor(Math.random() * numberLength));
        }
    } else if (userNumberInput === "no") {
        userNumberInput = userNumberInput.toLowerCase();
        numberValues = "";
    } else {
        alert("Please try again and enter yes or no")
        return
    };

    var userSymbolInput = prompt("Include special characters? (Please yes or no): ")
    userSymbolInput = userSymbolInput.toLowerCase();
    if (userSymbolInput === "yes") {
        var symbolValues = "";
        // The OWASP® Foundation use of special characters in passwords
        var symbols = "!@#$%^&*()+,-./:;<=>?[{}]~`|_";
        var symbolLength = symbols.length;
        for (var i = 0; i < userInputLength; i++) {
            symbolValues += symbols.charAt(Math.floor(Math.random() * symbolLength));
        }
    } else if (userSymbolInput === "no") {
        userSymbolInput = userSymbolInput.toLowerCase();
        symbolValues = "";
    } else {
        alert("Please try again and enter yes or no")
        return
    };

    // apply same algorithm to final password, combining all user inputs
    var finalPassword = "";
    var finalPasswordValues = upperCaseValues + lowerCaseValues + numberValues + symbolValues;
    var finalPasswordLength = finalPasswordValues.length;
    for (var i = 0; i < userInputLength; i++) {
        finalPassword += finalPasswordValues.charAt(Math.floor(Math.random() * finalPasswordLength));
    }

    document.getElementById("password").innerHTML = finalPassword;

};

