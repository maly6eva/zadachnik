// №3
//
// Дано число. Выведите в консоль сумму первой и последней цифры этого числа.
function number(num) {
    let a = num.toString();
    return  +a[0] + +(a[a.length-1])

}
console.log(number(36579379));