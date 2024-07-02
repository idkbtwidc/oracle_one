//1-Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro.

//Testando "Arrow Function"
//let calculoImc = (altura,peso) => (altura * altura)/peso;

let altura = 1.75;
let peso = 65;
let resultadoImc = calculoImc(altura, peso);
console.log(`Seu IMC é: ${resultadoImc}`);

//Lembrar da definição do resultadoImc fora da função
function calculoImc(altura, peso) {
  let resultadoImc = (altura * altura)/peso;
  return resultadoImc;
}


//2-Criar uma função que calcule o valor do fatorial de um número passado como parâmetro.
let numero = 4;
function fatorial (numero) {
    factorialize 
}