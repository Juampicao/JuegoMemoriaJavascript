let pressToggleModal = document.getElementById("toggleBotton")
let pressConfirmModal = document.getElementById("pressConfirmModal")
let modalToggle = document.getElementById("popup-modal")

// Modal Toggle Modal
pressToggleModal.addEventListener(`click`, (e) => { // Al presionar boton Open Modal
  modalToggle.classList.remove(`hidden`)            // Add "Hidden" classlist
  e.preventDefault();
})

pressConfirmModal.addEventListener(`click`, (e) => {
  modalToggle.classList.add(`hidden`)
  e.preventDefault();
})


if (modalToggle.classList = `hidden`) {
  console.log("esta hidden")
} else {
  console.log("no esta hidden")
}

function aparecerModalOnLoad() {      // Aparecer Modal on Load (agregar a body  => onload)
  modalToggle.classList.remove(`hidden`) // Remove "hidden" classlist.
}