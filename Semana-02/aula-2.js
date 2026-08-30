let nomeAluno ="Julia";
let salario = 2600;
let brasilGanhou = false;
let valorIndefinido;
let valorNulo = null;
let simbolo = Symbol("id");
let valorBigInt = 1234567890123456789012345678901234567890n;

let aluno = {
    nome: "Julia",
    idade: 20,
    curso: "Engenharia de Software",
    ativo: true,
    [simbolo]: 40028922
};

let alunos = ["Julia","Pedro","Ana","Lucas"];
console.log("nomeAluno: " + typeof nomeAluno);
console.log("salario: " + typeof salario);
console.log("brasilGanhou: " + typeof brasilGanhou);
console.log("valorIndefinido: " + typeof valorIndefinido);
console.log("valorNulo: " + typeof valorNulo);
console.log("simbolo: " + typeof simbolo);
console.log("valorBigInt: " + typeof valorBigInt);
console.log("aluno: " + typeof aluno);
console.log("alunos: " + typeof alunos);

let naoENumero = 2000 * "JAYNE";
console.log("naoENumero: " + naoENumero);

let valorA = 10;
let valorB = 5;
let resultado = valorA % valorB;

console.log("resultado: " + resultado);
console.log("valorA + valorB: " + (valorA + valorB));
console.log("valorA - valorB: " + (valorA - valorB));
console.log("valorA * valorB: " + (valorA * valorB));
console.log("valorA / valorB: " + (valorA / valorB));
console.log("valorA % valorB: " + (valorA % valorB));
console.log("valorA ** valorB: " + (valorA ** valorB));

let valorC = 2;
let valorD = 5;
//let resultadoSoma = valor

console.log("Atribuicao: " + valorC);
console.log("Atribuicao de adicao: " + (valorC += valorD));
console.log("Atribuicao de subtracao: " + (valorC -= valorD));
console.log("Atribuicao de multiplicacao: " + (valorC *= valorD));
console.log("Atribuicao de divisao: " + (valorC /= valorD));
console.log("Atribuicao de resto: " + (valorC %= valorD));
console.log("Atribuicao de exponenciacao: " + (valorC **= valorD));

let verdadeiro = true;
let falso = false;

console.log("AND && : " + (verdadeiro && falso));
console.log("OR || : " + (verdadeiro || falso));
console.log("NOT ! : " + (!verdadeiro));

let valorE = 10;
let valorF = 5;

console.log("valorE == valorF: " + (valorE == valorF));
console.log("valorE != valorF: " + (valorE != valorF));
console.log("valorE === valorF: " + (valorE === valorF));
console.log("valorE !== valorF: " + (valorE !== valorF));
console.log("valorE > valorF: " + (valorE > valorF));
console.log("valorE < valorF: " + (valorE < valorF));
console.log("valorE >= valorF: " + (valorE >= valorF));
console.log("valorE <= valorF: " + (valorE <= valorF));

let contador = 1;
console.log("contador++: " + contador++);
console.log("variavel contador: " + contador);

let contadorDescremento =100;
console.log("contador--: " + contadorDescremento--);
console.log("variavel contadorDescremento: " + contadorDescremento);

let contadorAntes = 1;
console.log("++contador:" + (++contadorAntes));
console.log("variavel contadorAntes: " + contadorAntes);