// a) Uma função que recebe 2 números como parâmetros e que imprime a soma deles. Invoque a função e verifique o resultado no console.

function somaNumeros(num1, num2){
    const resultado = num1 + num2
    console.log(resultado)

}

somaNumeros(5, 7)
somaNumeros(87, 115)

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é **maior ou igual** ao segundo.

function recebidos(num3, num4){
console.log(num3 >= num4)

}
recebidos(4, 5)
recebidos(6,2)


// c) Uma função que recebe um número e imprime no console um booleano informando se o número é par ou não.

function numero(num1){
    console.log(num1 %2 === 0)
}
 numero(3)
 numero(1124)

//  d) Uma função que recebe um salário bruto e retorna o salário líquido com desconto de 10%, referente ao INSS.

function salario(salarioBruto){
    console.log(salarioBruto - (salarioBruto * 0.1))
}

salario(1800)

