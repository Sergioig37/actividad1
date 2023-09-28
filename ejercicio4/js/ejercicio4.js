var operacion = prompt("Inserta el signo de la operación que deseas realizar");

var operando1 = prompt("Inserta un número");

var operando2 = prompt("Inserta otro número");

function validarOperador(cadena){

    var operadoresValidos = ["+", "*", "/", "-", "FIN"];
    var valido = true;
    var i=0;

    while(i<operadoresValidos||valido==false){
        if(i===cadena){
            break;
        }
        else{
            valido = false;
        }
        i++;
    }
        
    if(valido==false){
        operacion = prompt("Inserte un signo de operación válido");
    }

    return valido;
}

function divisionValida(operando1, operando2){

    var divisorNull = false;

    if(operando2==null){
        operando2 = prompt("El divisor no puede ser null");
        divisorNull = true;
    }
    
    return divisorNull;
}


function hacerOperacion(cadena, operando1, operando2){

    validarOperador(cadena);

    divisionValida(operando1, operando2);

    switch(cadena){
        case"+":
         operando1 +operando2; break;
        case"/": 
         operando1 +operando2; break;
        case"-":
             operando1 +operando2; break;
        case"*":
             operando1 +operando2; break;
        case"FIN":  
            operando1 +operando2; break;




    }

}


