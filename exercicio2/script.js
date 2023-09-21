// # Exercício 2
// Crie um programa que peça um input de número para o usuário. Com este número, o código deve imprimir a **tabuada** do número, de 1 a 10.
// **Utilize o for...in para resolver**
// Exemplo com entrada **`7`**:
// 7
// 14
// 21
// 28
// 35
// 42
// 49
// 56
// 63
// 70
let informe = +(prompt('Informe um número para a tabuada'))
let num = [1,2,3,4,5,6,7,8,9,10]
for (const key in num) {
     console.log(`${num[key]} x ${informe}  = ${informe * num[key]}`);

  }




