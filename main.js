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
// function number(n) {
//     if (n % 2 === 0) {
//         console.log(true)
//     }else if(n % 2 === 1) {
//         console.log(false)
//     }else {
//         console.log(n + ' это не число')
//     }
// }
// const num = prompt('Введи число')
// number(num)



// №5
//
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
// let world = 'Птица';
// let world2 = 'Потница';
//
// let pti = world.at(0).toUpperCase();
// let potn = world2.at(0).toUpperCase();
// console.log(pti);
//
// if (pti === potn) {
//     console.log(true)
// }else{
//     console.log(false)
// }


// №6
//
// Дано слово. Получите его последнюю букву. Если слово заканчивается на мягкий знак, то получите предпоследнюю букву
// //
// function world(aby) {
//     let ab = aby.toLowerCase().slice(-1);
//     let ag = aby.toLowerCase().charAt(aby.length -2);
//     console.log(ag);
//
//    if (ab === "ь") {
//        return ag;
//    }
//        return ab;
//
// }
// console.log(world('мукаrudejль'))





// мукаrudejлььь => мукаrudejльь => мукаrudejль => мукаrudejл => л




// const printReversedWordBySymbol = (word) => {
//     let i = word.length - 1;
//     let i2 = word.length - 2;
//     while (i >= 0) {
//         console.log(word[i]);
//         i = i - 1;
// // let a = word.at();
// // console.log(a)
//          if (word === "ь") {
//             return i;
//          }{
//              return i2;
//         }
//     }
// };
//
// const worldik = "ликаь"
// printReversedWordBySymbol(worldik);





//
// №1
//
// Дано число. Выведите в консоль первую цифру этого числа.

// let a = "Barsik"
// console.log(a.at(0).toLowerCase())



//
// №2
//
// Дано число. Выведите в консоль последнюю цифру этого числа.

// let a = "Dimasik";
// console.log(a.toUpperCase().at(a.length - 1));


// №3
//
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
