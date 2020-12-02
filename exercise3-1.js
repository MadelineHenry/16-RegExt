/*Create a regular expression that validates if the sentence is a question. A question starts with : what, why, how, when, who */

document.querySelector("body");

const userInput = document.createElement("input");
userInput.placeholder = "Check if it is a question";
userInput.type = "text";
document.body.appendChild(userInput);

const textResult = document.createElement("div");
document.body.appendChild(textResult);

userInput.addEventListener("keyup", (e) => {
    const inputValue = e.target.value;
    const pattern = /^(What|Why|How|When|Who)( [a-zA-Z]+){2,} ?\?$/i;

    if(inputValue.match(pattern)){
        textResult.innerHTML = "Yes it is a question!";
    }
    else{
        textResult.innerHTML = "It is not a question! Try an other question!";
    }
})