//1-Criar uma função que exibe "Olá, mundo!" no console.
function msgConsole() {
  console.log("Olá Mundo!");
}
msgConsole();
//2-Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.

function msgNome(nome) {
  console.log(`Olá, ${nome}`);
}
msgNome ('Nikolas');
//3-Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function dobroNumero(numero) {
  return numero * 2;
}
let resultadoDobro = dobroNumero (10);
console.log (resultadoDobro);

//4-Criar uma função que recebe três números como parâmetros e retorna a média deles.
function mediaNumeros(a, b, c) {
  return (a + b + c) / 3;
}
let media = mediaNumeros(10,5,35);
console.log(media);

//5-Criar uma função que recebe dois números como parâmetros e retorna o maior deles.

function maiorNumero(d, e) {
//se d>e então return d, caso contrário return e
 return d > e ? d : e

}
let resultadoMaiorNumero = maiorNumero (7, 15);
console.log (resultadoMaiorNumero );

//6-Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
let quadrado = (x) => x * x;
let resultadoQuadrado = quadrado (4);
console.log (resultadoQuadrado);

//let quadrado = (x) => x * x;
//é LITERALMENTE a mesma coisa que
//function quadrado(x) {
//return x * x;
//}
