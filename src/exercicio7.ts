/* 
Crie uma interface genérica chamada RespostaAPI<T> com duas
propriedades:
● dados: T
● sucesso: boolean
Depois, crie dois objetos usando essa interface:
● Um com dados do tipo string
● Outro com dados do tipo number[]

Exemplo:
const resposta1: RespostaAPI<string> = { dados: "OK", sucesso: true };
const resposta2: RespostaAPI<number[]> = { dados: [1, 2, 3], sucesso: false };

*/

interface RespostaAPI<T> {
    dados: T;
    sucesso: boolean;
}

const resposta1: RespostaAPI<string> = { dados: "OK", sucesso: true };
const resposta2: RespostaAPI<number[]> = { dados: [1, 2, 3], sucesso: false };

console.log(resposta1);
console.log(resposta2);

