var input = document.querySelector("textarea");
var unTouched = false; // no se ha cambiado el valor por defecto del text area -> "ingresar el texto aquí"
var encriptarButton = document.getElementById("encriptar");
var desencriptarButton = document.getElementById("desencriptar");
var copiar = document.getElementById("copiar");
var RegEx= /[^a-z]/; // algo que no es una minuscula

input.addEventListener("change",function(){ unTouched=true; }); // alguien cambio el texto por default, variable pasa a true
encriptarButton.addEventListener("click",encriptar);
desencriptarButton.addEventListener("click",desencriptar);
copiar.addEventListener("click",function () {
    navigator.clipboard
      .writeText(document.getElementById("resultado").innerHTML)
      .then(
        (success) => console.log("text copied"),
        (err) => console.log("error copying text")
      );
  });

function encriptar(){

    let texto = input.value;
    let output = ""
    if( unTouched== true &&  texto != ""){// no vamos a encriptar el valor por defecto ni un texto vacío
        if(RegEx.exec(texto)== null){ // solo minusculas devuelve null, de lo contrario entramos al if
            // mensaje de error 
            for(i = 0; i<texto.length;i++){
               switch(texto[i]){
                   case "e":
                       output+="enter";
                       break;
                   case "i":
                       output+="imes";
                       break;
                   case "a":
                       output+="ai";
                       break;
                   case "o":
                       output+="ober";
                       break;
                   case "u":
                       output+="ufat";
                       break;
                   default:
                       output+=texto[i];
                       break;         
               }
            }
            console.log(output);
            document.getElementById("resultado").innerHTML=output;
            document.getElementById("encabezado").style.display = "none";
            document.getElementById("copiar").style.display = "flex";
            unTouched= false; // así no dejara encriptar denuevo a menos que se haga un cambio al textarea
        }
        
    }
    else if(texto == "") {
        //mensaje de error
        document.getElementById("encabezado").style.display = "block";
        document.getElementById("encabezado").innerHTML = "Ningún mensaje fue encontrado";
        document.getElementById("resultado").innerHTML="Ingresa el texto que desees encriptar o desencriptar.";
        document.getElementById("copiar").style.display = "none";
    }
}

function desencriptar(){
    let texto = input.value ;
    let aux = "";
    if( unTouched== true &&  texto != ""){
        if(RegEx.exec(texto)== null){ 
            aux = texto.replaceAll("enter","e");
            texto= aux.replaceAll("imes","i");
            aux= texto.replaceAll("ai","a");
            texto= aux.replaceAll("ober","o");
            aux= texto.replaceAll("ufat","u");
    
    
            document.getElementById("encabezado").style.display = "none";
            document.getElementById("copiar").style.display = "flex";
            document.getElementById("resultado").innerHTML=aux;
            unTouched= false; // así no dejara encriptar denuevo a menos que se haga un cambio al textarea
        }
    }   
    else if(texto == ""){
        document.getElementById("encabezado").style.display = "block";
        document.getElementById("encabezado").innerHTML = "Ningún mensaje fue encontrado";
        document.getElementById("resultado").innerHTML="Ingresa el texto que desees encriptar o desencriptar.";
        document.getElementById("copiar").style.display = "none";
    }
}