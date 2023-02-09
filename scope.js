var miNombre = "Luis"; // Scope Global

function nombreCompleto(){
    var miApellido = "Estepa"; // Scope Local
    console.log(miNombre + " " + miApellido);  // Scope Local   
}

nombreCompleto()


