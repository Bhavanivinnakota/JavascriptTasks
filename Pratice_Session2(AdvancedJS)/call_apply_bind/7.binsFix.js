const car = {
    brand: "Toyota",
    getBrand: function () {
    console.log(this.brand);
    },
    };
   const car2 = {
    brand : "Suzuki"
   }
    const myBrand = car.getBrand.bind(car2);
    myBrand();