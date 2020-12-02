document.querySelector("body");

const string = document.querySelector("#string");

const regex = document.querySelector("#regex");

const sensitive = document.querySelector("#string");

const square = document.querySelector("#square");

const p = document.createElement("p");

const testing = () => {
    const text = string.value;
    let pattern = new RegExp(exp.value);

    if(sensitive.ckecked){
        pattern = new RegExp(exp.value, "i");
        
    }
    if(text.match(pattern)){
        square.style.backgroundColor = "green";
    }
    else{
        square.style.backgroundColor = "red";
    }
}

string.addEventListener("keyup", testing);
regex.addEventListener("keyup", testing);
sensitive.addEventListener("keyup", testing);

