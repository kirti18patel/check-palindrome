const input = document.querySelector("#palindrome");
const check = document.querySelector("#check");

const checkIfpalindrome = userInput =>{
    userInput = userInput.toLowerCase();
    userInput = userInput.split(" ").join("");
    console.log(userInput);
    
    let lengthOfUserInput = (userInput.length);
    let firstPart = userInput.substring(0, Math.floor(lengthOfUserInput/2));
    let endPart = userInput.substring(lengthOfUserInput-Math.floor(lengthOfUserInput/2));

    let reverseEndPart = endPart.split("").reverse().join("");

    if (firstPart===reverseEndPart){
        document.querySelector("#result").innerHTML = "Yes! It is a palindrome.";
    }
    else{
        document.querySelector("#result").innerHTML = "No! It's not a palindrome.";
    }
}

const getUserInput = () => {
    let userInput = input.value;
    if(!userInput){
        checkIfpalindrome(userInput);
    }
}

check.addEventListener("click", getUserInput);