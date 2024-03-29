let intentos = 0; //variable que cuenta la cantidad de intentos que realizo el usuario para adivinar el numero
let numeroSecreto = 0; //variable que inicia el numero secreto aleatorio en 0 para luego con la funcion generarNumeroAleatorio este adquiera un nuevo valor
let listaNumerosSorteados = []; //Lista para guardar los numeros aleatorios sorteados
let numeroMaximo = 10; //variable que indica hasta que valor el usuario debe ingresar un numero
condicionesIniciales();

function generarNumeroAleatorio() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros...
    if(listaNumerosSorteados.length == numeroMaximo){
        cargar('p', 'Ya se sortearon todos los números posibles');
    }else { //sino seguimos jugando    
    //si el numero generado esta incluido en la lista...
        if (listaNumerosSorteados.includes(numeroGenerado)){        //metodo include recorre la lista y verifica si existe el numero que pasamos como parametro.
            return generarNumeroAleatorio (); //recursividad (se llama a si misma la funcion generarNumeroAleatorio)
        } else{
            listaNumerosSorteados.push(numeroGenerado); //si no esta en la lista, lo agrega a la lista
            return numeroGenerado; // devuelve el nuevo numero generado
        } 
    }
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

// console.log(numeroSecreto);
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById ('valorUsuario').value);   //get element by ID obtiene los id de las etiquetas que tienen ID en el archivo HTML
    /*console.log(numeroSecreto);
    console.log(typeof(numeroSecreto)); //muestra por consola de que tipo de dato es numeroSecreto
    console.log(numeroDeUsuario);
    console.log(typeof(numeroDeUsuario));
    console.log (numeroDeUsuario === numeroSecreto); //El === compara tipo de dato y valor de las variables*/

    if (numeroDeUsuario===numeroSecreto) {
        cargar('p', `Acertaste el número en ${intentos} ${(intentos === 1) ? "intento" : "intentos"}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
        document.getElementById('botonIntentar').setAttribute('disabled','true');
        
        //El usuario no acerto
    }else{ 
        if(numeroDeUsuario > numeroSecreto){
            cargar('p', "El número secreto es menor")
            
        }else{
            cargar('p', "El número secreto es mayor")    
        }
        intentos++;
        limpiarInput();
    }
    return;
}

//funcion que permite borrar la caja de texto
function limpiarInput(){
    document.querySelector('#valorUsuario').value = ''  //el query selector por ID con el simbolo # y el punto value = '' permite limpiar el textbox
}

//encapsula la actividad de colocar los mensajes titulo y parrafo, generar un numero aleatoria secreto nuevo e iniciar la variable intentos con el valor 1
function condicionesIniciales(){
    cargar('h1',"Juego del Número Secreto");
    cargar('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroAleatorio();
    intentos = 1;
}

//funcion que permite iniciar un nuevo juego
function nuevoJuego (){
    // console.log(numeroSecreto);
    //limpiar textbox
    limpiarInput();
    //reiniciar variable intentos
    //generar un nuevo numero secreto
    //resetear el parrafo del html
    condicionesIniciales();    
    //bloquear boton nuevo juego hasta que el usuario vuelva a ganar
    document.getElementById('reiniciar').setAttribute('disabled','true');
    //desbloquear boton intentar para comenzar a jugar
    document.getElementById('botonIntentar').removeAttribute('disabled')
}