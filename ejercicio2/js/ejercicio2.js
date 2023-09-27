var numero;
var numeros = [];

function esEntero(cadena) {

    var esEntero = true;

    if (parseInt(cadena)) {
        return esEntero;
    }
    else {
        esEntero = false;
        return esEntero;
    }
}

function esPositivo(numero) {

    var esPositivo = true;

    if (numero > 0) {
        return esPositivo;
    }
    else {
        esPositivo = false;
        return esPositivo;
    }
}

function comprobacionNumeros(){

    for(var i=1;i<=4;i++){

    numero = prompt("Introduce un número");

    if(esPositivo(numero)==true&&esEntero(numero)==true){
        numeros.push(numero);
    }
    else{
        numero = prompt("Número erróneo, prueba otra vez");
        while((esPositivo(numero)==false)||(esEntero(numero)==false)){
            numero = prompt("Inténtalo de nuevo");
        }
        numeros.push(numero);
    }
 }
 return numeros;
}

function ordenCreciente(numeros){

    numeros = (numeros);
    var enOrden = true;
    var min = numeros[0];
   

    for(var i=0; i<numeros.length; i++){

        if(numeros[i+1]<min){
            enOrden = false;
            break;
        }
        else{
            min = numeros[i+1];
        }
    }

    return enOrden;
}

alert(ordenCreciente(comprobacionNumeros()));


