var numero;
var numeros = [];

for(var i=1; i<=4; i++){

    numero = (prompt("Introduce un número"));

    if((parseInt)(numero)&&(numero>0)){

        while((parseInt)(numero)&&(numero<=0)){

        }
    }
    else{
        alert("Número introducido erróneo, prueba otra vez");

        while(!(parseInt)(numero)&&!(numero<=0)){
            
             numero = prompt("Introduce un número");
        }
       
    }

}

