//первая буква всегда большая
// function capitalizeWord(word) {
//     return word[0].toUpperCase() + word.slice(1)
// }
//
//     console.log(capitalizeWord("слон"))
//
//

// 2
// Создайте скрипт, который запрашивает ввод двух чисел (используйте prompt) и после показывает их сумму.
// let num1 = +prompt("выведи число №1, пожалуйста", "");
// let num2 = +prompt("выведи число №2, пожалуйста", "");
//
// console.log(num1 + num2);



// 3
//
// Создайте функцию readNumber, которая будет запрашивать ввод числового значения до тех пор, пока посетитель его не введёт.
//
//     Функция должна возвращать числовое значение.
//
//     Также надо разрешить пользователю остановить процесс ввода, отправив пустую строку или нажав «Отмена». В этом случае функция должна вернуть null.
//
// function readNumber(a) {
//
//     if(a !== Number(a)){
//         return +prompt("Введи, пожалуйста, любое числовое значение", " ")
//     } else if (!isFinite(a)){
//         return null
//     }{
//         return "Супер, спасибо большое!"
//     }
//
//
//
// }

// let result = +prompt("Введи, пожалуйста, любое числовое значение", " ");
// let result2 = !isNaN(result);
// console.log(result2)


let  result = " ";
let i = 0;

do {
    i = i + 1;
    result = result + 1 + " "
} while(i > 5 && i < 5)

document.getElementById("exanple").innerHTML = result

