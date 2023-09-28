var numero = parseInt(prompt("Introduzca un número:"));

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

function comprobarNumero(numero){

    if((esEntero(numero)==false||numero>100||numero<1)){
        while(esEntero(numero)==false||numero>100||numero<1){
            numero = parseInt(prompt("Introduzca un número válido:"));
        }
    }
    return numero;
}

function esDivisible(numero){

    var numerosDivisibles = [];
    var numerosNoDivisibles = [];

    for(var i=0; i<Divisores.length; i++){

        var resultado = numero%Divisores[i];
        if(resultado===0){
            numerosDivisibles.push(Divisores[i]);
        }
        else{
            numerosNoDivisibles.push(Divisores[i]);
        }
    }

    if(numerosDivisibles.length===0){
        alert(numero + " no es divisible entre ningúno de estos números:  " + numerosNoDivisibles);
    }
    else if(numerosDivisibles.length===4){
        alert(numero + " es divisible entre todos estos números: " + numerosDivisibles);
    }
    else{
        alert(numero + " es divisible entre " + numerosDivisibles);
    }
    
}

esDivisible(comprobarNumero(numero));