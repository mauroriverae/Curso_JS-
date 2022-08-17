dineroCofla = prompt("cuanto dinero tienes cofla");
dineroRoberto = prompt("cuanto dinero tienes Robert");
dineroPedro= prompt("cuanto dinero tienes Pedrin");

if(dineroCofla >= 0.6 && dineroCofla< 1){
    alert("comprate el helado de agua");
}
else if (dineroCofla >= 1 && dineroCofla < 1.6){
    alert("comprate el helado de crema")
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7){
    alert("comprate el heladin")
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8){
    alert("comprate el heladobich")
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9){
    alert("comprate el heladardo")
}
else if(dineroCofla >2.9){
    alert("holado con confites o esta 8=) ")
}
else{
    alert("alto pobre")
}