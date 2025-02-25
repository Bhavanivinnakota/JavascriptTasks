const obj1 = {
    name : "Liam",
}
let getData = function (age,place){
    console.log(this.name + " is " +age + " years old from " + place)
}
getData.call(obj1,25,"USA");