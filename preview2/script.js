'use strict';
// //верстка тоже
// const box = document.querySelector('.box');
// const btn = document.querySelector('button')
//
// // const width = box.clientWidth;
// // const height = box.clientHeight;
//
// // const width = box.offsetWidth;
// // const height = box.offsetHeight;
//
// const width = box.scrollWidth;
// const height = box.scrollHeight;
//
// console.log(width, height)
//
//
// btn.addEventListener('click', () => {
//     // box.style.height = box.scrollHeight + 'px;'
//
//     console.log(box.scrollTop);
// })
//
// console.log(box.getBoundingClientRect());
// console.log(box.getBoundingClientRect().top);
//
// const style = window.getComputedStyle(box);
// console.log(style)
//
// console.log(style.display)
//
// console.log(document.documentElement.clientWidth)
//
// console.log(document.documentElement.scrollTop)


const btn = document.querySelector('button')

btn.addEventListener('click', (e) => {
   e.target.style.background = "red"
});

const obj = {
    num: 5,
    sayNum: function(){
        const say = () => {
            console.log((this.num))
        };
        say();
    }

}
obj.sayNum();


const double = (a) => {
    return a * 2;
};
console.log(double(4))
