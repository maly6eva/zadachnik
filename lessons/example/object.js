const option = {
    name: 'test',
    width: 1024,
    height: 12,
    colors: {
        border: 'red',
        bg: 'blue'
    },
    makeTest: function() {
        console.log('test')
    }
}
option.makeTest()
console.log(Object.keys(option).length)

// console.log(option['name'])
// console.log(option.name)
//
// delete option.name  //удаляем
//
// console.log(option)


for(let key in option) {
    console.log(`Cвойство ${key} и значение ${option[key]}`)
}
let counter = 0;
for (let key in option) {
    if (typeof (option[key]) === 'object') {
        for (let i in option[key]) {
            console.log(`Cвойство ${key} и значение ${option[key][i]}`)
            counter++
        }
    } else {
        console.log(`Cвойство ${key} и значение ${option[key]}`)
        counter++
    }
    console.log(counter)

}



























