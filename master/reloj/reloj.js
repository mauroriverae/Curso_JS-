"use strict";
const divHora = document.querySelector(".hora"); 
const divMinutos = document.querySelector(".min"); 
const divSegundos = document.querySelector(".seg"); 

const addZeros = n => {
    if(n.toString().length <2) return "0".concat(n);
    return n;
}

const actualizarHora = () => {
    const time = new Date();
    let hora = time.getHours();
    let minutos = time.getMinutes();
    let segundos = time.getSeconds();
    divHora.textContent = hora;
    divMinutos.textContent = minutos;
    divSegundos.textContent = segundos;
}

actualizarHora();
setInterval(actualizarHora, 1000);

//@dev set interval consume muchos recursos, conviene usar librerias
