const car =
 { 
brand: "Toyota", 
model: "Camry"
 };

 Object.seal(car);
 car.brand="Suzuki";
 car.number=1234;//cant add properties but we can modify the existing properties.
 console.log(car);
 