// 11
// Дана строка. Если в этой строке более одного символа, выведите в консоль предпоследний символ этой строки.

function string(str) {
    if(str.length > 1) {
        return str[str.length - 2];
    }
    return null;


}

console.log(string('Dimochka'))