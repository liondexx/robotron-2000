const controle = document.querySelectorAll("[data-controle]")//quando for buscado um elmento pelo "data-atribute" deve ser entr [] e sempre entre ""
const estatisticas = document.querySelectorAll("[data-estatistica]")

const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}

controle.forEach((elemento)=> {
    elemento.addEventListener("click", (evento) =>{
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode)//dataset.controle ta puxando o elemento pelo data atribute´
        console.log(evento.target.dataset.controle)
        atualizaEstatisticas(evento.target.dataset.controle, evento.target.dataset.peca)
        
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

/*function atualizaEstatisticas(peca) {
    
    estatisticas.forEach((elemento) => {
        console.log(elemento.dataset.estatistica)
        elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
    })
    console.log(pecas[peca])
}*/
function atualizaEstatisticas(operacao, peca) {
    if (operacao === "+") {
        estatisticas.forEach( (elemento ) => {
            elemento.textContent = parseInt(elemento.textContent) + pecas[peca][elemento.dataset.estatistica]
        })
    }else estatisticas.forEach( (elemento ) => {
        elemento.textContent = parseInt(elemento.textContent) - pecas[peca][elemento.dataset.estatistica]
    })
}
