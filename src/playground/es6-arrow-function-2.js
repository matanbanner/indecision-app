// argument object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments)
    return a + b;
}

// but you cannot define arguments like this:

const add2 = (a, b) => {
    // console.log(arguments)
    return a + b;
}

console.log(add(55, 1));



// this keyword - no longer bound

const user = {
    name: 'Matan',
    cities: ['Haderal', 'Tel Aviv', 'Puna'],

    // this expression function bind this of the user and not of the parent scope
    printPlacesLived: function () {
        console.log(this.name)
        console.log(this.cities)

        // not going to work since annonymous function bound it's own this
        // 
        // this.cities.forEach(function (city) {
        //     console.log(this.name + ' has lived in ' + city)
        // })

        // but arrow functin does not bound this, it uses the 'this' of the outside (parent) scope
        // so instead we should do this:

        this.cities.forEach(city => {
            console.log(this.name + ' has lived in ' + city)
        })
    }
}

user.printPlacesLived()


const multiplier = {
    numbers: [1, 2, 3],
    multiplierBy: 7,
    multiply() {
        return this.numbers.map(function(n){
            return n * this.multiplierBy
        });
    }
};

console.log(multiplier.multiply());


