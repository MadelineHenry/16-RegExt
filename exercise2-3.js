/*Write 2 regex patterns to verify that blog posts starts with a greetings that could be either: */

const startingpattern = /^H(ello|ey|ej|)|Greetings{1})/ig

const endingpattern = ((Thanks|Thank you|Merci|Cheers|I am grateful)\n){2,}$/gmi