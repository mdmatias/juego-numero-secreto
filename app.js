
/* 
let titulo = document.querySelector('h1');
titulo.innerHTML = "Juego del Número Secreto"

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un número del 1 al 10" */

//Esta funcion realiza lo mismo que lo anterior (cargar un titulo y un parrafo) pero a traves de un evento.

function carga(){
    let titulo = document.querySelector('h1');
    titulo.innerHTML = "Juego del Número Secreto"

let parrafo = document.querySelector('p');
parrafo.innerHTML = "Indica un número del 1 al 10"
}

/* Cumple la misma funcion que lo de arriba 
function carga(elemento, texto){
    let elementoHTML = document.querySelector('elemento');
    elementoHTML.innerHTML = "texto"
    return;
}

carga('h1','Juego del Número Secreto');
carga('p','Indica un número del 1 al 10');
*/

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);   //get element by ID obtiene los id de las etiquetas que tienen ID en el archivo HTML
    console.log(numeroSecreto);
    console.log(typeof(numeroSecreto)); //muestra por consola de que tipo de dato es numeroSecreto
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log (numeroDeUsuario === numeroSecreto); //El === compara tipo de dato y valor de las variables
    return;
}

let numeroSecreto = generarNumeroAleatorio();

function generarNumeroAleatorio() {
    return Math.floor(Math.random()*10)+1;
}