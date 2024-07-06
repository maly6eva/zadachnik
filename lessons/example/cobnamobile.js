//tuuchstart
//touchmove
//touchend
//touchenter
//touchleave
//touchcancel

// window.addEventListener('DOMContentLoaded', () => {
//     const box = document.querySelector('.box')
//
//     box.addEventListener('touchstart', (e) => {
//         e.preventDefault();
//
//         console.log('Start')
//         console.log('e.touchend')
//         });
//
//
//     box.addEventListener('touchmove', (e) => {
//         e.preventDefault();
//
//         console.log(e.targetTouches[0].pageX)
//     });
//
//
//     box.addEventListener('touchend', (e) => {
//         e.preventDefault();
//
//         console.log('Start')
//     });
// });

//touches
const h = document.querySelectorAll('h1');
console.log(h)


function l(src){
    const sc = document.createElement('script')
    sc.src = src
    // sc.async = false
    document.body.append(sc)

}
l('lessons/example/cobnamobile.js')
