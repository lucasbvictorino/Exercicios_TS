/*
Crie uma interface Usuario com:
● nome: string
● email: string
● Um método exibirInfo() que retorna uma string com os dados do
usuário formatados.
Depois, crie um objeto baseado nessa interface e chame o método para
testar.

Exemplo de retorno: "Nome: João - Email: joao@email.com"
*/

interface Usuario {
    nome: string;
    email: string;
    exibirInfo: () => string;
}

class Pessoa implements Usuario {
    nome: string;
    email: string;

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }

    exibirInfo() {
        return `Nome: ${this.nome} - Email: ${this.email}`;
    }
}

const pessoa = new Pessoa("João", "joao@email.com");
const result = pessoa.exibirInfo();
console.log(result);