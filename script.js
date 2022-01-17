//1 - Crie uma condição que exiba uma mensagem no console se a idade for maior que 18
let idade = 20
if(idade > 18){
    console.log("Você é maior de idade")
} else {
    console.log("Vocé não é maior de idade")
}
//2 - Crie uma condição que exiba uma mensagem no console se você for maior de idade E a condição humana seja true
let humano = true
if (idade >= 18 && humano == true) {
    console.log("Você é maior de idade")
} else {
    console.log("Você infelizmente não é maior de idade")
}
//3 - Criar uma condição que exiba uma mensagem no console se você fizer aniversário em Janeiro OU Dezembro
let mes =  "Dezembro"
 if ( mes == "Janeiro" || mes == "Dezembro") {
     console.log("Você faz aniversário em Janeiro OU Dezembro")
 } else {
     console.log("Você não faz aniversário em Janeiro OU Dezembro")
 }

//*** Exercícios bônus
//4 - Criar uma condição que exiba uma mensagem no console se seu nome começar com a letra R
const nome = "Ivan"
if(nome.substring(0, 1) === "R" ) {
    console.log("Seu nome começa com a letra R" )
} else {
    console.log("Seu nome não começar com a letra R")
}
//5 - Criar uma condição que exiba uma mensagem no console se seu sobrenome tenha mais de 6 letras OU seu nome começar com a letra E
const sobrenome = "Fernandes"
if (sobrenome.length >= 6 || sobrenome.substring(0, 1) === "E") {
    console.log("Seu sobrenome tem mais de 6 letras OU seu nome começa com a letra E")
} else {
    console.log("Seu sobrenome não tem mais de 6 letras OU seu nome  não começa com a letra E")
}

// //2 - Crie uma condição que exiba uma mensagem 
// //no console se você for maior de idade E a condição
// // humana seja true
// let humano = true

// if(idade >= 18  && humano == true){
//     console.log("Você é humano e maior de idade!!")
// }
//  let i = -5
//   while( i <= 100) {
//       console.log(i)
//       i += 2
//   }

//   for (let a = -5; a<=100; a +=2){
//       console.log(a)
//   }