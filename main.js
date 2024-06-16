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


// function readNumber() {
//     let num;
//
//     do {
//         num = prompt("Введите число", 0);
//     } while ( !isFinite(num) );
//
//     if (num === null || num === '') return null;
//
//     return +num;
// }
//
// alert(`Число: ${readNumber()}`);



// 4
// реши задачу: реши задачу 2 + 3
// function readNumber() {
//     let num;
// do {
//     num = +prompt('реши задачу 2 + 3')
//         if (num !== 5) {
//             return " это не верно"
//         }else if(num === 5){
//             return num
//     }
//
//     } while ( !isFinite(num) ){
//
//     }
//
// }
// console.log(readNumber())


// 5
// Этот цикл – бесконечный. Он никогда не завершится, почему?
// let i = 0;
// while (i < 10) {
//     i += 1
//     if (i === 7) {
//         console.log(i);
//     }
// }


// 6
// Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до 1 (но не включая 1)
//
// Напишите функцию random(min, max), которая генерирует случайное число с плавающей точкой от min до max (но не включая max).
// 6.0
// не включая последний
// function randomIk(min, max) {
//     return   min + Math.random() * (max - min);
//
// }
// console.log(randomIk(1, 5));


//6.1
// от мin до max включительно
// function randomIk(min, max) {
//     return   Math.floor( min + Math.random() * (max - min + 1));
//
// }
// console.log(randomIk(1, 5));

// 6.2
// не включая первый

// function randomIk(min, max) {
//     return   Math.floor( min + 1 + Math.random() * (max - min));
//
// }
// console.log(randomIk(1, 5));