//////////////////////// EXERCÍCIO 1 ///////////////////////////

let numero = +prompt('Escolha um número:');

// if (numero % 2 === 0) {
//     if (numero % 3 === 0) {
//         console.log(`${numero} é divisível por 2 e por 3.`);
//     }
// } else {
//     console.log('O número não é divisível por 2 e 3.');
// }

if (numero % 2 === 0 && numero % 3 === 0) {
    console.log(`${numero} é divisível por 2 e por 3.`);
} else {
    console.log('Não é divisível por 2 e 3.');
}
