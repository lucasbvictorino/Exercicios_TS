/*
Defina um type alias chamado StatusRequisicao que pode ser "sucesso",
"erro" ou "carregando". Em seguida, implemente uma função
mostrarMensagemStatus que recebe um parâmetro desse tipo e
retorna uma mensagem correspondente.

Exemplo de uso esperado:
mostrarMensagemStatus("carregando"); // "Aguarde... carregando
dados."
*/

type StatusRequisicao = "sucesso" | "erro" | "carregando";

function mostrarMensagemStatus(param: StatusRequisicao) {
    if(param === "sucesso") return "Dados carregados com sucesso.";
    else if(param === "carregando") return "Aguarde... carregando dados.";
    else if(param === "erro") return "Erro. Não foi possível carregar os dados.";
}

let mensagem = mostrarMensagemStatus("sucesso");
console.log(mensagem);
mensagem = mostrarMensagemStatus("carregando");
console.log(mensagem);
mensagem = mostrarMensagemStatus("erro");
console.log(mensagem);