function Car(brand,model){
    this.brand = brand;
    this.model = model;
    this.getDetails = function (){
           return `${this.brand} + ${this.model}`;
    }
}

const myCar = new Car("Mahindra","XUV");
console.log(myCar.getDetails())