//

/* 
if(condicao) {

}
*/

const idade = 15;

if(idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você é menor de idade.");
}

const respostaIdade = idade < 18 ? "menor de idade" : "maior de idade";

console.log(" resposta de idade : " + respostaIdade);

const nota = 5;

const respostaNota = nota < 6 ? "Você está em recuperação." : nota === 6 ? "Você passou na média." : nota === 7 ? "Você passou com nota um pouco acima da média." : "Verifique sua nota com o professor.";

if(nota < 6) {
    console.log("Você está em recuperação.");
} else if(nota === 6) {
    console.log("Você passou na média.");
} else if(nota ===7) {
    console.log("Você passou com nota um pouco acima da média.");
} else {
    console.log("Verifique sua nota com o professor.");
}

//condicao ? valor : valor;


