var estudiantes = ["Maria", "Pedro", "Angie", "Daniel"];

function saludarEstudiantes(estudiante){
    console.log(`Hola estudiante ${estudiante}`);
}

//Recorrer un array opción 1
for(var i=0; i < estudiantes.length; i++){
    saludarEstudiantes(estudiantes[i]);
}

//Recorrer un array opción 2
for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
}