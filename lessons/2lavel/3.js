// №3
//
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
// function number(num) {
//     num = "" + num
//     return +num[0] + (+num[num.length - 1]);
//
// }
//
// console.log(number(23));
let num = 267897989893;

let num2 = num.toString().split("")
let num3 = num2[7];
let num4 = num2[0];

let resalt = +num3 + +num4;
console.log(resalt)