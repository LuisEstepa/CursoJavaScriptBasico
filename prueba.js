//solution(["Nico", "Zule"], 0, "Santi");
solution(["Juan", "Juanita", "Daniela"], 1, "Julian");
//solution(["Nath", "Luisa", "Noru"], 2, "Cami");

function solution(estudiantes, deathCount, nuevo){
    if (deathCount == 0){
        estudiantes.push(nuevo);
        console.log(estudiantes);
    }
    else if ( deathCount > 0){
        
        while(estudiantes.length > 0){            
            estudiantes.pop();
            console.log(estudiantes);
        }    
        estudiantes.push(nuevo);      
    }  
}



