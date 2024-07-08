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
// const a = document.querySelectorAll('.circle')
// a.forEach(circle=> {
//     if(circle.matches('.this')) console.log('This one!')
// })
//
//
// // ecли нужно найти родителя с детьми
// const a = document.querySelectorAll('.heart')
// console.log(a[0].closest('.wrapper'))


// let id = Symbol('id');
//
// const obj = {
//     'name': 'Test',
//     [id]: 1,
//     getId: function() {
//         return this[id];
//     }
// }
// // obj[id] = 1
// console.log(obj.getId())

// let a = {
//     c: 436,
//     b: 'gftyh',
//     g: 98
// }
// for(const key in a) {
//     console.log(a[key])
// }

// const object1 = {
//     a: 'somestring',
//     b: 42,
// };
//
// for (const [key, value] of Object.entries(object1)) {
//     console.log(`${key}: ${value}`);
// }


const btns = document.querySelectorAll('button')
const wrapper = document.querySelector('.btn-block')
// console.log(btns[0].classList.length);
// console.log(btns[0].classList.item(1));
// console.log(btns[1].classList.add('red'));
// console.log(btns[0].classList.remove('blue));
// console.log(btns[0].classList.toggle('blue'));

if(btns[1].classList.contains('red')){
    console.log('red')
}

btns[0].addEventListener('click', () => {
    if (!btns[1].classList.contains('red')) {
        btns[1].classList.add('red')
    } else {
        btns[1].classList.remove('red')
    }
})


// wrapper.addEventListener('click', (ev) => {
//     if (ev.target && ev.target.tagName === 'BUTTON') {
//         console.log('hi')
//     }
// })
































