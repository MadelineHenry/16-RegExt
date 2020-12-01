/*In the following sentence replace every occurence of the word clef/clé (including plurals) by the emoji 🔑 with a single pattern. */

document.querySelector("body");
const divText = document.createElement("div");
document.body.appendChild(divText);

const  text  =  `In french the word "key" used to be written "clef", but now it is written with an accent : "clé".
You might find medieval stories, such as the "clefs sanglantes de barbe bleue" and more recents ones "les clés du mystère"`

const pattern = /cl(é|ef)(s)?/gi;
const newText = text.replace(pattern, '&#128273');

divText.innerHTML = newText;

console.log(newText);
