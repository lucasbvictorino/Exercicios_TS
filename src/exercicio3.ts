/*
Crie uma interface chamada Livro com os seguintes campos: titulo,
autor, anoPublicacao.
Depois, escreva uma função resumirLivro que recebe um objeto do tipo
Livro e retorna uma string como:

"O livro 'Dom Casmurro' foi escrito por Machado de Assis em 1899."

*/

interface Livro {
    titulo: string;
    autor: string;
    anoPublicacao: string;
}

function resumirLivro(umLivro: Livro) {
    return `O livro ${umLivro.titulo} foi escrito por ${umLivro.autor} em ${umLivro.anoPublicacao}.`
}

const livro: Livro = {titulo: "Dom Casmurro", autor: "Machado de Assis", anoPublicacao: "1899"};
const result = resumirLivro(livro);
console.log(result);