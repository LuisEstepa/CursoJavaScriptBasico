
// Forma erronea y con hoisting
// hola();

// miNombre="Luis";

// function hola(){
//     console.log("Hola " + miNombre)
// }
 
// declarar las variables antes de llamar la función
miNombre="Luis"; 

hola()

function hola(){
  console.log("Hola " + miNombre)
}

// Declarar la funcion antes de llamarla

miNombre="Luis";
function hola(){
  console.log("Hola " + miNombre)
}

hola()


