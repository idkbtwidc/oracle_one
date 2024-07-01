//inserindo uma mensagem na tela.
//pode ser em aspas simples por ser JS, mas lembre-se de padronizar durante todo o projeto
alert("Boas vindas ao jogo do número secreto!");

//criando variáveis no JS
//nomear de forma intuitiva a ponto de,
// caso outra pessoa leia seu código, presuma o que ela faz
//shift + atlt + A para comentários em bloco

let numeroSecreto = 5;
// colocar sem aspas ja que vc deseja exibir o valor da variavel em si
console.log(numeroSecreto);
//scanf: msg na tela + receber variável
//lembrar de testar os erros!
let chute = prompt("Escolha um número entre 1 e 10");
//transformar o prompt em variável

//iniciando a lógica para testar se o número
//recebido em prompt é igual ao número secreto predeterminado
//Ao invés de usar o operador de atribuição "=", que atribui o valor da variável "numeroSecreto" à variável "chute", você deve usar o operador de comparação "==", que verifica se os valores das duas variáveis são iguais.
if (chute == numeroSecreto) {
  //para fazer a concatenação de strings e variáveis vc deve substituir as aspas por crase ` e inserir a variavel dentro de cifrao e chaves
  // console.log(`Texto ${variavel}`);
  alert(`Parabéns, você acertou o número secreto! (${numeroSecreto})`);
} else {
  alert(`Você errou! O número secreto era: (${numeroSecreto})`);
}
