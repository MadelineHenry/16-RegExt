/*Validate a credit card number. A credit card number is in the form of 4 group of 4 numbers separated by a space.*/

document.querySelector("body");

const userInput = document.createElement("input");
userInput.placeholder = "credit card number";
userInput.type = "text";
document.body.appendChild(userInput);

const validate = document.createElement("div");
document.body.appendChild(validate);

enterPassword.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;
    const numbPattern = /(\d){1,}/;
    const majPattern = /[a-z]{1,}/;
    const minPattern = /[A-Z]{1,}/;
    const specialPattern = /(+|?|$|^){1,}/;
    const caraNumbPattern = /^\S){8,18}/;

    if ((inputValue.match(numbPattern)) && (inputValue.match(majPattern)) && (inputValue.match(minPattern)) && (inputValue.match(specialPattern)) && (inputValue.match(caraNumbPattern)){
        validate.innerHTML = "Your password is accepted!";
        }
    else{
        validate.innerHTML = "Your password is not accepted! Try an other one!";
        }
})