

const controle = document.querySelectorAll("[data-controle]")//quando for buscado um elmento pelo "data-atribute" deve ser entr [] e sempre entre ""


controle.forEach((elemnto)=> {
    elemnto.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)//dataset.controle ta puxando o elemento pelo data atribute
    })
})

function manipulaDados(operacao, controle) {
    const peca = controle.querySelector("[data-contador]")

    if(operacao === "-") {
        peca.value = parseInt(peca.value) - 1;
    } else {
        peca.value = parseInt(peca.value) + 1;
    }
}