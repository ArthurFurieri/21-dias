let fome = prompt("vc esta com fome?")
let dinheiro = prompt("vc esta com o malote?")
let restaurante = prompt("o restaurante esta aberto?")

if(fome === "sim" && dinheiro === "sim" && restaurante === "sim"){
    console.log("hoje o jantar será no seu restaurante preferido")
}else if(fome === "sim" && dinheiro === "sim" && restaurante === "nao"){
    console.log("peça um delivery")
}else if(fome === "nao" || dinheiro === "nao"){
    console.log("hoje a janta é em casa")
}