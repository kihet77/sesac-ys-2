class Cat {
    //생성자
    constructor (name0, age0) {
        this.name = name0;
        this.age = age0;
    }
    //메소드
    mew(){
        console.log("야오오오오오오오오오오옹")
    }

    info(){
        console.log(`이름은 ${this.name}, 나이는 ${this.age}`)
    }
}

const cat = new Cat ("나비", 2);
cat.mew();
cat.info();


class House {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    age(){
        console.log(`이 건물은 ${new Date().getFullYear() - this.year}년 되었어요.`)
    }
}

const myHouse = new House("우리집", 2000);
myHouse.age()