/* function Car(options) {
    this.title = options.title;
}

//Not to be used
Car.prototype.drive = function() {
    return 'vroom';
};

function Toyota(options) {
    this.color = options.color;
}

const toyota = new Toyota({color: 'red', title: 'Daily Driver'});

const car = new Car({title: 'Focus'}); */

//// ES6
class Car {
    constructor({ title }) {
        this.title = title;
    }

    drive(){
        return 'vroom';
    }
}

/* const car = new Car({title: 'Toyota'});
car.drive(); */

class Toyota extends Car {

    constructor(options) {
        super(options); //Car.constructor()
        this.color = options.color;
    }

    honk() {
        return 'beep';
    }
}

const toyota = new Toyota();
toyota.honk();




