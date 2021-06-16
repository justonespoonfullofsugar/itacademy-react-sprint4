let boto = document.getElementById('enviar');

boto.addEventListener('click', validarInputs);

function validarInputs(){
    let formulariValid= true;

    if(validarContrasenya()===false){
        formulariValid=false;
    }

    if(validarEmail()===false){
        formulariValid=false;
    }

    let formulari= document.getElementById("formulari");

    if(formulariValid===true){
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



function validarEmail(){
    let email= document.getElementById("email");
    let resultatInputEmail;

    if(email.value===""){
        
        resultatInputEmail=true;

    }else{
        let emailError=document.getElementById("email-error");
        emailError.classList.add("formulari__input-error-actiu");
        
        resultatInputEmail=false;
    }

    return resultatInputEmail;
}