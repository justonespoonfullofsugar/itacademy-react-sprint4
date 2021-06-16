let boto = document.getElementById('cercar');

boto.addEventListener('click', validarInputs);

function validarInputs(){
    let formulariValid = true;

    if(validarParaula()===false){
        formulariValid=false;
    }

    let formulari= document.getElementById("formulari");

    if(formulariValid===true){
        formulari.submit();
    }else{
        alert("REVISA QUE ELS CAMPS ESTIGUIN CORRECTAMENT!!");
    }
}


function validarParaula (){
    let paraula= document.getElementById("paraula");
    let resultatInputParaula;

    if (paraula.value.length < 3){
        let paraulaError=document.getElementById("paraula-error");
        paraulaError.classList.add("formulari__input-error-actiu");
        
        resultatInputParaula=false;
    }else{
        resultatInputParaula=true;
    }
    return resultatInputParaula;
}
