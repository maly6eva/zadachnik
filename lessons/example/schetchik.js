function schetchik(schet) {
    return function () {
        return schet++
    }
}

let a = schetchik(0)
console.log(a())
console.log(a())
console.log(a())
console.log(a())