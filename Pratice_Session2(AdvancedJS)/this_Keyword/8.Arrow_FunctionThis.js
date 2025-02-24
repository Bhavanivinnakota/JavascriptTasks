function Car(name){
     this.name = name;
     this.getName=() => this.name
}

const mycar = new Car("Ford");
console.log(mycar.name)