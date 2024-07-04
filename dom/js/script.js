'use strict';
const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button')[2];
console.log(btns)

const circles = document.getElementsByClassName('circle')
console.log(circles[1]);

const hearts = document.querySelectorAll('.heart')

const wrapper = document.querySelector('.wrapper');

hearts.forEach(item => {
    console.log(item);
})

const oneHeart = document.querySelector('.heart')//вернется самый первый элемент и все
console.log(oneHeart);



box.style.backgroundColor = 'blue';
box.style.width = '500px';

btns.style.borderRadius = '100%'





hearts.forEach(item =>{
    item.style.backgroundColor = 'blue'
})

const div = document.createElement('div');


div.classList.add('black')


//
// document.body.append(div)

wrapper.append(div)
// wrapper.appendChild(div)
//
// wrapper.prepend(div)

// hearts[0].before(div);
// hearts[0].after(div);
// wrapper.insertBefore(div, hearts[1])
//
// circles[0].remove() //удалить один первыый круг
// wrapper.removeChild(hearts[1])

// hearts[0].replaceWith(circles[1]); //изменем
// wrapper.replaceChild(circles[0], hearts[0])



div.innerHTML = '<h1>Hello World!</h1>'
div.textContent = 'Hello World!'
div.insertAdjacentHTML("beforebegin", '<h2>hello</h2>')
















