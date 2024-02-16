let n1 = Number(prompt("escolha um numero"))
let n2 = Number(prompt("escolha outro numero"))
let operaçao = Number(prompt("escolha a operaçao matematica, por meio de : divisao = n4 ; multiplicaçao = n3 ; soma = n1 ; subtraçao = n2"))

switch (operaçao) {
    case 1:
        console.log(n1 + " + " + n2 + " = " + (n1 + n2))
        break;
    case 2: 
        console.log(n1 + "-" + n2 + "=" + (n1 - n2))
        break;
    case 3: 
        console.log(n1 + "*" + n2 + "=" + (n1 * n2))
        break;
    case 4: 
        console.log(n1 + "/" + n2 + "=" + (n1 / n2))
        break;
}
    