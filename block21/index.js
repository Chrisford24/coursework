class Car {
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    getDescription() {
        return `${this.make}::${this.model}::${this.year}`
    }
}

class ElectricCar extends Car{
    constructor(make, model, year, range){
        super(make, model, year);
        this.range = range;
    }
    
    getDescription(){
        return `${this.make} :: ${this.model} :: ${this.year} :: ${this.range}`
    }
}


const cyberTruck = new ElectricCar('Tesla', 'CyberTruck', 2019, 500);

console.log(cyberTruck.getDescription());