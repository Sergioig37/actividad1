
var numeros = [];


function recibirNumeros(){
        var numero = prompt("Introduce un número");
       
        return numero;

}

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


function comprobacionNumeros(numero){

    var correcto = false;

    if(esPositivo(numero)==true&&esEntero(numero)==true){
       correcto = true;
    }
 
    return correcto;

}

function ordenCreciente(numeros){

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


for(var i=0; i<4; i++){
    var numero = recibirNumeros();
    if(comprobacionNumeros(numero)==false){
        while(comprobacionNumeros(numero)==false){
            alert("Número erróneo, pruebe otra vez");
            numero = recibirNumeros();
        }
        numeros.push(numero);
    }
    else{
        numeros.push(numero);
    }
}

if(ordenCreciente(numeros)==true){
    alert("Los números están en orden creciente");
}
else{
    alert("Los números no están en orden creciente");
}


