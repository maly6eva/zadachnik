// №4
//
// Выведите в консоль все четные числа из промежутка от 1 до 100.
// for (let i = 1; i <= 100; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }



//
// let hamburger;
// const fries = NaN;
// const cola = 0;
// const nuggets = 2;
//
//
// if (hamburger && cola || fries === 3 && nuggets) {
//     console.log('Done!')
// }

// function urlGenerator(domen) {
//     return function(url) {
//         return `https://${url}.${domen}`
//     }
// }
//
// const comUrl = urlGenerator('com')
// const ruUrl = urlGenerator('ru')
//
// console.log(comUrl('google'))
// console.log(comUrl('netflix'))
// console.log(ruUrl('gmail'))


function createFun(n) {
    return function () {
        console.log(100 + n)
    }
}
let a = createFun(5)
a()


















