//1-Crie um programa que utilize o console.log para exibir uma mensagem de boas-vindas.

console.log("Seja bem vindo(a)!");

//2-Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o console.log para exibir a mensagem "Olá, [seu nome]!" no console do navegador.

let nome = "Nikolas";
console.log(`Olá, ${nome}!`);

//3-Crie uma variável chamada "nome" e atribua a ela o seu nome. Em seguida, utilize o alert para exibir a mensagem "Olá, [seu nome]!" .

alert (`Olá, ${nome}!`);

//4-Utilize o prompt e faça a seguinte pergunta: Qual a linguagem de programação que você mais gosta?. Em seguida, armazene a resposta em uma variável e mostre no console do navegador.
let ling = prompt ('Qual a linguagem de programação que você mais gosta?');
console.log (ling);

//5-Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a soma desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A soma de [valor1] e [valor2] é igual a [resultado]." no console.

let valor1 = prompt ('Insira um número para valor1:');
let valor2 = prompt ('Insira um número para valor2');

let resultado = valor1 + valor2;
console.log (`A soma de ${valor1} e ${valor2} é igual a ${resultado}`);

//6-Crie uma variável chamada "valor1" e outra chamada "valor2", atribuindo a elas valores numéricos de sua escolha. Em seguida, realize a subtração desses dois valores e armazene o resultado em uma terceira variável chamada "resultado". Utilize o console.log para mostrar a mensagem "A diferença entre [valor1] e [valor2] é igual a [resultado]." no console.

let valor3 = prompt ('Insira um número para valor1:');
let valor4 = prompt ('Insira um número para valor2');

let resultado2 = valor3 - valor4;
console.log (`A diferença de ${valor3} e ${valor4} é igual a ${resultado2}`);

//7-Peça ao usuário para inserir sua idade com prompt. Com base na idade inserida, utilize um if para verificar se a pessoa é maior ou menor de idade, exibindo uma mensagem apropriada no console.

let idade = prompt ('Insira sua idade:');

if (idade>18){
    console.log('Você é maior de idade');
} else {
    console.log ('Você é menor de idade');
}

//8-Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt('Insira um número:');
if (numero>0){
    console.log ('O número é positivo');
} else if (numero ==0) {
    console.log ('O número é 0');
}else {
    console.log ('O número é negativo');
}

//9-Use um loop while para imprimir os números de 1 a 10 no console.

contador = 1;
while (contador <=10){
    console.log (contador);
    contador++;
}

//10-Crie uma variável "nota" e atribua um valor numérico a ela. Use if-else para determinar se a nota é maior ou igual a 7 e exiba "Aprovado" ou "Reprovado" no console.

let nota = 5;

if (nota >= 7){
    console.log ('Aprovado');
} else {
    console.log ('Reprovado');
}

//11-Use o Math.random para gerar qualquer número aleatório e exiba esse número no console.

console.log(Math.random());

//12-Use o Math.random para gerar um número inteiro entre 1 e 10 e exiba esse número no console.

let random = parseInt(Math.random () * 10 + 1);
console.log (random);

//13-Use o Math.random para gerar um número inteiro entre 1 e 1000 e exiba esse número no console.

let random2 = parseInt(Math.random () * 1000 + 1);
console.log (random2);