// const a = b(3390);
// const a = (r) => {
//
//     return 4 * 3.14 * s(r);
// }
// const s = (n) => {
//     return n * n;
// }

//
// function pow(x,n) {
//     let rez = 1
//     for (let i = 0; i < n; i++){
//         rez *= x
//     }
//     return rez
// }




// function pow(x,n) {
//     if(n === 1){
//         return x
//     }else{
//         return x * pow(x, n - 1)
//     }
//
// }
//
// console.log(pow(2,1))
// console.log(pow(2,4))
// console.log(pow(2,3))
// console.log(pow(2,2))





let students = {
    js: [{
        name: 'John',
        progress: 100
    }, {
        name: 'Ivan',
        progress: 60
    }],

    html: {
        basic: [{
            name: 'Peter',
            progress: 20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [{
            name: 'Sam',
            progress: 10
        }]
    }
};
//
// function getT(data) {
//     let total = 0;
//     let students = 0;
//
//     for(let course of Object.values(data)) {
//         if(Array.isArray(course)) {
//             students += course.length
//
//             for( let i = 0; i < course.length; i++) {
//                 total += course[i].progress
//             }
//         } else{
//             for(let subCourse of Object.values(course)) {
//                 students += subCourse.length
//
//                 for (let i = 0; i < subCourse.length; i++) {
//                     total += subCourse[i].progress
//                 }
//             }
//
//         }
//
//     }
//
//
//     return total / students
// }
//
// console.log(getT(students))// средний прогресс студентов
//
//




function getT2(data) {
    if(Array.isArray(data)) {
        let total = 0

        for( let i = 0; i < data.length; i++) {
            total += data[i].progress
        }
        return [total, data.length];
    } else {
        let total = [0, 0];
        for (let subData of Object.values(data)) {
            const subDatara = getT2(subData)
            total[0] += subDatara[0]
            total[1] += subDatara[1]
        }
        return total
    }

}
const rez =  getT2(students)
console.log(rez[0]/rez[1])













