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

//
// function world(w) {
//
//     let a = w[w.length -1]
//
//     if( a === "ь" ) {
//         return world(w.slice(0, w.length - 1));
//
//     }
//     return a;
// }
// console.log(world("морковьтьььь"))




// if(t !== "ь") return
// мукаrudejлььь => мукаrudejльь => мукаrudejль => мукаrudejл => л






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
function number(num) {
    num = "" + num
    return +num[0] + (+num[num.length - 1]);

}

console.log(number(23));
