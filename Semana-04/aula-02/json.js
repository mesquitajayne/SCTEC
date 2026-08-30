const aluno = {
    nome: "Jayne",
    idade: 29,
    curso:"Back-end Node.js",
    "nota final": 9.5,
    codigoAluno: 4561,
    estaMatriculado: true
};

const alunoConvertidoJSON = JSON.stringify(aluno);
console.log("aluno convertido para JSON: " + alunoConvertidoJSON);

const alunoConvertidoObjeto = JSON.parse(alunoConvertidoJSON);
console.log("aluno convertido de volta para objeto: ", alunoConvertidoObjeto);

const cliente = {
    nome : "Jayne",
    idade : 29,
    endereco : {
        rua : "Rua das Flores",
        numero : 123,
        cep : "12345-678",
        cidade : "Blumenau",
        estado : "SC",
        pais : "Brasil"
    }
};

console.log("cliente");

const jsonCliente = JSON.stringify(cliente);
console.log(jsonCliente);

// Ex. 2
const json = '{"nome":"Jayne","idade":29,"cargo": "Técnico em Suporte"}';

const funcionario = JSON.parse(json);

console.log(funcionario.nome);
console.log(funcionario.cargo);

//Ex. 3
const livros = [
    {titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkein", ano: 1954},
    {titulo: "O Pequeno Principe", autor: " Antoine de Saint-Exupéry", ano: 1943},
    {titulo: "Three Lives, Three Worlds, Ten Miles of Peach Blossoms", autor: "Tang Qi Gong Zi", ano: 2009}
];

for (let i = 0; i < livros.length; i++) {
    console.log(livros[i].titulo);
}

const alunos = [
    {nome: "Victor", idade: 15},
    {nome: "Adla", idade: 8},
];

alunos.push({
    nome: "Joelder",
    idade: 27
});

console.log(alunos);

// Ex. 4
const usuarios = [
    {nome: "Jayne", email: "jayne@jayne.com"},
    {nome: "Manoel", email: "manoel@manoel.com"},
    {nome: "Adla", email: "adla@adla.com"}
];

for (let i = 0; i < usuarios.length; i++) {
    console.log(usuarios[i].nome + " - " + usuarios[i].email);
}