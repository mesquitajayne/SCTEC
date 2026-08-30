const dia = 3;

switch(dia) {
    case 1:
        console.log("Domingo");
        break;
    case 2:
        console.log("Segunda");
        break;
    case 3:
        console.log("Terça");
        break;
    default:
        console.log("Dia inválido");
}

const cor = "vermelho";

switch(cor) {
    case "azul":
        console.log("A cor é azul");
    case "verde":
        console.log("A cor é verde");
    case "vermelho":
        console.log("A cor é vermelho");    
    default:
        console.log("Cor inválida");
}

const fruta = "melão";

switch(fruta) {
    case "banana":
    case "maçã":
    case "uva":
        console.log("tudo é fruta");
        break;
}

const opcao = 1;

switch(opcao) {
    case 1:
        console.log("Executou o 1");
    case 2:
        console.log("Executou o 2");
    case 3:
        console.log("Executou o 3");
}
console.log("Fim do programa");