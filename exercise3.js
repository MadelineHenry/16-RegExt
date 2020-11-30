document.querySelector("body");

const text = `In ancient Egypt a god was an entity with the head of an animal and a human body. An egyptian god is not to be mistaken with the God that is worshipped in churches and mosque around the globe these days! God is not a god!`
const wordSplit = text.split(" ");
String(wordSplit).match

console.log(wordSplit)

const returnArray =  document.createElement("div");
returnArray.innerHTML = "Here is your search result";
document.body.appendChild(returnArray);

const userInput = document.createElement("input");
userInput.type = "text";
userInput.placeholder = "Search here";
document.body.appendChild(userInput);

document.body.addEventListener("keyup", (e) => {
    const inputValue = e.target.value
    const pattern = new RegExp(inputValue, "gi");

    if (wordSplit.match(pattern)){
        returnArray = e.target.value ;
    }
})


/*
const inputText = document.createElement("input");
inputText.type = "text";
placeholder = "Search here";
document.body.appendChild(inputText);

document.body.addEventListener("keyup", (e) => {
    if (e.code === "Enter"){
        returnArray = e.target.value 
        if (wordSplit.match(pattern)){
         const pattern = new RegExp(ruturnArray, "gi")   
        }
    }
})*/