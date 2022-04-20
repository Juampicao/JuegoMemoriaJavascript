let pressToggleModal = document.getElementById("toggleBotton")
let pressConfirmModal = document.getElementById("pressConfirmModal")
let modalNombre = document.getElementById("popup-modal")

// Modal Toggle Modal
pressToggleModal.addEventListener(`click`, (e) => { // Al presionar boton Open Modal
  modalNombre.classList.remove(`hidden`)            // Add "Hidden" classlist
  e.preventDefault();
})

pressConfirmModal.addEventListener(`click`, (e) => {
  modalNombre.classList.add(`hidden`)
  e.preventDefault();
})


if (modalNombre.classList = `hidden`) {
  console.log("esta hidden")
} else {
  console.log("no esta hidden")
}

function aparecerModalOnLoad() {      // Aparecer Modal on Load (agregar a body  => onload)
  modalNombre.classList.remove(`hidden`) // Remove "hidden" classlist.
}