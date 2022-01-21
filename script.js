//Crie uma função que exiba uma mensagem no console.
function mensagem() {
    console.log ("Função número 01 - Check")
}

//Crie uma função que receba o seu nome como (parâmetro) e exiba no console.
function mensagem1(name) {
    console.log (`Olá ${name}, como vai? Seja bem vindo ao vai na web!`)
}

console.log(mensagem1("Andressa"))

//Crie uma função que receba um nome, um número, e um estilo musical (parâmetros) e exiba no console.
function mensagem2(name, number, musical) {
    console.log (`O(a) aluno(a) ${name} possui ${number} anos e prefere o estilo musical ${musical}.`)
}
console.log(mensagem2("Matheus", 24, "pop-rock"))
console.log(mensagem2("Bianca", 32, "sertanejo universitário"))
console.log(mensagem2("Juliana", 27, "funk"))

//Crie uma função que receba um filme, uma música (parâmetros) e exiba no console.
function mensagem3(film, musicalFilm) {
    console.log(`O filme "${film}" tem como música tema a canção ${musicalFilm}.`)
}
console.log(mensagem3("Titanic", " My Heart Will Go On - Céline Dion"))
console.log(mensagem3("Missão Impossível", "I Will Always Love You - Whitney Houston"))

//  
function bonus(number) {
    return number * 3   
}

console.log(bonus(4))
console.log(bonus(10))