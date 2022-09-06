"use strict";
const english = document.querySelector(".en");
const spanish = document.querySelector(".es");
const modal = document.querySelector(".modal")


const definirIdioma = () => {
    english.addEventListener("click", ()=>{
        localStorage.setItem("idioma", "en");
        cerrarModal();
    })
    spanish.addEventListener("click", ()=>{
        localStorage.setItem("idioma", "es");
        cerrarModal();
    })
}

const cerrarModal = () => {
    modal.style.animation = "desaparecer 1s forwards";
    setTimeout(()=> modal.style.display = "none", 1000);
}

const idioma = localStorage.getItem("idioma");

if(idioma === null) definirIdioma();
else {
    console.log(`Idioma: ${idioma}`);   
    modal.style.display ="none"
}