 // function urlGen(dom) {
 //    return function (url) {
 //        return `https://${url}.${dom}`;
 //    }
 // }
 //
 // let a =  urlGen('www')
 // let b = urlGen('www2')
 // let c = urlGen('com/watch?v=pahO5XjnfLA')
 //
 // console.log(a('com'))
 // console.log(b('netflix'))
 // console.log(c('www.youtube'))

 function makeCount(count) {
    return function () {
        return count++;
    };
 }
 let a = makeCount(5)
 let b = makeCount(0)
 console.log(a());
 console.log(a());
 console.log(a())


 console.log(b());
 console.log(b());
 console.log(b());
 console.log(b());