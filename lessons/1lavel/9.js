//
// 9
// Есть стоимость в виде строки "120rub".
//
//     Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять числовое значение и возвращать его.
//пример alert( extractCurrencyValue('$120') === 120 ); // true


function extractCurrencyValue(str) {
    if(parseInt(str) === +parseInt(str)){
        return true
    }


}
console.log(extractCurrencyValue("123rub"))