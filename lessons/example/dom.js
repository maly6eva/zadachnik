const box = document.getElementById('box');
console.log(box);

const btns = document.getElementsByTagName('button')[2];
console.log(btns)

const circles = document.getElementsByClassName('circle')
console.log(circles[1]);

const hearts = document.querySelectorAll('.heart')

hearts.forEach(item => {
    console.log(item);
})

const oneHeart = document.querySelector('.heart')//вернется самый первый элемент и все
console.log(oneHeart);