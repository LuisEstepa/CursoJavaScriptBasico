// Asignación 
var a = 1;  
var edad =40;
edad+ // incremento en 1
edad++ // incremento en 2
// Comparación

3 == "3"; // true ** compara valor
3 === "3"; //false ** compara valor y tipo de dato
!false; // true negacion
5>3;
5<3;
5>=3;
5<=3;
a && b; // si a y b son verdaderas
a || b; // si a o b son verdaderas


// Aritméticos

2+2;


/* En este desafío vas a recibir un parámetro secreto
 en la función solution. Debes retornar true 
 si el número secreto es mayor a 5 y false si es menor o igual.*/

solution(1);
solution(5);
solution(10);

export function solution(secreto) {
  if (secreto > 5) {
    return true;
  }
  else if (secreto <= 5) {
    return false;
  }
  else {
    console.log("no es un numero valido");
  }
}