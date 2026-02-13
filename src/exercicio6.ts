/* 
Crie uma função genérica chamada retornarElemento<T> que recebe
dois parâmetros:
● Um array de tipo genérico T
● Um número index

A função deve retornar o elemento do array na posição indicada. Teste
a função com um array de strings e um de números.
Exemplo:

retornarElemento([10, 20, 30], 1) => 20
retornarElemento(["a", "b", "c"], 0) => "a"
*/


function retornarElemento<T>(lista: T[], index: number) {
    return lista[index];
}

const result1 = retornarElemento([10, 20, 30], 1);
const result2 = retornarElemento(["a", "b", "c"], 0);
console.log(result1);
console.log(result2);