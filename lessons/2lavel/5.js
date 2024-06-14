// №5
//
// Даны два числа. Проверьте, что первые цифры этих чисел совпадают.

function num(n1, n2) {

let a = n1 + " ";
let a2 = n2 + " ";

let b = +a[0];
let b2 = +a2[0];

    if (b === b2){
        return true

    } {
        return false
    }
}
console.log(num(23, 27))