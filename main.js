// Declaro variables iniciables
let timer = 6; 
let cronometro; 
let comenzarCronometro = false;

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
console.log(numeros)

// DOM
tiempo = document.getElementById("tiempo")
movimientosDom = document.getElementById("movimientos")
aciertosDom = document.getElementById("aciertos")
resultadoFinalDom = document.getElementById("resultadoFinalDom")
botones = document.getElementById("botones").onclick

// Crear DIV DOM
var nuevosMovimientos = document.createElement(`h2`)

// Cronometro
function tiempoDeJuego() {
    cronometro =  setInterval(() => {
         timer--
         if (timer == 0) {
             clearInterval(cronometro);
             console.log("Tiempo acabado")
         }
        tiempo.innerHTML = "¡Empieza! Tiempo restante de juego: " + timer;
    },1000)
}

// Prueba Funcion Cronometro


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
        // movimientosDom.textContent = Ganaste
        nuevosMovimientos.innerText = "Movimientos: " + movimientos
        console.log(nuevosMovimientos.textContent)
      
            
        // Volver a 0 tarjetas destapadas si acierta 
       
        if (primerResultado == segundoResultado) {
            tarjetasDestapadas = 0;
             // Aumentar Aciertos 
            aciertos++ 
            aciertosDom.innerHTML = `Aciertos: ` + aciertos 
            console.log(`Aciertos: ` + aciertos)
            if (aciertos == 1) {
               alert("ganaste")

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


