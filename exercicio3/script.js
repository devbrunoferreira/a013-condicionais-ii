//código a ser reescrito

// if(nome === "José"){
// 	console.log("Oi, Zé!");
// } else {
// 	console.log("Olá, "+nome);
// }

// if(idade >= 18){
// 	console.log("pode tirar carteira de motorista!");
// } else {
// 	console.log("Ainda não pode tirar carteira de motorista");
// }

let nome = prompt('Qual é seu nome?');

nome === 'José' ? console.log('Oi, Zé!') : console.log(`Olá, ${nome}.`);

let idade = +prompt('Quantos anos você tem?');

idade >= 18 ? console.log(`${nome} já pode tirar carteira de motorista!`) : console.log('Você ainda não pode tirar carteira de motorista.');