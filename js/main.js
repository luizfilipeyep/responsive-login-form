const inputs = document.querySelectorAll('.input') // cria um array para pegar cada objeto com a classe

// inputs.addEventListener("focus", focusFunc)
inputs.forEach(input => { // lê o array de objetos, ideal para objetos com a mesma classe
    input.addEventListener('focus', focusFunc)
    input.addEventListener('blur', blurFunc)
})

function focusFunc() {
    // const inputDiv = document.querySelector('.input-div')
    // inputDiv.classList.add('focus')

    let parent = this.parentNode.parentNode
    parent.classList.add('focus')
}

function blurFunc() {
    let parent = this.parentNode.parentNode
    parent.classList.remove('focus')
}

