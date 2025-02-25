function createDiscount(discountPercentage) {
    return function (price) {
        return price - (price * (discountPercentage / 100));
    };
}

// Create a discount function with 10% discount
const applyDiscount = createDiscount(10);

const price = 500;
const discountedPrice = applyDiscount(price);

console.log(discountedPrice); // Output: 450
