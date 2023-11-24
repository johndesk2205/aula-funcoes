// a) Crie 4 funções. Cada função deve receber dois parâmetros numéricos e retornar o valor de uma das operações básicas (soma, subtração, multiplicação e divisão).

function soma(num1, num2){
    const resultado = (Number(num1)) + (Number(num2));
    console.log(resultado)
    return resultado
}


function subtracao(num1, num2){
    const resultado = num1 - num2
    console.log(resultado)
    return resultado
}


function multiplicacao(num1, num2){
    const resultado = num1 * num2
    console.log(resultado)
    return resultado
}

function divisao(num1, num2){
    const resultado = num1 / num2
    console.log(resultado)
    return resultado
}


// b) Em seguida, fora das funções, receba do usuário dois números e armazene-os em variáveis.

num1 = prompt(`Digite o primeiro número:`)
num2 = prompt(`Digite o segundo número:`)

// c) Invoque cada uma das 4 funções, passando como argumento os dois números recebidos do usuário.

soma(num1, num2)
subtracao(num1, num2)
multiplicacao(num1, num2)
divisao(num1, num2)



// d) Por fim, crie variáveis para receber o retorno de cada uma das funções e imprima o resultado das operações no console.

const somaCalculada = soma(num1, num2);
console.log(somaCalculada)

const subtracaoCalculada = subtracao(num1, num2)
console.log(subtracaoCalculada)

const multiplicacaoCalculada = multiplicacao(num1, num2)
console.log(multiplicacaoCalculada)

const divisaoCalculada = divisao(num1, num2)
console.log(divisaoCalculada)