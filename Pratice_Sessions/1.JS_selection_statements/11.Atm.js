function atmWithDraw(balance,amount){
    if(amount % 100 !== 0){
        return "Error : Withdrawls must be in multiples of 100"
    }
    if(amount > balance){
        return "Error : Insufficient Balance";
    }
    let remainingBalanace = balance - amount;
    return `WithDrawl successful Reamining Balance ${remainingBalanace}`;

}

console.log(atmWithDraw(1500,700));