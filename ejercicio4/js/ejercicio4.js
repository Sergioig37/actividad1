
function validarOperador(){

    var operacion = prompt("Inserta el signo de la operación que deseas realizar");

    var operadoresValidos = ["+", "*", "/", "-", "FIN"];
    
    var encontrado = false;
    
    for(var i=0; i<operadoresValidos.length; i++){
                if(operadoresValidos[i]===operacion){
                    encontrado = true;
                    break;
                }
    }
        
    if(encontrado ===false){
       
        while(encontrado===false){
            operacion = prompt("Inserta un signo de  operación válido");
            for(var i=0; i<operadoresValidos.length; i++){
                if(operadoresValidos[i]===operacion){
                    encontrado = true;
                    break;
               }
            }
        }  
    }
    return operacion;
}

function divisionValida( ){

    var divisorNull = false;

    if(operando2==null){
        operando2 = prompt("El divisor no puede ser null");
        divisorNull = true;
    }
    
    return operando2;
}


function hacerOperacion(cadena, operando1, operando2){


    if(cadena==="/"){
        operando2 = divisionValida(operando1, operando2);
    }
    

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

    if (parseInt(numero)) {
        return numero;
    }
    else {

        while(!parseInt(numero)){
            numero = parseInt(prompt("Eso no era un número prueba otra vez"));
        }
        return numero;
    }
}



var operando1 = parseInt(prompt("Inserta un número"));
 operando1 = esEntero(operando1);

var operando2 = parseInt(prompt("Inserta otro número"));
operando2 = esEntero(operando2);

hacerOperacion( validarOperador(), operando1, operando2 );

