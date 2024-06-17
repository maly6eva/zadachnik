
function extractCurrencyValue(str) {
    return parseInt(str.replace('$', ''))
}

console.log(extractCurrencyValue("$123rub") === 123)