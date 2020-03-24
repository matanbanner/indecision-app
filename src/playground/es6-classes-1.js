class Person {
    constructor(name = 'Anonymous', age = 0) {
        this.name = name
        this.age = age
    }

    getGretting() {
        return `Hi. I am ${this.name}`
    }

    getDescription() {
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major
    }

    hasMajor() {
        return !!this.major
    }

    getDescription () {
        let description = super.getDescription()

        if (this.hasMajor()) {
            description += ` Their major is ${this.major}`
        }

        return description;
    }
}


class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age)
        this.homeLocation = homeLocation
    }

    getGretting() {
        if (this.homeLocation) {
            return super.getGretting() + `I'm visiting from ${this.homeLocation}`
        } else {
            return super.getGretting()
        }
    }
}


const me = new Traveler('Matan Banner', 36)
console.log(me)
console.log(me.getGretting())
console.log(me.getDescription())
// console.log(me.hasMajor())

const other = new Student()
console.log(other)
console.log(other.getDescription())
console.log(other.hasMajor())

