//1-Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.
//1-definição do valor das variáveis
//2-função
//3- return pra variável

//definição de variáveis usando desestruturação de "arrays"

let [altura, peso] = [1.75, 65];

let imc = calculoImc(altura, peso);

console.log(`Seu IMC é: ${imc}`);

//Lembrar da definição do Imc fora da função
function calculoImc(altura, peso) {
  // a função aceita dois parâmetros: altura e peso.
  let imc = peso / altura ** 2;
  return imc;
}

//Testando "Arrow Function"
//let calculoImc = (altura,peso) => (altura * altura)/peso;

//2-Criar uma função que calcule o valor do fatorial de um número passado como parâmetro.

// 4!= 4*3*2*1
// n!= n*(n-1)*(n-2)*(n-3)

// let numero = 4;
// let contador = 1;
// let fatorial = 0;
// function fatorial(n) {
//   contador = 1;
//   fatorial = 0;
//   while (contador < numero) {
//     let calculo = numero * (numero - contador);
//     calculo+= calculo;
//      //operador =+ existe?
//     contador++;
//   }
//   return fatorial();
// }

let numero = 4;

function calcularFatorial(numero) {
  let contador = 1;
  let fatorial = numero; // Inicializa com o próprio número

  while (contador < numero) {
    fatorial *= (numero - contador); // Multiplica por (n - contador)
    contador++;
  }

  return fatorial;
}

console.log(calcularFatorial(numero)); // Deve imprimir 24
