//Por favor, verificar o resultado no console do Google.
var numeroUm = Number(prompt('Digite o primeiro número:'))
var numeroDois = Number(prompt('Digite o segundo número:'))
var condicao = prompt('Escolha o tipo de operação que deseja: + - * /')
switch(condicao){
    case '+' :
        console.log(`${numeroUm} + ${numeroDois} = ${numeroUm+numeroDois}`)
        break
    case '-' :
        console.log(`${numeroUm} - ${numeroDois} = ${numeroUm-numeroDois}`)
    case '*' :
        console.log(`${numeroUm} * ${numeroDois} = ${numeroUm*numeroDois}`)
        break
    case '/' :
        console.log(`${numeroUm} / ${numeroDois} = ${numeroUm/numeroDois}`)
        break
    default:
    break
}
