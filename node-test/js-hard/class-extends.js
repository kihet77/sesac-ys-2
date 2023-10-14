class House{
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age(){
        console.log(`이 건물은 ${new Date().getFullYear() - this.year}년 되었습니다.`)
    }
}

const home = new House("새싹", 2022);
home.age()

class Apartment extends House{
    constructor(name, year, floor){
        super(name, year)
        this.floor = floor
    }

    
}

const apart = new Apartment("래미안 아파트", 2013, 25)
console.log(apart.name, apart.floor)
apart.age()


class Shape {
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    getArea(){
        console.log(this.width* this.height)
    }
}

const rec1 = new Shape(3, 4);
rec1.getArea()

class Rectangle extends Shape{
    constructor(width, height){
        super(width, height)
    }

    getArea(){
        const ares = this.width**2 + this.height**2
        console.log(Math.sqrt(ares))
    }
}

const rect = new Rectangle(3, 4)
rect.getArea()


class Triangle extends Shape{
    constructor(width, height){
        super(width, height)
    }

    getArea(){
        const ares = this.width * this.height /2
        console.log(ares)
    }
}

const trian = new Triangle(3, 4)
trian.getArea()

class Circle extends Shape{
    constructor(width, height, radius){
        super(width, height)
        this.radius = radius
    }

    getArea(){
        const ares = this.radius * ((this.width/2)**2)
        console.log(ares)
    }
}
const cir = new Circle(4,4,3.14)
cir.getArea()