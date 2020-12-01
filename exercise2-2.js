/*Write a regex pattern to validate that credit card number are well encrypted in the database. It can be encrypted with X or Y or Z and must be exactly 4 blocks of 4 chars.

Example: XXYX XYYY XXXX YYYY is valid*/

document.querySelector("body");

const userInput = document.createElement("input");
userInput.placeholder = "0000 0000 0000 0000";
userInput.type = "text";
document.body.appendChild(userInput);

const textResult = document.createElement("div");
document.body.appendChild(textResult);

userInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;
    const pattern = /^((X|Y|Z){4} ){3}(X|Y|Z){4}$/gi;

    if(inputValue.match(pattern)){
        textResult.innerHTML = "Found";
    }
    else{
        textResult.innerHTML = "Not found";
    }
})