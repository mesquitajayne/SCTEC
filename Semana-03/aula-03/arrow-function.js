function olaMundo(nome) {
console.log("Olá, Mundo! " + nome);
}

olaMundo("Jayne");

let olaMundo2 = (nome1) => console.log(`Olá Mundo! ${nome1}`);

olaMundo2("Adla");

function somar(a, b) {
    return a + b;
}

let somar2 = (a, b) => {
   const resultado = a + b;
   return resultado;
};