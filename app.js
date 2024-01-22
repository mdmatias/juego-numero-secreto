let intentos = 1;
let numeroSecreto = generarNumeroAleatorio();

function generarNumeroAleatorio() {
    return Math.floor(Math.random()*10)+1;
}

/* 
let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del Número Secreto"

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un número del 1 al 10" */

//Esta funcion realiza lo mismo que lo anterior (cargar un titulo y un parrafo) pero a traves de un evento.

    /* Esta funcion se podria solicitar al momento de cargar el body por ejemplo (ONLOAD = cargar();)
    function cargar(){
        let titulo = document.querySelector('h1');
        titulo.innerHTML = "Juego del Número Secreto"

    let parrafo = document.querySelector('p');
    parrafo.innerHTML = "Indica un número del 1 al 10"
    }*/

// Cumple la misma funcion que lo de arriba 
function cargar(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

cargar('h1',"Juego del Número Secreto");
cargar('p',"Indica un número del 1 al 10");

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);   //get element by ID obtiene los id de las etiquetas que tienen ID en el archivo HTML
    /*console.log(numeroSecreto);
    console.log(typeof(numeroSecreto)); //muestra por consola de que tipo de dato es numeroSecreto
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log (numeroDeUsuario === numeroSecreto); //El === compara tipo de dato y valor de las variables*/
    
    if (numeroDeUsuario===numeroSecreto) {
        cargar('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
    }else{
        if(numeroDeUsuario > numeroSecreto){
            cargar('p', "El número secreto es menor")
            
        }else{
            cargar('p', "El número secreto es mayor")    
        }
        intentos++;
    }
    return;
}


