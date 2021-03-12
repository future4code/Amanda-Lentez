// Exercício 1
// Realiza uma operação aritmética que calcula o resto da divisão quando um
// número inteiro é dividido por outro. Nesse caso, se o resto da 
// divisão por 2 for igual a 0 (indicando que o número inserido pelo usuário é o "2"),
// o console retornará que o usuário "Passou no teste." Caso o resto da divisão por 2
// seja um número diferente de 0, a resposta será "Não passou no teste."

// Exercícío 2
// a. O código serve para retornar os valores de acordo com a fruta comprada pelo usuário. Além disso,
// é feito em switch case, facilitando a codificação do if else, assim o desenvolvedor não precisa ficar
// correlacionando cada variável com cada condição.
// b. "O preço da fruta, maçã, é R$ 2.25"
// c. Ao remover o break, o loop (laço) deixa de ser interrompido e retorna o valor default,
// retornardo a mensagem "O preço da fruta, Pêra, é R$ 5"

// Exercício 3
// a. Solicitando que o usuário insira um número.
// b. Caso o usuário insira o número "10", logo maior que 0, o console
// retorna a mensagem "Esse número passou no teste". Caso insira o número
// "-10", não retorna mensagem nenhuma, dando erro no console.
// c. Sim, ao inserir qualquer número que não seja maior que "0",
// retorna erro no console. Isso se deve ao fato da da mensagem do primeiro 
// escopo englobar apenas a possibilidade de numeros maiores que 10. 
// Teria que inserir um escopo filho [else(numero < 0)] dentro do pai
// para retornar a mensagem "Essa mensagem é secreta!".

// Exercício 4

// let idade = Number(prompt ("Insira a sua idade"))

// if (idade >=== 18) {
//     console.log("Você pode dirigir")
// } else {
//     console.log("Você não pode dirigir")
// }

// Exercício 5

// let periodoLetra = prompt ("Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
// let letra = String (periodoLetra)

// if (letra === "M") {
//     console.log ("Bom dia!")
// } else if (letra === "V") {
//     console.log ("Boa tarde!")
// } else (letra === "N") {
//     console.log ("Boa noite!")
// }

// Exercício 6

// let periodoLetra = prompt ("Digite M (matutino) ou V (Vespertino) ou N (Noturno)")
// let letra = String (periodoLetra)
// switch (periodoLetra) {
//     case "M":
//         letra = "Bom dia!"
//         break
//     case "V":
//         letra = "Boa tarde!"
//         break
//     case "N":
//         letra = "Boa noite!"
//         break
// }



