/* 
Crie um type alias chamado Genero que pode ser "masculino" ou
"feminino". Depois, crie uma interface Pessoa com as propriedades
nome (string), idade (number) e genero (Genero). Por fim, implemente
uma função apresentarPessoa que recebe uma Pessoa e retorna uma
mensagem apresentando-a.

Exemplo: "Maria tem 30 anos e se identifica como feminino."

*/

type Genero = "masculino" | "feminino";

interface Pessoa {
    nome: string;
    idade: number;
    genero: Genero;
}

function apresentarPessoa(pessoa: Pessoa) {
    return `${pessoa.nome} tem ${pessoa.idade} e se identifica com o gênero ${pessoa.genero}.`;
}

const pessoa: Pessoa = {nome: "Maria", idade: 30, genero: "feminino"};
const result = apresentarPessoa(pessoa);
console.log(result);