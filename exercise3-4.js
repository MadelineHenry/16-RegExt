/*The following picture is a mockup a future project called BeKnit, a 7 months bootcamp to become a professional at knitting. You have to create the frontend of their registration form.*/

const firstName = document.querySelector("#inputName");
const email = document.querySelector("#inputEmail");
const Password = document.querySelector("#inputPassword");

const NamePattern = /^[a-zA-Z-]+/
const emailPattern = /^[a-z0-9]+(\W-]+)?@{1}[a-z0-9]+\.{1}[a-z]+$/i
const PasswordPattern = () => {
    const inputValue = e.target.value;
    const numbPattern = /(\d)+/;
    const majPattern = /[a-z]+/;
    const minPattern = /[A-Z]+/;
    const specialPattern = /(\W_)/;
    const caraNumbPattern = /(?=.{8,18})/;
    if ((passwordPattern.match(numbPattern)) && (inputValue.match(majPattern)) && (inputValue.match(minPattern)) && (inputValue.match(specialPattern)) && (inputValue.match(caraNumbPattern))){
        return true;
        }
    else{
        return false;
        }
    }

firstName.addEventListener("change", (e) => {
    const inputValue = e.target.value;
    if{
        
    }


/*const nameInput = document.createElement("input");
nameInput.type = "text";
userField.appendChild(nameInput);



userInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;
    
    const pattern = //i

    if(inputValue.match(pattern)){
        textResult.innerHTML = "Your password is correct!";
    }
    else{
        textResult.innerHTML = "Your password is not correct! Try an other one!";
    }
})*/