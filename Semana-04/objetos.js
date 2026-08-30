const produto = {
    nome: "Notebook",
    preco: 3500,
    estoque: true,
    "fornecedor principal": "Dell",
    12345: "Código do produto",
    "$ segundo fornecedor": "hp"
};

// console.log("objeto produto: " + produto);

//acesso por notação de ponto
console.log(produto.nome);

//acesso por notação de colchetes
console.log(produto["fornecedor principal"]);


//Alterando propriedade do objeto

produto.preco = 2500
console.log("objeto após alteração do preço: " + produto.preco);

produto["fornecedor principal"] = "Lenovo";
console.log("objetos após alteração fornecedor principal: " + produto["fornecedor principal"]);

// Adicionando nova propriedade ao objeto
produto.peso = 3.5;
produto.cor = "cinza";
produto.memoria = "16GB";
produto["tamanho da tela"] = "15,6 polegadas";
produto["$ processador"] = "Intel i7";

console.log("objeto após adição de novas propriedades: " + produto.peso + ", " + produto.cor + ", " + produto.memoria + ", " + produto["tamanho da tela"] + ", " + produto["$ processador"]);

//remover propriedade do objeto
delete produto.estoque;
console.log("objeto após remoção da propriedade estoque: " + produto.estoque);

//ARRAY DE OBJETOS
const arrayProdutos = [
    {
        nome: "Notebook",
        preco: 3500,
        estoque: true,
    },
    {
        nome: "Smartphone",
        preco: 2000,
        estoque: false,
    },
    {
        nome: "Notebook",
    preco: 3500,
    estoque: true,
    "fornecedor principal": "Dell",
    12345: "Código do produto",
    "$ segundo fornecedor": "hp"
    }
];

//acesso a um objeto dentro do array
console.log("Acessando o nome do primero produto do array: " + arrayProdutos[0].nome);

//adicionar um objeto dentro do array
arrayProdutos.push({
    nome: "Tablet",
    preco: 1500,
    estoque: true,
});

console.log("Acessando o array de produtos após adição de um novo produto: " + arrayProdutos[3].nome);

//remover um objeto dentro do array
arrayProdutos.pop();
console.log("Acessando o array de produtos após remoção do último produto: " + arrayProdutos.length);

arrayProdutos.splice(1, 1);
console.log("Acessando o array de produtos após remoção do segundo produto: " + arrayProdutos.length);

//alterar um objeto dentro do array
arrayProdutos[0].preco = 3000;
console.log("Acessando o array de produtos após alteração do preço do primeiro produto: " + arrayProdutos[0].preco);

//percorrer o array de objetos
for (let i = 0; i < arrayProdutos.length; i++) {
    console.log("Percorrendo o array de produtos: " + arrayProdutos[i].nome + " - " + arrayProdutos[i].preco);
}

//EX.1
const livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
}

console.log("Ex.1 - Acessando o título do livro: " + livro.titulo);
console.log("Ex.1 - Acessando o autor do livro: " + livro.autor);

livro.genero = "Fantasia";
console.log("Ex.1 - Acessando o gênero do livro: " + livro.genero);