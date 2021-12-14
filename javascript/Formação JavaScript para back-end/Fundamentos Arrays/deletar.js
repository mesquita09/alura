const notas = [10, 7, 8, 5, 10];
// metodo pop remove o ultimo elemento do array
notas.pop();

console.log(notas);

const media = (notas[0] + notas[1] + notas[2] + notas[3])/notas.length;

console.log(`a media é ${media}`);