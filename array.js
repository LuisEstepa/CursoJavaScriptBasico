var frutas = [];
frutas = ["Manzana", "platano", "Cereza", "Fresa"];

console.log(frutas); // ver el contenido del arreglo
console.log(frutas[1]); //ver el contenido de una posición

var nuevoAlFinal = frutas.push("Uvas"); // agregar un elemento al final del array
var eliminaUltimo = frutas.pop("Uvas"); // elimina el ultimo elemento del array
var nuevoAlprincipio = frutas.unshift("Naranjas"); // agregar un elemento al inicio del array
var eliminaAlprincipio = frutas.shift("Naranjas"); // elimina un elemento al inicio del array
var posicion = frutas.indexOf("platano"); // trae la posicion del elemento


// Playground: detecta el elemento impostor de un array

/*
En eeste desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.

Input

solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])

Output

true
false
*/
solution(["Huevo", "Gallina", "Vaca"]);
solution([1, "Gallina", "Vaca"]);

var a = "";
export function solution(arraySecreto) {
  if (typeof arraySecreto[0] == typeof a) {
    return true;
  }
  else {
    return false;
  }
}

//_____________________________________________

solution(["Nico", "Zule"], 0, "Santi");
//solution(["Juan", "Juanita", "Daniela"], 1, "Julian")
//solution(["Nath", "Luisa", "Noru"], 2, "Cami")

