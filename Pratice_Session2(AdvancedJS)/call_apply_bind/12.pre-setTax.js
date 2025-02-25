function calculateTax(amount){
    return amount * (this.taxRate / 100);
}
const taxContent = {
    taxRate : 15
}

const percent = calculateTax.bind(taxContent);
const result = percent(1000);
console.log(result)