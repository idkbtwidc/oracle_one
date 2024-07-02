let numeroSecreto = gerarNumeroAleatorio();


//document seleciona o html
//querySelector('NomeDaTag'); seleciona a tag
//let titulo = document.querySelector('h1');

//seleciona a variável titulo e escolhe alterar dentro do html 
//titulo.innerHTML = 'Jogo do número secreto';


//função com parâmetros para alterar o texto do html utilizando as tags
function exibirTextonaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextonaTela('h1', 'Jogo do número secreto');
exibirTextonaTela('p', 'Insira um número de 1 a 10');

//criação de função que será chamada onclick no botão do index (chute)
//funções normlamente tem uma só responsabilidade
function verificarChute() {
    let chute = document.querySelector('input').value; //.value para pegar apenas o valor do input já que ele não é só um texto, é um valor que foi colocado la dentro
    console.log(chute == numeroSecreto);

}
//return pois ela gera uma nova informação que precisa ser armazenada no numeroSecreto
function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}