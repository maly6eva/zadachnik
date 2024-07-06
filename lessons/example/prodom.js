// const a = document.querySelectorAll('.wrapper')
// const b = document.getElementsByClassName('box')
// // const c = document.body.children
//
// a[0].remove()
// b[0].remove()
//
// for(let i = 0; i < 5; i++){
//     const div = document.createElement('div');
//     div.classList.add('box');
//     document.body.append(div)
// }
// console.log(a)
// console.log(b)
// // console.log(c)
//
// console.log(Array.from(a))


//если что-то нужно найти
const a = document.querySelectorAll('.circle')
a.forEach(circle=> {
    if(circle.matches('.this')) console.log('This one!')
})


// ecли нужно найти родителя с детьми
const a = document.querySelectorAll('.heart')
console.log(a[0].closest('.wrapper'))










