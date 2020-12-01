const  text  =  `Emily est probablement le meilleur entraîneur que j'aie jamais eu. Je suis un fan absolu des exercices d'Emily sur les expressions régulières. 
Je ne parlerais pas aussi couramment JavaScript si je n'avais pas croisé le chemin d'Emily.`
const pattern = /Emily/gi
const newText = text.replace(pattern,"kelian")

console.log(newText)   
/*kelian est probablement le meilleur entraîneur que j'aie jamais eu. Je suis un fan absolu des exercices d'kelian sur les expressions régulières.
Je ne parlerais pas aussi couramment JavaScript si je n'avais pas croisé le chemin d'kelian.*/