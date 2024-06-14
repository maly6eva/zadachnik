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