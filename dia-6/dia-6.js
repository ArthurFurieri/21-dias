const numeroRecebido = parseInt(prompt("escolha um numero para sua tabuada"))
for(let i = numeroRecebido; i <= numeroRecebido + 2; i++){
    console.log("tabuada do " + i)
    for(let multiplicador = 0; multiplicador <= 10; multiplicador++)
        console.log(i + " * " + multiplicador + " = " + i * multiplicador)
}