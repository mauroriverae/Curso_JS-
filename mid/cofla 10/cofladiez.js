const sendButton = document.getElementById('snd-nota');
sendButton.addEventListener("click", ()=>{
    let resultado, mensaje
    try{
        prevRes = parseInt(document.getElementById('nota').value);
        if(isNaN(prevRes)){
            throw "Gracioso";
        }
        resultado = verificarAprobacion(6,6,mensaje);
        mensaje = definirMensaje(resultado[1]);
    }catch(e){
        resultado = "SOS CHITOSO?";
        mensaje = "he descubierto que quieres hackearme";
    }
    abrirModal(resultado[0],mensaje);

})
const definirMensaje= (pr)=>{
    let resultado;
    switch(pr){
        case 1: resultado = "no podes bro, te caes insta";
        break;
        case 2: resultado = "buscate otra carrera";
        break;
        case 3: resultado = "menos joda mas estudio";
        break;
        case 4: resultado = "Raspando";
        break;
        case 5: resultado = "Safa ";
        break;
        case 6: resultado = "podes mejorar un poco";
        break;
        case 7: resultado = "bien";
        break;
        case 8: resultado = "buena limada";
        break;
        case 9: resultado = "casi good";
        break;
        case 10: resultado = "Level god , virgo supremo";
        break;
        default: resultado = null;
    }
    return resultado;
}
const verificarAprobacion = (nota1,nota2,prevRes)=>{
    promedio = (nota1 + nota2 + prevRes) / 3;
    if(promedio >= 7) {
        return  ["<span class= 'green'> Aprobado </span>", (promedio)]
    }
    return  ["<span class= 'red'> Desaprobado </span>", (promedio)]
}
const abrirModal = (res, msg)=>{
    document.querySelector(".resultado").innerHTML = res;
    document.querySelector(".mensaje").innerHTML = "Tu prueba "+ msg;
    let modal = document.querySelector(".modal-background");
    modal.style.display = "flex";
    modal.style.animation = "aparecer 1s forwards";
}