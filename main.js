// Declaro variables iniciables
let timer = 45; 
let cronometro; 

let tarjetasDestapadas = 0; 
let movimientos = 0; 
let aciertos = 0; 
let comienzo = false; 

let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null; 

 

// Numeros Aleatorios

let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6,7,7,8,8]
numeros = numeros.sort(() => { return Math.random() - 0.5 })

// DOM
tiempo = document.getElementById("tiempo")
movimientosDom = document.getElementById("movimientos")
aciertosDom = document.getElementById("aciertos")
resultadoFinalDom = document.getElementById("resultadoFinalDom")

// Crear DIV DOM
var nuevosMovimientos = document.createElement(`h2`)


// Cronometro
function tiempoDeJuego() {
    efectoReady()
    setTimeout(desbloquearTarjetas,3000)
    setTimeout(() => {
         cronometro =  setInterval(() => {
         timer--
         if (timer <= -1) {
           clearInterval(cronometro);
           alert(`Tiempo Acabado. Resultado: Movimientos ${movimientos} || Aciertos ${aciertos}`)
           location.reload();
         }
        tiempo.innerHTML = "Tiempo de juego: " + timer;
    },1000)
    }, 3000);
   
}

//  Bloquear tarjetas hasta que empiece 
function bloquearTarjetas() {
  for (i = 0; i < 15; i++) {
    let tarjetasBloqueadas = document.getElementById(i).disabled = true
 }
}

// Desbloquear Tarjetas 
function desbloquearTarjetas() {
  for (i = 0; i < 15; i++) {
    let tarjetasBloqueadas = document.getElementById(i).disabled = false
 }
}



// Funcion PRINCIPAL 
 
   // Contar Tarjetas 
function contarTarjetas(id) {
    tarjetasDestapadas++
    // console.log(`Los tarjetasDestapadas son: ` + tarjetasDestapadas)
  if (tarjetasDestapadas == 1) {
    // Mostrar tarjetas 
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id]
    tarjeta1.innerHTML = numeros[id];
    // Deshabilitar el boton una vez presionado
    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas == 2) {
    // Mostrar Tarjeta 2 
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id]
    tarjeta2.innerHTML = numeros[id];
    tarjeta2.disabled = true;

    // Contar Movimientos 
        movimientos++
        nuevosMovimientos.innerText = "Movimientos: " + movimientos
        // console.log(nuevosMovimientos.textContent)
        movimientosDom.innerText = `Movimientos:     ${movimientos}`
    
        
            
        // Volver a 0 tarjetas destapadas si acierta 
       
        if (primerResultado == segundoResultado) {
            tarjetasDestapadas = 0;
             // Aumentar Aciertos 
            aciertos++ 
            aciertosDom.innerHTML = `Aciertos:  ${aciertos}`
            // console.log(`Aciertos:  \n  ${aciertos}`)
          if (aciertos == 8) {
            alert(`Ganaste! Resultado: Movimientos ${movimientos} || Aciertos ${aciertos}`)
          } else if (timer === 0) {
            alert("perdiste")
            }


        } else {
            // Mostrar 1 segundos la carta, pero desaparezca
            setTimeout(() => {
                tarjeta1.innerHTML = ``
                tarjeta1.disabled = false;
                tarjeta2.innerHTML = ``
                tarjeta2.disabled = false;
                tarjetasDestapadas = 0;
            },1000) 
        }
    }
}



// Efectos Css Ready 

function efectoReady() {
  var ml4 = {};
  ml4.opacityIn = [0, 1];
  ml4.scaleIn = [0.2, 1];
  ml4.scaleOut = 3;
  ml4.durationIn = 500;
  ml4.durationOut = 500;
  ml4.delay = 500;

  anime.timeline({ loop: false })
    .add({
      targets: '.ml4 .letters-1',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn
    }).add({
      targets: '.ml4 .letters-1',
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay
    }).add({
      targets: '.ml4 .letters-2',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn
    }).add({
      targets: '.ml4 .letters-2',
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay
    }).add({
      targets: '.ml4 .letters-3',
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn
    }).add({
      targets: '.ml4 .letters-3',
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay
    }).add({
      targets: '.ml4',
      opacity: 0,
      duration: 500,
      delay: 500
    });
}

