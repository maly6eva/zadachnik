// function schetchik(schet) {
//     return function () {
//         return schet++
//     }
// }
//
// let a = schetchik(0)
// console.log(a())
// console.log(a())
// console.log(a())
// console.log(a())

function creat() {
    let cont = 0;
    function incr() {
        cont++
    }

    function log() {
        let mes = `Count is ${cont}`;
        console.log(mes);
        console.log(mes);
    }
    return [incr, log]
}
const [incr, log] = creat()
incr()
incr()
log()