// №5
//
// Даны два слова. Проверьте, что первые буквы этих слов совпадают.
let world = 'Птица';
let world2 = 'Потница';

let pti = world.at(0).toUpperCase();
let potn = world2.at(0).toUpperCase();
console.log(pti);

if (pti === potn) {
    console.log(true)
}else{
    console.log(false)
}