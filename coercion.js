// Coercion Implicita 
var a = 3 + "4";
console.log("Resultado "+ a);
typeof a //string

//-----------------------------*-------------------
var a = 3 * "4";
console.log("Resultado "+ a);
typeof a // number

// Coercion Explicita

var a = 3 * "4";
console.log("Resultado "+ a);
var resultado = String(a);
typeof resultado // String
