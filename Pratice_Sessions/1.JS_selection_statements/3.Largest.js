function findLargest(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log("Number1 is Largest",num1)
    }
    if(num2>num3 && num2>num1){
        console.log("Number2 is Largest",num2)
    }
    else{
        console.log("Number3 is Largest",num3)
    }
}

findLargest(4,9,2);