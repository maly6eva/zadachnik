const button = document.querySelector('.btn')
const buttonTwo = document.querySelector('.btnTwo')


const handleClick = () => {
    console.log('click - 2')
}

button.addEventListener('click', handleClick);
buttonTwo.addEventListener('click', handleClick);// повесить обработчик
// buttonTwo.addEventListener('click', handleClick);
// button.removeEventListener('click', handleClick)//поменять обработчик


const buttons = document.querySelectorAll('.btn');




buttons.forEach(button => {
    button.addEventListener('click', function() {
        console.log('clicked!')
    })
})