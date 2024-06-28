// колбэк =функция, которая должна быть выполнена,
// после того, когда другая функция завершила свое выполнение


// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
//
// learnJS('JavaScript', function() {
//     console.log('Я прошел этот урок!')
// });

//или

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }
// function done() {
//     console.log('Я прошел этот урок!')
// }
//
// learnJS('JavaScript', done)


// const m = []
//
// function fun(arr){
//     for(let i = 0; i < arr.length; i++){
//         m.push(arr[i]*2)
//     }
//     return m
// }
//
// console.log(fun([2,6,8,22]))


//
// const m = []
//
// function fun(arr, instr){
//     for(let i = 0; i < arr.length; i++){
//         m.push(instr(arr[i]))
//     }
//     return m
// }
//
//
// function fun2(num){
//     return num + num
// }
//
// const s = fun([2, 6, 4], fun2)
// console.log(s)

function f(a,b) {
    let m = []

    for(let i = 0; i < a.length; i++) {
        m.push(b(a[i]))
    }
    return m
}

function g (n) {
    return n * n;
}

let rez = f([44, 8, 9], g)
console.log(rez)

















