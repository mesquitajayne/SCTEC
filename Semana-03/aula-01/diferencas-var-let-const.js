// DIFERENCAS ENTRE PALAVRA-CHAVE VAR, LET E CONST
// VAR
//Não respeita escopo de bloco
//Pode ser redeclarada
//Pode ser reatribuída
//Sofre hoisting, ou seja, é possível acessar a variável antes de sua declaração

var idade = 29;
console.log("idade 1: " + idade); // 29

if (true) {
    var nome = "Jayne";
}

console.log(nome); // Jayne

var idade = 50;
console.log("idade 2: " + idade); // 50
// VAR não respeita escopo de bloco, apenas escopo de função. Por isso, a variável nome é acessível fora do bloco if, outro problema é que conseguimos declarar a variável nome novamente, o que pode gerar problemas no código.

//HOISTING
console.log(matricula);

var matricula = 123456;

//LET
//Respeita escopo de bloco
//Não permite redeclaração
//Pode ser reatribuída
//Sofre hoisting, mas não é inicializada

if (true) {
    let nome2 = "Jayne";
}

    // console.log(nome2); // Jayne

    let aluna = "Alessandra";
    // let aluna = "João";

    console.log(aluna);

    aluna = "Lucas"
    console.log(aluna);

    // CONST
    //Não permite reatribuição de valor

    const idade3 = 10;
    // idade3 = 50;

    if (true) {
    const curso = "Logistica";
}

    console.log(curso ); // Jayne
