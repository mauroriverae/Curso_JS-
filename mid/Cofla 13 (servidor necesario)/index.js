const getInfo = async ()=>{
    let aprobados = document.querySelector(".num-aprobados");
    let desaprobados = document.querySelector(".num-desaprobados"); 
    try{
        resultado = await axios ("archivo.txt");
        aprobados.innerHTML = resultado.data.aprobados;
        desaprobados.innerHTML = resultado.data.desaprobados;
    }catch(e){
        console.log(e)
        aprobados.innerHTML = "Fail api";
        desaprobados.innerHTML ="Fail api";
    }
}
document.getElementById('getInfo').addEventListener("click", getInfo);