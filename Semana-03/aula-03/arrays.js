const alunos = [
    "João", 
    "Maria", 
    "Pedro", 
    "Ana", 
    "Lucas"
];

console.log("Lista de alunos array completo: " + alunos);

//tamanho do array ou quantidade de elementos do array
console.log("Tamanho de ARRAY de alunos: " + alunos.length);

console.log("Acessando o elemento do meu array no índice 2: " + alunos[2]);

alunos[3] = "Adla";
console.log("Acessandos o elemento do meu array no índice 3: " + alunos[3]);

//Percorrendo o array com FOR
for (let i = 0; i < alunos.length; i++) {
    console.log("Aluno: " + alunos[i]);
}

console.log("-------------------------------");
const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Abacaxi"];
console.log("Lista de frutas array completo: " + frutas);
console.log("Tamanho de ARRAY de frutas: " + frutas.length);
console.log("Acessando o elemento do meu array no índice 2: " + frutas[2]);

//Final
frutas.push("Manga", "Melão");
console.log("Lista de frutas array completos após push: " + frutas);

frutas.pop();
console.log("Lista de frutas array completos após pop: " + frutas);

//Início
frutas.unshift("Kiwi", "Cajá Manga");
console.log("Lista de frutas array completos após unshift: " + frutas);

frutas.shift();
console.log("Lista de frutas array completos após shift: " + frutas);

frutas.indexOf("Jayne");
console.log("Índice do elemento Banana: " + frutas.indexOf("Jayne")); 

console.log("O array de frutas inclui a fruta Laranja? " + frutas.includes("Jayne"));

//SPLICE - Coringa
const linguagens = ["JavaScript", "Python", "Java", "C#", "C++"];

//Remove 2 itens a partir do índice 1
linguagens.splice(1, 2);

console.log(linguagens); // Resultado: ["JavaScript", "C#", "C++"]

//2 apenas adicionar elementos
const produtos = ["Camiseta", "Calça"];

produtos.splice(1, 0, "Tênis", "Boné");

console.log(produtos);

//3 substituir elementos
const cores = ["Vermelho", "Verde", "Azul"];

cores.splice(1, 1, "Amarelo", "Cinza");

console.log(cores);