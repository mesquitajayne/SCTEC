const nota1 = 8;
const nota2 = 7;

const media = (nota1 + nota2) / 2;

console.log(media);

//------------------

const nota3 = 10;
const nota4 = 6;

const media2 = (nota3 + nota4) / 2;

console.log(media2);

//------------------

const nota5 = 9;
const nota6 = 8;

const media3 = (nota5 + nota6) / 2;

console.log(media3);

//------------------

function saudacao(nome) {
    console.log("Olá, seja bem-vindo(a) " + nome);
}

saudacao("Everton");
saudacao("Alessandra");
saudacao("Rhona");
saudacao("Ramon");

function soma (a, b) {
    return a + b;
}

const resultado = soma(1,3);
console.log(resultado);

function sacarDinheiro(saldo, valorSaque) {
    if (valorSaque > saldo) {
        return "Saldo insuficiente";
    } 
    saldo -= valorSaque;
    return "Saque realizado com sucesso! Saldo atual: " + saldo;
    }

    const resultadoSaque = sacarDinheiro(100, 500);
    console.log("Resultado de saque na conta: " + resultadoSaque);

    function cadastrarUsuario(nome) {
        if (nome === "") {
            console.log("Erro: Nome do usuário não pode ser vazio.");
            return;
        }

        console.log("Usuário " + nome + " cadastrado com sucesso!");
    }

    cadastrarUsuario("Everton");
    cadastrarUsuario("");
