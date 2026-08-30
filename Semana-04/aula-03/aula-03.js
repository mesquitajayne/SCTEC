const produtos = [
    {nome: "Notebook", preco: 3500, estoque: 10},
    {nome: "Mouse", preco: 128, estoque: 15},
    {nome: "Monitor", preco: 900, estoque: 8}
];

//FIND 
console.log("metodo find executado no array de produtos");

const item = produtos.find(produto => produto.nome === "Notebook");
console.log("encontrou o primeiro produto: ", item);


console.log("----------------------------------------------------");
//FILTER
console.log("metodo filter executado no array de produtos");
const itens = produtos.filter(produto => produto.preco > 1000);
console.log("encontrou os produtos com preço maior que 1000: ", itens);

//MAP
console.log("----------------------------------------------------");
console.log("Metodo map executado no array de produtos");
const nomes = produtos.map(p => p.nome);
console.log("retornou um array com os nomes dos produtos: ", nomes);

const nomeEPreco = produtos.map(p => `${p.nome} custa R$ ${p.preco}`);
console.log("retornou um array com os nomes e preços dos produtos: ", nomeEPreco);

//EVERY
console.log("----------------------------------------------------");
console.log("Metodo every executado no array de produtos");
const todosProdutosSaoCaros = produtos.every(p => p.preco > 1000);
console.log("todos os produtos custam mais que 1000 reais?", todosProdutosSaoCaros);

//SOME
console.log("----------------------------------------------------");
console.log("Metodo some executado no array de produtos");
const algumProdutoBarato = produtos.some(p => p.preco < 1000);
console.log("Algum produto custa menos que 1000 reais?", algumProdutoBarato);

//REDUCE
console.log("----------------------------------------------------");
console.log("Metodo reduce executado no array de produtos");
const somaPrecos = produtos.reduce((acumulador, produto) => {
    return acumulador + produto.preco;
}, 0);
console.log("Soma dos preços dos produtos: ", somaPrecos);

const listaNomesConvidados = ["Jayne", "Manoel", "Adla", "Victor", "Lucas"];

const textoFinal = listaNomesConvidados.reduce((acumulador, nomeAtual, index) => {
    if (index === 0) return nomeAtual;

    return `${acumulador}, ${nomeAtual}`;
}, "");

console.log("Texto com os nomes dos convidados da minha lista: ", textoFinal);
//-------------------------------------------------------------------

const clientes = [
    {id: 1, nome: "Ana"},
    {id: 2, nome: "Carlos"},
    {id: 3, nome: "Mariana"}
];

const cliente = clientes. find(c => c.id === 2);

console.log(cliente);

//Ex. 2
const produtos = [
{ nome: "Notebook", preco: 3500},
{ nome: "Mouse", preco: 120 },
{ nome: "Monitor", preco: 900},
{ nome: "Teclado", preco: 184 }
];

const produtosCaros produtos.filter(produto => produto.preco > 500);

console.log(produtosCaros);

//Ex. 3
const produtos = [
{ nome: "Notebook", estoque: 8},
{ nome: "Mouse", estoque: 15},
{ nome: "Monitor", estoque: 3}
];

const disponiveis = produtos.every(produto => produto.estoque > 0);

console.log(disponiveis);
