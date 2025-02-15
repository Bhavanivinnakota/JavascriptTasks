function create(factor){
    return function(number){
        return factor*number;
    };
}

const double= create(2);
console.log(double(5)) 