var numero = prompt("Introduce un numero");

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

function sumatorio(numero) {
    
    var resultado = 0;
    for (let i = 0; i <= numero; i++) {
        resultado += i;
    }   
    alert(resultado);
}

if ((esPositivo(numero) == false) || (esEntero(numero) == false)) {
    var numero = prompt("El número introducido no es válido, prueba de nuevo");
    while ((esPositivo(numero) == false) || (esEntero(numero) == false)) {
        var numero = prompt("El número introducido no es válido, prueba de nuevo");
    }
    sumatorio(numero);
}
else{
    sumatorio(numero);
}





