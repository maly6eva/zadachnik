// const btn = document.querySelector('.btn')
//       overlay = document.querySelector('overlay')
//
// // btn.addEventListener('click', (e) => {
// //     console.log(e)
// //     alert('Click me!')
// // })
// //
// //
// // btn.addEventListener('click', (e) => {
// //     console.log(e)
// //     alert('Click me nuihi!')
// // })
//
//
// // btn.addEventListener('mouseenter', (e) => {
// //     e.target.remove()
// // })
//
// let i = 0;
// const deleteElement = (e) => {
//     console.log(e.currentTarget)
//     console.log(e.type)
//     // i++;
//     // if(i === 2) {
//     //     btn.removeEventListener('click', deleteElement)
//     // }
// }
//
// btn.addEventListener('click', deleteElement)
// overlay.addEventListener('click', deleteElement)
//
//
// const link = document.querySelector('a')
// link.addEventListener('clock', function(event) {
//     event.preventDefault();
//     console.log(event.target)
//
// })
//
// btn.forEach(item => {
//     item.addEventListener('click', function() {})
// })





//btn элемент на который назначается обработчик событий
//addEventListener - мы добавляем обработчик события
//click- название события
//() - колбэк функция, которая и будет нашим обработчиком


// console.log(document.body)
// console.log(document.documentElement)
// console.log(document.body.childNodes)//позволяет получить все узлы(ноды) родителя
// for (let node of document.body.childNodes) { //смотрим все узлы без текста
//     if (node.nodeName === '#text') {
//         continue
//     }
//     console.log(node)
// }
// console.log(document.body.firstChild)//первый
// console.log(document.body.firstElementChild)первый

// console.log(document.body.lastChild)//последний
// console.log(document.body.lastElementChild)//последний

// console.log(document.querySelector('.btn').parentNode
// console.log(document.querySelector('.btn').parentNode.parentNode)//получили родителя элемента
// console.log(document.querySelector('.btn').parentElement) //получаем предыдущий элемент

//
//data-атрибуты назначить что-то свойственное на что можно реантироваться
console.log(document.querySelector('[data-current="7"]').nextSibling)
console.log(document.querySelector('[data-current="7"]').nextElementSibling)

















