class Animal {
    constructor(name){
        this.name = name;
    }
    speak(){
        console.log(`${this.name} makes a noice`)
    }
}
const dog =new  Animal("Kitten");
dog.speak()