let nome = ""
let idade = 0
let altura = 0
let peso = 0

nome = prompt("insira seu nome")
idade = parseInt(prompt("insira sua idade"))
altura = parseFloat(prompt("insira sua altura"))
peso = parseInt(prompt("insira seu peso"))

console.log(altura)

console.log(nome)

console.log(idade)

console.log(peso)
 

 const anoDeNascimento = 2023 - idade
    console.log(anoDeNascimento)

 const imc = peso / (altura * altura)
    console.log(imc)

    console.log("ola " + nome + " voce tem " + idade + " anos, nasceu em " + anoDeNascimento + ", tem " + altura + "m de altura, " + "pesa " + peso + "kg e seu imc é de " + imc + "kg/m2")
