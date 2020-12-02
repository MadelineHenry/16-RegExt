/*Validate a credit card number. A credit card number is in the form of 4 group of 4 numbers separated by a space.*/

document.querySelector("body");

const userInput = document.createElement("input");
userInput.placeholder = "credit card number";
userInput.type = "text";
document.body.appendChild(userInput);

const textResult = document.createElement("div");
document.body.appendChild(textResult);

userInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;
    const pattern = /^(([0-9]){4} ){3}([0-9]){4}$/i

    if(inputValue.match(pattern)){
        textResult.innerHTML = "Your credit card number is accepted!";
    }
    else{
        textResult.innerHTML = "Your credit card number is not accepted! Try an other one!";
    }
})