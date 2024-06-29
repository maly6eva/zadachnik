function copy(mainObj) {
    let objCopy = {}
    let key;
    for(key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const num = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}
const newNumbers = copy(num);

newNumbers.a = 10;
newNumbers.c.x = 10
// console.log(newNumbers)
// console.log(num)


const add = {
    d: 17,
    e: 20
}
// console.log(Object.assign(num, add))

const clone = Object.assign({},add)
clone.d = 20
console.log(add)
console.log(clone)


const old = ['a', 'b', 'c', 'd', 'e', 'f'];
const newArr = old.slice();
console.log(newArr)
console.log(old)
newArr[1] = 'ghgtfl'
console.log(newArr)


///Spred оператор разворота
const video = ['youtube', 'vim', 'gol'];
const blogs = ['vorld', 'clop']
const inter = [...video, ...blogs, 'vk']
console.log(inter)

//
function log(a, b, c) {
    console.log(a)
    console.log(b)
    console.log(c)
}

const num2 = [2, 5, 7]
log(...num2)


//
const array2 = ['a', 'g']
const new6 = [...array2]
console.log(new6)

//
const g = {
    one: 1,
    two: 2
}
const newObj = {...g}
console.log(newObj)