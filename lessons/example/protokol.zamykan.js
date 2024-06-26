 function urlGen(dom) {
    return function (url) {
        return `https://${url}.${dom}`;
    }
 }

 let a =  urlGen('www')
 let b = urlGen('www2')
 let c = urlGen('com/watch?v=pahO5XjnfLA')

 console.log(a('com'))
 console.log(b('netflix'))
 console.log(c('www.youtube'))