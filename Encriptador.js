const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



function botonEncriptar(){
    const textoEncriptado = encriptador(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    document.getElementById("copiar").disabled = false;
    

    

}


function encriptador(stringEncriptado){
    let matrisCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringEncriptado = stringEncriptado.toLowerCase();

    for(let i = 0; i < matrisCodigo.length; i++){
        if(stringEncriptado.includes(matrisCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrisCodigo[i][0], matrisCodigo[i][1]);

        }

    }
    return stringEncriptado;
}

function botonDesencriptado(){
    const textoEncriptado = desencriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage = "none";
    document.getElementById("copiar").disabled = false;
    
   
    
    

   
    
}

function desencriptar(stringDesencriptado){
    let matrisCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"],["u", "ufat"]];
    stringDesencriptado = stringDesencriptado.toLowerCase();

    for(let i = 0; i < matrisCodigo.length; i++){
        if(stringDesencriptado.includes(matrisCodigo[i][1])){
            stringDesencriptado = stringDesencriptado.replaceAll(matrisCodigo[i][1] , matrisCodigo[i][0]);

        }

    }
    return stringDesencriptado;
}

function botonCopiar() {
    navigator.clipboard.writeText(mensaje.value);
    mensaje.placeholder = 'Texto copiado con éxito';
    mensaje.style.backgroundImage = "url('/Desafio-Alcides/assets/Pulgar-Photoroom.png')";
    mensaje.value = "";
}

