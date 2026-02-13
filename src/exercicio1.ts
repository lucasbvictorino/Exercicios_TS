/*
Crie uma variável total com o valor 100. Depois, crie uma função

adicionar que receba dois parâmetros e retorne a soma deles. Não use

anotações explícitas de tipo. Deixe que o TypeScript faça a inferência

automaticamente.
*/ 

let total = 100;

function adicionar(num1 = 0, num2 = 0) {
    let result = num1 + num2;
    return result;
}

const resultado = adicionar(20, 30);

console.log(resultado);