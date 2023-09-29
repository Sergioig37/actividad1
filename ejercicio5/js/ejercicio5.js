const usuarios = ["pepe", "paco", "juan", "benito", "manuel"];
const passwords = ["12345", "23456", "09876", "67890", "666666"];



function existeLogin(usuario){
    
    var loginValido  = false;

    for(var i=0; i<usuarios.length; i++){

        if(usuario===usuarios[i]){
            loginValido = true;
            break;
        }
    }   
    if(loginValido == false){
        while(loginValido==false){
            usuario = prompt("Este usuario no existe, pruebe de nuevo");
            for(var i=0; i<usuarios.length; i++){
                if(usuario===usuarios[i]){
                    loginValido = true;
                    break;
                }
            }
    }

    }
    return loginValido;
}