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
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`)
//     }
// }
//
// User.prototype.exit = function() {
//     console.log(`Пользователь ${this.name} ушел`)
// }
// const iv = new User('Iv', 23)
//
// iv.hello()
// iv.exit()
//
// console.log(iv)


//this - контескт вызова функции
//
// function showThis(a, b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
//
//     console.log(sum())
// }
// showThis(4, 5);
//
//
// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         console.log(this)
//     }
// }
// obj.sum()
//
//
// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.human = true;
//
//     }
// let iv = new User('Iv', 23)


// function sayName(surname ) {
//     console.log(this);
//     console.log((this.name + surname))
// }

// const user = {
//     name: 'Join'
// };
//
// sayName.call(user, 'Smit');
// sayName.apply(user, ['Smith'])
//
//
// function count(num) {
//     return this*num
// }
// const doble = count.bind(2);
// console.log(doble(3))
// console.log(doble(13))
const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    console.log(this)
})

const obj = {
    num: 5,
    sayNum: function(){
        const say = () => {
            console.log((this))
        }
        say();
    }

}
obj.sayNum();


const double = (a) => {
    return a * 2;
};
console.log(double(4))






//1) Обычная функция: this = window, но если use
//2) Контекст у методов обьекта - сам обьект
//3) this в конструкторах и классах - это новый экземпляр обьектов
//4)ручная привязка this: coll, apply, bind




























