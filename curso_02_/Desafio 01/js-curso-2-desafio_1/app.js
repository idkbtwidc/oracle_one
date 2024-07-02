//1-Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector('h1');
titulo.innerHTML ='Hora do Desafio';
//2-Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function mensagemNoConsole(){
    console.log('O botão foi clicado');
}
//3-Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado.
function  exibirAlerta(){
    alert ('Eu amo JS')
}

//3-Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.

function cidadeBrasil(){
    let cidade = prompt('Insira o nome de uma cidade do Brasil');
    alert(`Estive em ${cidade} e lembrei de você`);
}

//4-Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
//lembrar que o parseInt é no prompt!
function somaInteiros(){
    let a = parseInt(prompt('Insira um número inteiro'));
    let b = parseInt(prompt ('Insira outro número inteiro'));
    alert (`Este é o resultado da soma: ${(a+b)}`);
}