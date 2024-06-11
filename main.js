// №1
//
// Дано число. Проверьте, отрицательное оно или нет. Выведите об этом информацию в консоль.
//
// function all(num) {
//     if(num < 0) {
//         console.log('число отрицательное')
//     }else if(num > 0){
//         console.log('число положительное')
//     }else{
//         console.log('это не число')
//     }
// }
// const a = prompt('напиши число')
// all(a)

// №2
//
// Дана строка. Выведите в консоль длину этой строки.
// function string(str) {
//
//     const strech2 = str.length -1
//     console.log(strech2)
//
// }
// const strech = prompt('Выведи строку ввиде имени');
// string(strech)

// №3
//
// Дана строка. Выведите в консоль последний символ строки.

// const str = prompt("Выведи строку ввиде имени")
// console.log(str[str.length - 1])

// №4
//
// Дано число. Проверьте, четное оно или нет.
function number(n) {
    if (n % 2 === 0) {
        console.log(true)
    }else if(n % 2 === 1) {
        console.log(false)
    }else {
        console.log(n + ' это не число')
    }
}
const num = prompt('Введи число')
number(num)
