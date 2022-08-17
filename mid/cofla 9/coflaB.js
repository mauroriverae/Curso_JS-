
const boton = document.querySelector(".button-confirm");
const contenedor = document.querySelector(".grid-container")

alumnos = [{
    nombre: "Mauro Rivera",
    email: "mauro23rivera@gmail.com",
    materia: "Fisica 2"
},{
    nomre: "MAximiliano g",
    email: "maxif@gmail.com",
    materia: "contabilidad 3"
},{
    nombre: "Karen g",
    email: "karen5@gmail.com",
    materia: "Economia 4"
},{
    nombre: "Lugas j",
    email: "lucash@gmail.com",
    materia: "Fisica 5"
}]

for(alumno in alumnos){
    let datos = alumnos[alumno];
    let nombre = datos["nombre"];
    let email= datos["email"];
    let materia = datos["materia"];
    let htmlCode = `
    <div class="grid-item nombre">${nombre}</div>
    <div class="grid-item email">${email}</div>
    <div class="grid-item materia">${materia}</div>
    <div class="grid-item semana">
        <select class="semana-elegida">
            <option value="Semana 1">Semana 1</option>
            <option value="Semana 2">Semana 2</option>
        </select>
    </div>
` ;
    contenedor.innerHTML+= htmlCode;
}

boton.addEventListener("click", ()=>{
    let confirmar = confirm("Realmente quieres confirmar las mesas?");
    if(confirmar){
        document.body.removeChild(boton); 
        let elementos = document.querySelectorAll(".semana");
        let semanaElegida = document.querySelectorAll(".semana-elegida");
        for(elemento in elementos){
            semana = elementos[elemento];
            console.log(semana);
            semana.innerHTML= semanaElegida[elemento].value;
        } 
    }

})