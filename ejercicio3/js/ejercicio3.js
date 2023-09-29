//funciones
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

    var correcto = false;

    if((esEntero(numero)==true||numero<=100||numero>=1)){
        correcto = true;
    }

    return correcto;
}

function esDivisible(dividendo, divisor){

    var divisible = false;

    if(dividendo%divisor===0){
        divisible = true;
    }

    return divisible;
    
}

//código
var numero = parseInt(prompt("Introduzca un número:"));

const Divisores = [2, 3, 5, 10];
var numerosDivisores = [];

if(comprobarNumero(numero)==false){
    alert("Numero no válido, introduzca otro número");
    while(esEntero(numero)==false||numero>100||numero<1){
        numero = parseInt(prompt("Introduzca un número válido:"));
    }
}

for(var i=0;i<Divisores.length; i++){
    if(esDivisible(numero, Divisores[i])==true){
        numerosDivisores.push(Divisores[i]);
    }
}

if(numerosDivisores.length>0){
    alert(numero +" es divisible entre " + numerosDivisores);
}
else{
    alert(numero +" no es divisible entre ningúno de los números");
}
