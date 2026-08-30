function mostrarMensagem(){
    console.log("Olá!");
}

mostrarMensagem();
mostrarMensagem();
mostrarMensagem();

// FOR

// for (inicialização; condição; incremento) {

// }

for (let i = 1; i <= 5; i++){
    console.log("valor da minha variavel de controle i:" + i)
}

console.log("Fim do laço for");

function calcularMediaRestaurante(avaliacoes) {
    let soma = 0;

    for (let i = 0; i < avaliacoes.length; i++) {
        soma += avaliacoes[i];
    }

    const media = soma / avaliacoes.length;
    console.log("Média das avaliações do restaurante é: " + media);
}

const notasRestaurante = [4, 5, 3, 4, 5];
calcularMediaRestaurante(notasRestaurante);

for(let i = 10; i >= 1; i--){
    console.log("Contagem regressiva: " + i);
}

for (let i = 1; i <= 10; i++) {

    if (i === 6) {
        continue;
    }
    console.log("Contagem até igual a 6: " + i);
}

console.log("Fim do laço for da ultima contagem");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }

    console.log("Exe 3: numeros impares " + i);
}

let contador = 0;

while (contador <= 10) {
    contador++;

    if (contador === 3) {
        continue;
    }

    if (contador === 5) {
        break;
    }

    console.log(`Número: ${contador}`);
}