// fetch('https://dummyjson.com/products')
//     .then( response => {
//          console.log("then #1", response);
//          return response.json()
//          return {
//           "products": [
//                {"name": "test-product", "description": "Test description", "price": 10},
//             ]
//        }
//     })
//     .then((res) => {
//         console.log("then #2", res);
//         // console.log(products[0]);
//         // return products[0]
//     }).then(data => {
//          console.log("then #3");
//         console.log(data)
// })
// function getData(url, errorMessage) {
//     return fetch(url)
//         .then(response => {
//             if (!response.ok){
//                 throw new Error(`${errorMessage} ${response.status}`)
//             }
//             return response.json()
//         })
// }
//
// function createSelect(array) {
//     const el = document.querySelector('.filter')
//     el.innerHTMl =`<select>
// ${array.map(arrEl => `<option value=${arrEl}>${arrEl}</option>`)}
// </select>`
// }
//
// function getCategories() {
// fetch('https://dummyjson.com/products/')
//     .then(
//         response => {
//             if(!response.ok) {
//                 throw new Error(`Is error ${response.status}`)
//             }
//             return response.json()
//         }
//     )
//     .then(response => response.json())
//         .then(data => createSelect(data))
//         .catch(error => console.error(`Ошибка: ${error}`))
//
// }
// getCategories()


// console.log(1)
//
// setTimeout(() => {
//     console.log(2);
// }, 0);
// Promise.resolve(3).then((res) => {
//     console.log(res)
//     for (let i = 0; i < 1000000; i++) {
//
//     }
// })
//
// console.log(4)
//
// for (let i = 0; i < 1000000; i++) {
//
// }

//
// const prom = new Promise((resolve, reject) => {
//     if(new Date() < new Date(`01/01/2024`)) {
//         reject(new Error('Error'))
//     }
//     resolve('Succcess')
// });
//
// prom
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//
//
//
// function timeout() {
//     return new Promise((resolve => {
//         setTimeout(() => {
//             resolve();
//
//         }, sec * 1000)
//     }))
// }
// timeout(1)
//     .then(() => {
//         console.log(1)
//         return timeout(1)
//     })
//     .then(() => {
//         console.log(1)
//         return timeout(1)
//     })
//     .then(() => {
//         console.log(1)
//         return timeout(1)
//     })


// const prom = new Promise((resolve) => {
//     console.log('Constuctor')
//     // for(let i = 0; i < 10000; i++) {
//
//     // }
//     setTimeout(() => {
//         resolve('Timer')
//     }, 1000);
// })
// prom.then(data => console.log(data))
//
// Promise.reject(new Error('Error')).catch(error => console.error(error));
// Promise.resolve('Success').then(data => console.log(data))





















