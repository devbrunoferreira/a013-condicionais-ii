//////////////////////// EXERCÍCIO 1 ///////////////////////////

// CHECAR SE O NÚMERO É DIVISÍVEL POR 2 OU POR 3

let numero = +prompt('Escolha um número:');

if (numero % 2 === 0) {
    if (numero % 3 === 0) {
        console.log(`${numero} é divisível por 2 e por 3.`);
    } else {
        console.log(`${numero} é divisível por 2 mas não é divisível por 3.`);
    }
} else if (numero % 3 === 0) {
    console.log(`${numero} é divisível por 3 mas não é divisível por 2.`);
} else {
    console.log(`${numero} não é divisível por 2 e nem por 3.`);
}


// if (numero % 2 === 0 || numero % 3 === 0) {
//     console.log(`${numero} é divisível por 2 ou por 3.`);
// } else {
//     console.log(`${numero} não é divisível por 2 nem por 3.`);
// }

// if (numero % 2 === 0 && numero % 3 === 0) {
//     console.log(`${numero} é divisível por 2 e por 3.`);
// } else {
//     console.log('Não é divisível por 2 e 3.');
// }
