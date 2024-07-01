//1-Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.

contador= 1;
while (contador <=10){
    console.log(contador);
    contador++;
}


//2-Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
contador2= 10;

while (contador2 >=0){
    console.log (contador2);
    contador2--;
}

//3-Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.

let regressiva = prompt ('Insira um número: (contagem regressiva)');

while (regressiva>=0){
    console.log (regressiva)
    regressiva--;
}

//4-Crie um programa de contagem progressiva. Peça um número e conte de 0 até esse número, usando um loop while no console do navegador.

let progressiva = prompt ('Insira um número: (contagem progressiva)');
contador3=0;
while (contador3 <= progressiva){
    console.log(contador3);
    contador3++;
}