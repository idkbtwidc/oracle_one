//INSTALAR O LIVE SERVER

//inserindo uma mensagem na tela.
//pode ser em aspas simples por ser JS, mas lembre-se de padronizar durante todo o projeto
alert("Boas vindas ao jogo do número secreto!");

//criando variáveis no JS
//nomear de forma intuitiva a ponto de,
// caso outra pessoa leia seu código, presuma o que ela faz
//shift + atlt + A para comentários em bloco
// número gerado aleatoriamente no intervalo [0 e 1[, multiplicado por 100, acrescid o de 1 e considerado apenas a parte inteira.

let numeroSecreto = parseInt(Math.random()*100 + 1);
// colocar sem aspas ja que vc deseja exibir o valor da variavel em si
console.log(numeroSecreto);
//scanf: msg na tela + receber variável
//lembrar de testar os erros!
let chute;
console.log("Valor do chute:", chute);
console.log("Resultado da comparação:", chute == numeroSecreto);
//transformar o prompt em variável
let tentativas = 1;
//iniciando a lógica para testar se o número
//recebido em prompt é igual ao número secreto predeterminado
//enquanto o chute for diferente do numero secreto continuar o looping
while (chute != numeroSecreto)
    {
        
        let chute = prompt("Escolha um número entre 1 e 100");
        console.log("Valor do chute:", chute);
        console.log("Resultado da comparação:", chute == numeroSecreto);

        //Ao invés de usar o operador de atribuição "=", que atribui o valor da variável "numeroSecreto" à variável "chute", você deve usar o operador de comparação "==", que verifica se os valores das duas variáveis são iguais.
        if (chute == numeroSecreto) {
            //caso acerte de primeira o while para de forma forçada
            break;
          } else {
              if (chute>numeroSecreto){
                  alert(`O número secreto é menor que ${chute}!`);
              } else{
                  alert(`O número secreto é maior que ${chute}!`);
              }
              //tentativas = tentativas + 1;
              tentativas++;
          }
          //para fazer a concatenação de strings e variáveis vc deve substituir as aspas por crase ` e inserir a variavel dentro de cifrao e chaves
            // console.log(`Texto ${variavel}`);
    }
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    alert(`Parabéns, você acertou o número secreto ${numeroSecreto} com ${tentativas} ${palavraTentativa}. :D`);

/*     if (tentativas > 1 ){
       
    } else{
        alert(`Parabéns, você acertou o número secreto (${numeroSecreto}) com ${tentativas} tentativa!`);
    } */
   


