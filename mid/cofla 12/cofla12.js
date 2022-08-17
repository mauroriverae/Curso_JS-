const materiasHTML = document.querySelector(".materias");


const materias = [
    {
        nombre: "fisica 1",
        nota: 9
    },{
        nombre: "Calculo 3",
        nota: 4
    },{
        nombre: "Economia 4",
        nota: 8
    },{
        nombre: "Contabilidad 2",
        nota: 7
    },{
        nombre: "Matematica financiera",
        nota: 6
    },
]


const obtenerMateria = (id) => {
    return new Promise((resolve, reject)=>{
        materia = materias[id];
        if(materia == undefined) reject("la materia no existe");
        else setTimeout(()=>{resolve(materia)},Math.random()*400);
    });
}

const devolverMaterias = async () =>{
    let materia = [];
    for(let i = 0; i < materias.length; i++){
        materia[i] = await obtenerMateria(i);
        let newHTMLCode = `
        <div class="materia">
             <div class="nombre">${materia[i].nombre}</div>
             <div class="nota">${materia[i].nota}</div>
        </div>`;
        materiasHTML.innerHTML += newHTMLCode 
    }
}

devolverMaterias()