// access to userinput and check button element
const input = document.querySelector("#palindrome");
const check = document.querySelector("#check");

// checks whether text entered by user is palindrome or not and display result
const checkIfpalindrome = userInput =>{
    // convert userinput in lowercase and remove whitespaces if any
    userInput = userInput.toLowerCase();
    userInput = userInput.split(" ").join("");
    console.log(userInput);
    
    let lengthOfUserInput = (userInput.length);

    // break userinput in two parts
    let firstPart = userInput.substring(0, Math.floor(lengthOfUserInput/2));
    let endPart = userInput.substring(lengthOfUserInput-Math.floor(lengthOfUserInput/2));

    // reverse end part to compare with first part
    let reverseEndPart = endPart.split("").reverse().join("");

    // if first part is same as reverse of second part, displays result as palindrome otherwise not palindrome
    if (firstPart===reverseEndPart){
        document.querySelector("#result").innerHTML = "Yes! It is a palindrome.";
    }
    else{
        document.querySelector("#result").innerHTML = "No! It's not a palindrome.";
    }
}

// get userinput and call a function to check whether it is a palindrome or not
const getUserInput = () => {
    let userInput = input.value;
    if(!userInput){
        return;
    }
    checkIfpalindrome(userInput);
}

// getUserInput() called when user click check button
check.addEventListener("click", getUserInput);