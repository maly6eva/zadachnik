class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }
    calcArea() {
        return this.height * this.width;
    }

 }

 class Col extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width)
        this.text = text;
        this.bgColor = bgColor;

    }
     showmyProps(){
         console.log( `Text: ${this.text}, цвет ${this.bgColor}`)
     }

 }
 const div = new Col(25, 10, 'Hello', 'red');
div.showmyProps();
console.log(div.calcArea())
 const sq = new Rectangle(10,9)

const l = new Rectangle(4, 4)

console.log(sq.calcArea())
console.log(l.calcArea())

//абстракция - когда мы отделяем концепцию от него экземпляра

