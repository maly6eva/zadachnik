// function zamykaniya(zam) {
//     return function (z){
//         return zam + z
//     }
// }
// let za = zamykaniya(2)
// console.log(za(4))

//
// const x = 1;
// const y = function () {
//     const i = 'Hi'
//     console.log(i)
// }
//замыканием могут быть не только функции в функции,
// замыкание может быть и в простом примере одной функции
//замыкание - функция которая запоминает свои внешние переменные и может получить к ним доступ


// let number = 5;
//
// function logNumber() {
//     let num = 4;
//     console.log(num)
// }
// number = 7;
// logNumber()

function create() {
    let c = 0;

    const myF = function() {
        c = c + 1; debugger
        return c;debugger
    }
    return myF()
}
const inc = create()
const s1 = inc(); debugger
const s2 = inc(); debugger
const s3 = inc(); debugger

console.log(s1, s2, s3)