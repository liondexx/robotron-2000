const somar = document.querySelector("#somar")
const braco = document.querySelector("#braco")
const subtrair = document.querySelector("#subtrair")

somar.addEventListener("click", (evento) => {
   
})

subtrair.addEventListener("click", (evento) => {
    
})

function manipulaDados(operacao) {
    if(operacao === subtrair) {
        braco.value = parseInt(braco.value) + 1;
    } else {
        braco.value = parseInt(braco.value) - 1;
    }
}