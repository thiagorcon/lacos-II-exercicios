const array = [
    [27, 4, 20, 13, 14],
    [11, 15, 12, 8, 9],
    [5, 5, 12, 16, 4],
    [20, 33, 11, 12, 19],
    [3, 3, 4, 5, 10]
]
//cada array é um time e um indice é um jogador
//let timesCamp = ['flamengo','vasco','fluminense','botafogo','bangu']

for (let i = 0; i < array.length; i++) {
    let jogador = array[i]
    console.log(`jogador - ${i + 1} `);
    for (let j = 0; j < jogador.length; j++) {
          console.log(`temporada ${ j +1} ${jogador[j]}`);
     }
     console.log('-----------');
}


// for (const key in array) {
//     //let soma = 1
//     console.log(array[]);          
//     //console.log(array[soma++]);            
//         }


