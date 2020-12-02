/*Write a regex to find out which message only contains laughing comments in English or Spanish. In Spanish laughing is expressed with jaja in english using haha or lmao (with at least one o but as many as you want, ex: lmaoooooooooo).*/

const pattern = ^((ja){2,}|lma(o)+|(ha){2,})$/igm
