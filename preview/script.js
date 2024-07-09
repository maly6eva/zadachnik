'use strict';

// const box = document.querySelector('.box')
//
// const newHeight = 0
// const newWidth = 400
//
// function chengeParam(elem, h, w) {
//     elem.style.height =`${h ?? 200}px`;
//     elem.style.width = `${w ?? 200}px`;
//     elem.innerHTML = (h ?? 200) * (w ?? 200);
// }

// chengeParam(box, newHeight, newWidth)

// let userName = NaN
// console.log(userName ?? 'User')



//contenteditable

// const box = document.querySelector('.box');
//
// let a = new MutationObserver(mutationRecords => {
//     console.log(mutationRecords);
// } );
//
// a.observe(box, {
//     childList: true
// })
//
// a.disconnect()


//функции-конструкторы
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`)
    }
}

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`)
}
const iv = new User('Iv', 23)

iv.hello()
iv.exit()

console.log(iv)