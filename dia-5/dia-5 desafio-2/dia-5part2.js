let serviço = prompt("escolha entre: gasolina ; ácool ; calibrar os pneus")

switch(serviço){
    case "gasolina": 
        const quantoDeGasolina = Number(prompt("quantos reais de gasolina voce deseja?"))
        const gasolina = quantoDeGasolina/5
            console.log("Pronto! Foram adicionados " + gasolina + " litros de gasolina ao seu tanque")
        break;
    case "álcool":
        const quantoDeAlcool = Number(prompt("quantos reais de álcool voce deseja?"))
        const alcool = quantoDeAlcool / 3
            console.log("Pronto! foram adicionados " + alcool + " litro de alcool ao seu tanque")
        break;
    case "calibrar os pneus":
        console.log("seus pneus foram calibrados com sucesso!")
        break;
    default:
        console.log("alternativa invalida")
        break;
}