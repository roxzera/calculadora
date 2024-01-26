function somador(a, b){
    return a + b
}

const valorA = document.getElementById('valor')
const valorB = document.getElementById('servico')
const form = document.getElementById('forms')
const p = document.querySelector('#resultado')

form.addEventListener('submit', function (e) {
    e.preventDefault()

    p.innerHTML = somador(parseInt(valorA.value), parseInt(valorB.value))
    p.style.display = 'block'
})

valorA.addEventListener('keyup', function(e){
    if (valorA != e.target.value) {
        p.style.display = 'none'
    }
})

valorB.addEventListener('keyup', function(e){
    if (valorB != e.target.value) {
        p.style.display = 'none'
    }
})

console.log(valorB)