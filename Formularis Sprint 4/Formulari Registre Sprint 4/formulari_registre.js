let boto = document.getElementById('enviar');

boto.addEventListener('click', validarInputs);

function validarInputs(){
    let formularioValido = true;

    if(validarContrasenya()===false){
        formularioValido=false;
    }

    if(validarEmail()===false){
        formularioValido=false;
    }

    if(validarContrasenya2()===false){
        formularioValido=false;
    }

    if(validarProvincia()===false){
        formularioValido=false;
    }

    let formulari= document.getElementById("formulari");

    if(formularioValido===true){
        formulari.submit();
    }else{
        alert("REVISA QUE ELS CAMPS ESTIGUIN CORRECTAMENT!!");
    }
}

function validarContrasenya() {
    let contrasenya= document.getElementById("password");
    let resultatInputContrasenya;
   
    if (contrasenya.value===""){
        let contrasenyaError=document.getElementById("password-error");
        contrasenyaError.classList.add("formulari__input-error-actiu");
        
        resultatInputContrasenya = false;
    }else{
        resultatInputContrasenya = true;
    }
    
    return resultatInputContrasenya;
}



function validarEmail (resultat){
    let email= document.getElementById("email");
    let resultatInputEmail;

    if (email.value===""){
        let emailError=document.getElementById("email-error");
        emailError.classList.add("formulari__input-error-actiu");
        
        resultatInputEmail=false;
    }else{
        resultatInputEmail=true;
    }
    return resultatInputEmail;
}

function validarContrasenya2(resultat){
    let contrasenya2= document.getElementById("password2");
    let contrasenya= document.getElementById("password");
    let resultatContrasenya2;

    if (contrasenya2.value==="" || contrasenya2.value!==contrasenya.value){
        let contrasenya2Error=document.getElementById("password2-error");
        contrasenya2Error.classList.add("formulari__input-error-actiu");
        
        resultatContrasenya2=false;
    } else{
        resultatContrasenya2=true;
    }

    return resultatContrasenya2;
}

function validarProvincia() {
    let provincia= document.getElementById("provincia");
    let resultatInputProvincia;
   
    if (provincia.value===""){
        let provinciaError=document.getElementById("provincia-error");
        provinciaError.classList.add("formulari__input-error-actiu");
        
        resultatInputProvincia = false;
    }else{
        resultatInputProvincia = true;
    }
    
    return resultatInputProvincia;
}