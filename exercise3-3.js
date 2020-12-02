/*Create a function (multiple patterns) to validate a password. The password should*/

document.querySelector("body");

const userInput = document.createElement("input");
userInput.placeholder = "Valid your password";
userInput.type = "text";
document.body.appendChild(userInput);

const textResult = document.createElement("div");
document.body.appendChild(textResult);

userInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;
    
    
    const pattern = /^(([0-9]){4} ){3}([0-9]){4}$/i

    if(inputValue.match(pattern)){
        textResult.innerHTML = "Your password is correct!";
    }
    else{
        textResult.innerHTML = "Your password is not correct! Try an other one!";
    }
})