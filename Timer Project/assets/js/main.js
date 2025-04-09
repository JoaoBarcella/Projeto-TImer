function getTimeOnSeconds(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString("pt-BR",{
        hour12:false,
        timeZone:'GMT'

    });   
}

const relogio = document.querySelector('.relogio')

const iniciar = document.querySelector('.iniciar')

const zerar = document.querySelector('.zerar')

const pausar = document.querySelector('.pausar')

let segundos = 0;

let timer;

const rg = document.querySelector(".relogio")

function trocarCorPause() {
    rg.style.color = "red"
}
function trocarCorZerar() {
    rg.style.color = "black"
}

function iniciaRelogio() {
    timer = setInterval(function(){
        segundos++;
        relogio.innerHTML = getTimeOnSeconds(segundos)
    },1000)
}

iniciar.addEventListener("click",(e) =>{
    iniciaRelogio()
})

zerar.addEventListener("click",(e) =>{
    clearInterval(timer)
    relogio.innerHTML = "00:00:00"
    trocarCorZerar()
})

pausar.addEventListener("click",(e) =>{
    clearInterval(timer)
    trocarCorPause()
})