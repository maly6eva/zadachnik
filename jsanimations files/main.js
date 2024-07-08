// const timerID = setTimeout(function(t) {
//     console.log(t)
// }, 2000, 'htgf');

// const timerID = setInterval(function(t) {
//     console.log(t)
// }, 2000, 'htgf');


// const time = setTimeout(loger, 2000);
//
// clearInterval(time)//очистить
//
// function loger () {
//     console.log('text: I love you')
// }






//
// const btn = document.querySelector('.btn');
// let time,
//     i = 0;
//
// btn.addEventListener('click', () => {
//     // const time = setTimeout(loger, 2000);
//      time = setInterval(loger, 500);
// })
//



//Рекурсивный setTimeout
// const btn = document.querySelector('.btn');
// let time,
//     i = 0;
// function loger () {
//     if(i === 3) {
//         clearInterval(time)
//     }
//     console.log('text: I love you');
//     i++;
// }
// let id = setTimeout(function log() {
//     console.log('hello');
//     id = setTimeout(log, 500);
// }, 500);

const btn = document.querySelector('.btn');
let time,
    i = 0;



const id = setInterval(f, 10);
function myAnimation() {
    const el = document.querySelector('.box');
    let pos = 0;

    function f() {
        if(pos === 300) {
            clearInterval(id);
        }else{
            pos++;
            el.style.display.top = pos + 'px'
            el.style.display.top = pos + 'px'
        }
    }
}
btn.addEventListener("click", myAnimation);














