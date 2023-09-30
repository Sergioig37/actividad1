

function existeLogin(login) {

    var loginValido = false;

    for (var i = 0; i < usuarios.length; i++) {
        if (login === usuarios[i]) {
            loginValido = true;
            break;
        }
    }
    return loginValido;
}

function passwordCorrecto(password, login) {

    var passwdValido = false;
    var posicionLogin;

    for (var i = 0; i < usuarios.length; i++) {
        if (login === usuarios[i]) {
            posicionLogin = i;
            break;
        }
    }

    if (passwords[posicionLogin] == password) {
        passwdValido = true;
    }

    return passwdValido;
}


const usuarios = ["pepe", "paco", "juan", "benito", "manuel"];
const passwords = ["12345", "23456", "09876", "67890", "666666"];



var numeroIntentos = 0;

while (numeroIntentos <= 5) {
   
    var login = prompt("Nombre de usuario");

    var password = prompt("Contraseña");


    if (existeLogin(login) == false) {
        alert("El nombre de usuario no existe");
    }
    else if (passwordCorrecto(password, login) == false) {
        alert("El nombre de usuario no coincide con la contraseña");
    }
    else {
        alert("El nombre de usuario y la contraseña son correctos");
        break;
    }
    numeroIntentos++;
    if(numeroIntentos==5){
        alert("Has agotado todos tus intentos");
    }
    
}
