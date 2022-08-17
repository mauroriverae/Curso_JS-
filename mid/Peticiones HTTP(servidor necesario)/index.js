//objet XMLHttpRequest
const peticion = new XMLHttpRequest(); //envia una solicitud
function oldway(){
    peticion.addEventListener("readystatechange", ()=>{
        if(peticion.readyState == 4 && peticion.status == 200){ //validacion para que se muestre en la consola
            console.log(peticion.response)
        }
        //console.log(peticion.readyState); // nos muestra en consola cada vez que el radystate cambie
        //readystate tiene 4 estados: 1: se creo correrc, 2 se recibio, 3: que se esta procenado, 4: todo ok
        
    }) //cuando cambie de estado
    peticion.open("GET", "archivo.txt" ); //pide la informacion 
    peticion.send();//envio la peticion
    //nos devuelve informacion cuando el codigo de respuesta es 3 y el status 200   
    console.log(peticion);
}

function newway(){
    peticion.addEventListener("load", ()=>{
        let respuesta;
        if(peticion.status == 200)respuesta = peticion.response;
        else respuesta =  "lo siento, no se ha encontrado el recurso";  
        console.log(JSON.parse(respuesta).nombre)  //lo recibimos serializado --> hay que desarealizarlo
        // i quisiera enviarlo tendria que serializasrlo --> JSON.stringify
    }) // existen muchos codigos de respuesta, esto solo supone que tiene 2
    peticion.open("GET", "archivo.txt");
    peticion.send();
}


// AJAX 
function workajax(){
    //ajax no es compatible para todos los navegadores, por eso hay que validarlo 
    let peticion; 
    if(window.XMLHttpRequest){ // si exite
        peticion = new XMLHttpRequest(); //lo creamos
    }else{ // si no, lo igualamos
        peticion = new ActiveXObject("Microsoft.XMLHTP") //objeto que utiliza internet explore
    }
    //evita posibilidades de que a un sector de usuarios no le ande el sitio
}

//las peticiones get se envian por url con post no 
function sendpost(){
    const peticion = new XMLHttpRequest();
    let respuesta;
    peticion.addEventListener("load",()=>{
        if(peticion.status ==200 || peticion.status == 201) respuesta = peticion.response;
        else respuesta = "im sorry";    
        console.log(JSON.parse(respuesta));
    })
    //Y EL TIPO DE CONTENIDO
    peticion.open("POST", "https://reqres.in/api/users");
    peticion.setRequestHeader("Content-type", "application/json;charset=UTF8"); //NOS PIDE EL HEADER
    
    peticion.send(JSON.stringify({
        "nombre": "mauro",
        "trabajo": "otros"
    }));
}

function workfetchGET(){
    // fetch es una forma de trabajar el objeto XMLHttpRequest
    // fetch siempre devuelve una respuesta encapsulada
    // se usan los metodos para convertirlo a un tipo d metodo valido
    // a diferencia de los otros metodos ahorramos 4 lineas de codigo
    // .method : text, json, blob, 
    fetch("https://reqres.in/api/unknown/2") // fetch tiene GET por defecto
        .then(res => res.json()) //nos devuelve la info encapsulada, con .method la desencapsilamos
        .then(res => console.log(res))
        // nos ahorramos de hacer todo lo anterior, solo con tres lienas de codigo 
}

function  workfetchPOST(){
    fetch("https://reqres.in/api/users", {
        method: "POST",
        body: `{"nombre": "mauro", "apellido": "rivera"}`, // en el body va el contenido que le queremos pasar
        headers: {"Content-type" : "application/json"} 
    } ).then(res => res.json())
       .then(res=> console.log(res))


    // se puede simplifiar mas para que quede mas prolijo ej: 
    /* 
    let headers = {
        method: "POST",
        body: `{"nombre": "mauro", "apellido": "rivera"}`, // en el body va el contenido que le queremos pasar
        headers: {"Content-type" : "application/json"} 
    }
    fetch("https://reqres.in/api/users",headers).then(res => res.json())
       .then(res=> console.log(res))

    */

    //existen muchos tipos de headers, dependiedo el tipo que queramos enviar cambia 
}
function workFetchGetblob(){
    let imagen = document.querySelector(".imagen")
    //probando tipe blob
    fetch("diferencia.png")   
    .then(res => res.blob()) // blob es un tipo de dato de MySQL que puede almacenar objetos binarios 
    .then(img => imagen.src = URL.createObjectURL(img)) //accedo al object imag, creo una url
    // y visualiza la imagen
    // este tipo de dato crea una ruta(url)temporal donde se almacena la imagen
    // cada vez que actualizo cambia la url de la imagen  
}


function LibraryAxios (){
    // remplazo mas moderono q fetch
    // se usa para peticiones y etc.
    // basada en promesas
    axios("archivo.txt")
        .then(res => console.log(res.data))
    //no viene encapsulado.
    //no ahorra un monton de codigo.  
    //por defecto GET y headers auto
}
function LibraryAxiosPost(){
    axios.post("https://reqres.in/api/users",{ //de esta forma envia el objeto
        "nombre" : "mauro",
        "apellido": "rivera"
    })
        .then(res => console.log(res))
        //axios conviene cuando se trabaja con muchas peticiones
        //disminuye el tiempo de carga cuanto tenemos muchas peticiones
}

function axiosAwait (){
    const getName = async ()=>{
       let peticion = await fetch("archivo.txt");
       let resultado = await peticion.json();
       let HTMLCode = `nombre: ${resultado.nombre}<br>
                       edad: ${resultado.edad}<br>`
       document.querySelector(".result").innerHTML = HTMLCode;
    }
    
    document.getElementById('getName').addEventListener("click", getName);
}
axiosAwait();