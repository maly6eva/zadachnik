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