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
// console.log(Object.keys(option).length)
const { border, bg} = option.colors
console.log( border)

