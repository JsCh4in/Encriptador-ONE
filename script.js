
function encriptar1(){
    var texto = document.getElementById("texto1").value.toLowerCase();
    

    if( texto == ""){
        
    }else{
        var txtCifrado = texto.replaceAll("e", "enter");
        txtCifrado = txtCifrado.replaceAll("i", "imes");
        txtCifrado = txtCifrado.replaceAll("a", "ai");
        txtCifrado = txtCifrado.replaceAll("o", "ober");
        txtCifrado = txtCifrado.replaceAll("u", "ufat");

        document.getElementById("img2").style.display = "none";
        document.getElementById("titulo2").style.display = "none";
        document.getElementById("parrafo2").style.display = "none";
        document.getElementById("texto2").innerHTML = txtCifrado;
        document.getElementById("texto2").style.display = "show"
        document.getElementById("texto2").style.display = "inherit"
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
        
        
    }
    
}

function desencriptar(){
    var texto2 = document.getElementById("texto1").value.toLowerCase();

    if(texto2 == ""){
        

    }else{
        var txtDescifrado = texto2.replaceAll("enter", "e");
        txtDescifrado = txtDescifrado.replaceAll("imes", "i");
        txtDescifrado = txtDescifrado.replaceAll("ai", "a");
        txtDescifrado = txtDescifrado.replaceAll("ober", "o");
        txtDescifrado = txtDescifrado.replaceAll("ufat", "u");

        document.getElementById("img2").style.display = "none";
        document.getElementById("titulo2").style.display = "none";
        document.getElementById("parrafo2").style.display = "none";
        document.getElementById("texto2").innerHTML = txtDescifrado;
        document.getElementById("texto2").style.display = "inherit"
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "show";
        document.getElementById("copiar").style.display = "inherit";
 
    }

    
}

function copiar(){
    var contenido = document.getElementById("texto2");
    contenido.select();
    document.execCommand("copy");
    
}


function imagenes(){
    var a = document.getElementById("texto1").value;

    if (a == ""){
        document.getElementById("img2").style.display = "show";
        document.getElementById("img2").style.display = "inherit"
        document.getElementById("titulo2").style.display = "show";
        document.getElementById("titulo2").style.display = "inherit"
        document.getElementById("parrafo2").style.display = "show";
        document.getElementById("parrafo2").style.display = "inherit"

        document.getElementById("copiar").style.display = "none";
        document.getElementById("texto2").style.display = "none";
        
    }

}
setInterval(imagenes,10)