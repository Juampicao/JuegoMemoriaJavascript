// Declaro variables iniciables
let timer = 30;
let cronometro;

let tarjetasDestapadas = 0;
let movimientos = 0;
let aciertos = 0;
let comienzo = false;

let tarjeta1 = null;
let tarjeta2 = null;
let primerResultado = null;
let segundoResultado = null;
let tarjetasBloqueadas = null;

let inputNombreJugador;

// DOM

let tiempo = document.getElementById("tiempo");
let movimientosDom = document.getElementById("movimientos");
let aciertosDom = document.getElementById("aciertos");
let resultadoFinalDom = document.getElementById("resultadoFinalDom");
let todoOpacity = document.getElementById("todoOpacity");

// Dom Modal Nombre
let pressConfirmModal = document.getElementById("pressConfirmModal"); // Boton Confirm Modal
let modalNombre = document.getElementById("modalNombre"); // Div Modal
let pressCloseModal = document.getElementById("pressCloseModal"); // Boton Close Modal
let completarNombre = document.getElementById("completarNombre"); // Input Text

// Dom Modal Tiempo Terminado
let modalTiempoTerminado = document.getElementById("modalTiempoTerminado"); // Modal Tiempo Terminado Entero
let resultadoJuego = document.getElementById("resultadoJuego"); // Div Resultado Final .
let pressConfirmModalJuegarDevuelta = document.getElementById(
  "pressConfirmModalJuegarDevuelta"
); // Press ¡Si, Quiero una mas!

// Numeros Aleatorios
let numeros = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
numeros = numeros.sort(() => {
  return Math.random() - 0.5;
});

// Aparecer Modal Nombre on body.load.
function aparecerModalNombre() {
  modalNombre.classList.remove(`hidden`);
}

// Toogle hover class
function toggleHover() {
  for (i = 0; i < 15; i++) {
    tarjetasBloqueadas = document.getElementById(i);
    tarjetasBloqueadas.classList.toggle(`ov-btn-slide-right`);
    tarjetasBloqueadas.classList.toggle(`bg-white`);
  }
}

//  Bloquear tarjetas hasta que empiece el cronometro.
function bloquearTarjetas() {
  for (i = 0; i < 15; i++) {
    tarjetasBloqueadas = document.getElementById(i).disabled = true;
    toggleHover();
  }
}

// Desbloquear Tarjetas cuando empieza el cronometro.
function desbloquearTarjetas() {
  for (i = 0; i < 15; i++) {
    tarjetasBloqueadas = document.getElementById(i).disabled = false;
    toggleHover();
  }
}

function jugarDenuevo() {
  pressConfirmModalJuegarDevuelta.addEventListener(`click`, (e) => {
    e.preventDefault();
    location.reload();
  });
}

// Press Confirm Modal
pressConfirmModal.addEventListener(`click`, (e) => {
  e.preventDefault();
  inputNombreJugador = document.getElementById("nombreJugador").value;
  if (!inputNombreJugador.length) {
    pressConfirmModal.disabled = false;
    completarNombre.classList.remove("hidden");
  } else {
    modalNombre.classList.add(`hidden`);
    console.log(inputNombreJugador);
    todoOpacity.style.opacity = "1";
    tiempoDeJuego();
  }
});

// Press Close Modal
pressCloseModal.addEventListener(`click`, (e) => {
  e.preventDefault();
  completarNombre.classList.remove("hidden");
});

// Cronometro
function tiempoDeJuego() {
  efectoReady();
  setTimeout(desbloquearTarjetas, 3000);
  setTimeout(() => {
    cronometro = setInterval(() => {
      timer--;
      if (timer <= -1) {
        clearInterval(cronometro);
        modalTiempoTerminado.classList.remove("hidden");
        todoOpacity.style.opacity = "0.3";
        bloquearTarjetas();

        let perdiste = (document.createElement(`li`).innerText =
          "¡Perdiste! " + inputNombreJugador);
        let cantidadMovimientos = (document.createElement(`li`).innerText =
          "\n  || Movimientos:" + movimientos);
        let cantidadAciertos = (document.createElement(`li`).innerText =
          " || Aciertos:" + aciertos);

        resultadoJuego.append(perdiste, cantidadMovimientos, cantidadAciertos); // Agrego el texto al DOM

        jugarDenuevo();
      }
      tiempo.innerHTML = "Tiempo: " + timer;
    }, 1000);
  }, 3000);
}

// Funcion PRINCIPAL

// Contar Tarjetas
function contarTarjetas(id) {
  tarjetasDestapadas++;
  // console.log(`Los tarjetasDestapadas son: ` + tarjetasDestapadas)
  if (tarjetasDestapadas == 1) {
    // Mostrar tarjetas
    tarjeta1 = document.getElementById(id);
    primerResultado = numeros[id];
    tarjeta1.innerHTML = numeros[id];
    // Deshabilitar el boton una vez presionado
    tarjeta1.disabled = true;
  } else if (tarjetasDestapadas == 2) {
    // Mostrar Tarjeta 2
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = numeros[id];
    tarjeta2.disabled = true;

    // Contar Movimientos

    movimientos++;
    let nuevoH2 = document.createElement(`h2`);
    nuevoH2.innerText = "Movimientos: " + movimientos;
    // console.log(nuevosMovimientos.textContent)
    movimientosDom.innerText = `Movimientos:     ${movimientos}`;

    // Volver a 0 tarjetas destapadas si acierta

    if (primerResultado == segundoResultado) {
      tarjetasDestapadas = 0;
      // Aumentar Aciertos
      aciertos++;
      aciertosDom.innerHTML = `Aciertos:  ${aciertos}`;
      // console.log(`Aciertos:  \n  ${aciertos}`)
      if (aciertos == 8) {
        clearInterval(cronometro);
        modalTiempoTerminado.classList.remove("hidden");
        todoOpacity.style.opacity = "0.3";
        bloquearTarjetas();

        let perdiste = (document.createElement(`h2`).innerText =
          "¡Ganaste! " + "\n" + inputNombreJugador);
        let cantidadMovimientos = (document.createElement(`h2`).innerText =
          " || Movimientos:" + movimientos);
        let cantidadAciertos = (document.createElement(`h2`).innerText =
          " || Aciertos:" + aciertos);

        resultadoJuego.append(perdiste, cantidadMovimientos, cantidadAciertos); // Agrego el texto al DOM

        jugarDenuevo();
      }
    } else {
      // Mostrar 1 segundos la carta, pero desaparezca
      setTimeout(() => {
        tarjeta1.innerHTML = ``;
        tarjeta1.disabled = false;
        tarjeta2.innerHTML = ``;
        tarjeta2.disabled = false;
        tarjetasDestapadas = 0;
      }, 500);
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

  anime
    .timeline({ loop: false })
    .add({
      targets: ".ml4 .letters-1",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-1",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-2",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: ml4.opacityIn,
      scale: ml4.scaleIn,
      duration: ml4.durationIn,
    })
    .add({
      targets: ".ml4 .letters-3",
      opacity: 0,
      scale: ml4.scaleOut,
      duration: ml4.durationOut,
      easing: "easeInExpo",
      delay: ml4.delay,
    })
    .add({
      targets: ".ml4",
      opacity: 0,
      duration: 500,
      delay: 500,
    });
}
