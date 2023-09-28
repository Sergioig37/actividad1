var numero = prompt("Introduzca un número:");

const Maximo = 100;
const Minimo = 1;
const Divisores = [2, 3, 5, 10];

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



function comprobarNumero(numero){
    if(esPositivo(numero)!=true&&esEntero(numero)!=true){
        while(esPositivo(numero)!=true&&esEntero(numero)!=true){
            numero = prompt("Introduzca un número válido:");
        }
    }
    return numero;

}

function esDivisible(numero){

    

}