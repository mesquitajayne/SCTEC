
//ESCOPO GLOBAL DE VARIÁVEL
const empresa = "Senai";

function mostrarEmpresa() {
    console.log(empresa);
}

mostrarEmpresa();
console.log(empresa);

//ESCOPO DE BLOCO - {}

if (true) {
    nome = "Jayne";
    }

   // console.log("nome: " + nome);


    //ESCOPO DE FUNÇÃO
    function calcularMedia() {
        let media = 8;
        console.log("Média: " + media);
    }

    calcularMedia();

    console.log("media fora da funcao: " + media);


