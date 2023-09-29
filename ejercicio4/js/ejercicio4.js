
function validarOperador(operacion){

    var operadoresValidos = ["+", "*", "/", "-", "FIN"];
    
    var encontrado = false;
    
    for(var i=0; i<operadoresValidos.length; i++){
                if(operadoresValidos[i]===operacion){
                    encontrado = true;
                    break;
                }
    } 
    return encontrado;
}

function divisionValida( operando2){

    var esValida = true;

    if(operando2==null){
        operando2 = prompt("El divisor no puede ser null");
        esValida = true;
    }
    
    return esValida;
}


function hacerOperacion(cadena, operando1, operando2){

    var resultado;

    switch(cadena){
        case"+":
          resultado = operando1 + operando2; 
           alert(resultado);
          break;
         
        case"/": 
         resultado = operando1 / operando2; 
         alert(resultado);
         break;
        case"-":
             resultado = operando1 - operando2; 
             alert(resultado);
             break;
        case"*":
             resultado = operando1 * operando2; 
             alert(resultado);
             break;
        case"FIN":  
            alert("Finalizado"); break;
    }

}

function esEntero(numero) {

    var entero = true;

    if (parseInt(numero)) {
        return entero;
    }
    else {
        entero = false;
        return entero;
    }
}






var operando1 = parseInt(prompt("Inserta un número"));

 if(esEntero(operando1)==false){

    while(esEntero(operando1)==false){
        operando1 = parseInt(prompt("Eso no era un número válido, prueba otra vez"));
    }
 }
 

var operando2 = parseInt(prompt("Inserta otro número"));

if(esEntero(operando2)==false){
    while(esEntero(operando2)==false){
        operando2 = parseInt(prompt("Eso no era un número válido, prueba otra vez"));
    }
 }

var operacion = prompt("Inserta el signo de la operación que deseas realizar");

if(validarOperador(operacion)==false){
    while(validarOperador(operacion)==false){
        operacion = prompt("Inserta un signo de operación válido");
    }
}

hacerOperacion( operacion, operando1, operando2 );

