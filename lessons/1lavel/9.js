// 9
// Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем – число.
//
//     Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
//


function extractCurrencyValue(str) {
    if(parseInt(str) === +parseInt(str)){
        return true
    }


}
console.log(extractCurrencyValue("123rub"))